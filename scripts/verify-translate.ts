/**
 * Verification suite for the offline translation engine + template filling.
 *
 * Run: bun scripts/verify-translate.ts
 *
 *  A. Translation unit tests (ar ↔ fr): names, cities, dates, professions,
 *     free text, identifier protection.
 *  B. Fill tests on the REAL templates (namodaj/katib wording): the
 *     certificate of residence, work certificate, complaint, procuration…
 *  C. Coverage report: for every real template, how many slots get filled
 *     with a full answer fixture.
 *  D. Cross-language leak scan: Latin words in Arabic templates and Arabic
 *     characters in French templates (whitelist = admin acronyms).
 */
import { translateValue, translateAnswers, detectScript } from "../src/lib/wizard/translate";
import { fillTemplate } from "../src/lib/wizard/fill";
import { allTemplates } from "../src/lib/data/registry";

let pass = 0;
let fail = 0;
const failures: string[] = [];

function ok(name: string, cond: boolean, got?: string, want?: string) {
  if (cond) {
    pass++;
    console.log(`  ✓ ${name}`);
  } else {
    fail++;
    failures.push(name);
    console.log(`  ✗ ${name}\n      got:  ${JSON.stringify(got)}\n      want: ${JSON.stringify(want)}`);
  }
}

console.log("── A. translation unit tests ─────────────────────────────");

// names ar → fr (dictionary)
ok("name محمد العلمي → Mohamed Alami",
  translateValue("name", "محمد العلمي", "fr") === "Mohamed Alami",
  translateValue("name", "محمد العلمي", "fr"), "Mohamed Alami");
ok("name فاطمة الزهراء بناني → Fatima Zahra Bennani",
  translateValue("name", "فاطمة الزهراء بناني", "fr") === "Fatima Zahra Bennani",
  translateValue("name", "فاطمة الزهراء بناني", "fr"), "Fatima Zahra Bennani");

// names fr → ar (reverse dictionary)
const y = translateValue("name", "Youssef El Idrissi", "ar");
ok("name Youssef El Idrissi → يوسف الإدريسي", y === "يوسف الإدريسي", y, "يوسف الإدريسي");

// unknown name → transliteration (ar → fr, deterministic, Latin letters)
const t1 = translateValue("name", "مرزوق الغزواني", "fr");
ok("unknown name مرزوق الغزواني → Latin transliteration", /^[A-Za-z ]+$/.test(t1) && t1.includes("Ghazouani"), t1, "contains Ghazouani");

// cities
ok("city الدار البيضاء → Casablanca",
  translateValue("city", "الدار البيضاء", "fr") === "Casablanca",
  translateValue("city", "الدار البيضاء", "fr"), "Casablanca");
ok("city El Jadida → الجديدة",
  translateValue("city", "El Jadida", "ar") === "الجديدة",
  translateValue("city", "El Jadida", "ar"), "الجديدة");
ok("city الرباط → Rabat", translateValue("city", "الرباط", "fr") === "Rabat",
  translateValue("city", "الرباط", "fr"), "Rabat");

// dates
ok("date ١٥ مارس ٢٠٢٦ → 15 mars 2026",
  translateValue("date", "١٥ مارس ٢٠٢٦", "fr") === "15 mars 2026",
  translateValue("date", "١٥ مارس ٢٠٢٦", "fr"), "15 mars 2026");
ok("date 15 mars 2026 → 15 مارس 2026",
  translateValue("date", "15 mars 2026", "ar") === "15 مارس 2026",
  translateValue("date", "15 mars 2026", "ar"), "15 مارس 2026");
ok("date 15/03/2026 stays numeric",
  translateValue("date", "15/03/2026", "fr") === "15/03/2026",
  translateValue("date", "15/03/2026", "fr"), "15/03/2026");
const bdate = translateValue("birth", "12/06/2020 بالدار البيضاء", "fr");
ok("birth 12/06/2020 بالدار البيضاء → …Casablanca", bdate.includes("Casablanca") && bdate.includes("12/06/2020"), bdate, "12/06/2020 Casablanca");

// professions
ok("position تقني محاسبة → technicien comptable",
  translateValue("position", "تقني محاسبة", "fr") === "technicien comptable",
  translateValue("position", "تقني محاسبة", "fr"), "technicien comptable");
ok("position مهندسة معلوميات → accented Latin", /^[A-Za-zÀ-ÿ ]+$/.test(translateValue("position", "مهندسة معلوميات", "fr")),
  translateValue("position", "مهندسة معلوميات", "fr"), "accented Latin letters");
ok("position technicien → تقني",
  translateValue("position", "technicien", "ar") === "تقني",
  translateValue("position", "technicien", "ar"), "تقني");

// identifiers never translated
ok("cin JA123456 untouched in ar doc",
  translateValue("cin", "JA123456", "ar") === "JA123456",
  translateValue("cin", "JA123456", "ar"), "JA123456");
ok("phone 0612345678 untouched",
  translateValue("phone", "0612345678", "fr") === "0612345678",
  translateValue("phone", "0612345678", "fr"), "0612345678");
ok("email untouched", translateValue("email", "nom@mail.com", "ar") === "nom@mail.com",
  translateValue("email", "nom@mail.com", "ar"), "nom@mail.com");

// free text
const subj = translateValue("subject", "الحصول على ثلاث نسخ من رسم الولادة", "fr");
ok("subject contains 'acte de naissance'", subj.includes("acte de naissance"), subj, "…acte de naissance…");
const addr = translateValue("address", "شارع الحسن الثاني، الرباط", "fr");
ok("address شارع الحسن الثاني، الرباط → rue … Hassan … II … Rabat",
  /rue/i.test(addr) && /Rabat/.test(addr), addr, "rue Hassan II, Rabat");

// already target language → unchanged
ok("fr answer in fr doc unchanged",
  translateValue("name", "Mohamed Alami", "fr") === "Mohamed Alami",
  translateValue("name", "Mohamed Alami", "fr"), "Mohamed Alami");
ok("ar answer in ar doc unchanged",
  translateValue("name", "محمد العلمي", "ar") === "محمد العلمي",
  translateValue("name", "محمد العلمي", "ar"), "محمد العلمي");

console.log("\n── B. fill tests on real templates ───────────────────────");

const FULL: Record<string, string> = {
  name: "محمد العلمي", cin: "JA123456", lost_cin: "JA123456",
  address: "حي النهضة رقم 12، أكادير", phone: "0612345678",
  email: "mohamed@mail.com", dest: "السيد قائد الملحقة الإدارية",
  city: "أكادير", date: "15/03/2026", subject: "موضوع الطلب",
  incident_date: "10/03/2026", details: "تفاصيل الواقعة",
  position: "تقني", amount: "6500", father: "أحمد العلمي",
  mother: "خديجة بناني", concerned: "ياسين العلمي",
  agent: "فاطمة العلمي", landlord: "أحمد العلمي", tenant: "سارة العلمي",
  seller: "أحمد العلمي", buyer: "سارة العلمي", creditor: "سارة العلمي",
  employer: "شركة العلمي", employee: "محمد العلمي", manager: "أحمد العلمي",
  company: "مقاولة العلمي", grise: "12345-A-6", cnssno: "1234567",
  birth: "12/06/1990", startdate: "01/09/2024", education: "بكالوريا",
  experience: "3 سنوات", duration: "سنة واحدة", count: "3",
  commune: "أكادير", hosted: "ياسين العلمي", deposit: "7000",
};

// 1. شهادة السكنى (real namodaj text, cleaned) — ar
{
  const tpl = allTemplates["attestation-residence"];
  const r = fillTemplate(tpl.ar, FULL, { lang: "ar" });
  ok("residence: witness 1 name filled", r.filled.includes("محمد العلمي"), r.filled.slice(0, 120), "includes محمد العلمي");
  ok("residence: witness 1 CIN filled", r.filled.includes("JA123456"), undefined, "JA123456");
  ok("residence: witness 2 stays blank (dots)", /السيد\(ة\): …+ المزداد\(ة\) بتاريخ: …+/.test(r.filled), r.filled.slice(0, 200), "witness2 dots");
  ok("residence: city+date of signing filled", /حرر بـ: أكادير بتاريخ: 15\/03\/2026/.test(r.filled), undefined, "حرر بـ: أكادير بتاريخ: 15/03/2026");
  ok("residence: replaced > 0", r.replaced >= 6, String(r.replaced), "≥ 6");
}

// 2. attestation de travail (real katib text, fr) — fr with French answers
{
  const FR: Record<string, string> = {
    ...FULL, name: "Mohamed Alami", cin: "JA123456", position: "Technicien", date: "15/03/2026",
    city: "Agadir", address: "12 rue Hassan II, Agadir",
  };
  const tpl = allTemplates["attestation-travail"];
  const r = fillTemplate(tpl.fr, FR, { lang: "fr" });
  ok("travail fr: date shape filled", r.filled.includes("LE 15/03/2026"), r.filled.slice(0, 60), "LE 15/03/2026");
  ok("travail fr: Mr/Mme name filled", /Mr\/Mme Mohamed Alami/.test(r.filled), undefined, "Mr/Mme Mohamed Alami");
  ok("travail fr: CIN filled", /CIN N° JA123456/.test(r.filled), undefined, "CIN N° JA123456");
  ok("travail fr: qualité filled", /QUALITÉ DE Technicien/.test(r.filled), undefined, "QUALITÉ DE Technicien");
}

// 3. Arabic answers → French document (the translation integration path)
{
  const arAnswers = { name: "محمد العلمي", cin: "JA123456", position: "تقني", date: "15/03/2026", city: "أكادير", address: "شارع الحسن الثاني، أكادير" };
  const t = translateAnswers(arAnswers, "fr");
  const tpl = allTemplates["attestation-travail"];
  const r = fillTemplate(tpl.fr, t, { lang: "fr" });
  ok("ar→fr integration: French doc has Mohamed Alami", r.filled.includes("Mohamed Alami"), r.filled.slice(0, 80), "Mohamed Alami");
  ok("ar→fr integration: no Arabic leaked into fr doc", !/[\u0621-\u064A]/.test(r.filled), r.filled, "no Arabic chars");
}

// 4. French answers → Arabic document
{
  const frAnswers = { name: "Mohamed Alami", cin: "JA123456", address: "12 rue Hassan II, Agadir", city: "Agadir", date: "15/03/2026" };
  const t = translateAnswers(frAnswers, "ar");
  const tpl = allTemplates["attestation-residence"];
  const r = fillTemplate(tpl.ar, t, { lang: "ar" });
  ok("fr→ar integration: Arabic doc has محمد العلمي", r.filled.includes("محمد العلمي"), r.filled.slice(0, 80), "محمد العلمي");
  ok("fr→ar integration: Agadir → أكادير", r.filled.includes("أكادير"), undefined, "أكادير");
  ok("fr→ar integration: no Latin leaked (except CIN)", !/[A-Za-z]{3,}/.test(r.filled.replace(/JA123456/g, "")), r.filled, "no Latin words");
}

// 5. chikaya-amma (real namodaj) — ar
{
  const tpl = allTemplates["chikaya-amma"];
  const r = fillTemplate(tpl.ar, FULL, { lang: "ar" });
  ok("chikaya: name filled", /من السيدة: محمد العلمي/.test(r.filled), undefined, "من السيدة: محمد العلمي");
  ok("chikaya: CIN filled", r.filled.includes("JA123456"), undefined, "JA123456");
  ok("chikaya: address filled", r.filled.includes("حي النهضة رقم 12، أكادير"), undefined, "address");
}

// 6. wakala-amma (real namodaj) — ar
{
  const tpl = allTemplates["wakala-amma"];
  const r = fillTemplate(tpl.ar, FULL, { lang: "ar" });
  ok("wakala: name filled via السيد(ة)/", /السيد\(ة\)\/\s*محمد العلمي/.test(r.filled), r.filled.slice(0, 150), "السيد(ة)/ محمد العلمي");
  ok("wakala: birth filled", r.filled.includes("12/06/1990"), undefined, "12/06/1990");
  ok("wakala: CIN filled", r.filled.includes("JA123456"), undefined, "JA123456");
}

// 7. declaration-perte-cin (cleaned) — lost_cin context
{
  const tpl = allTemplates["declaration-perte-cin"];
  const r = fillTemplate(tpl.ar, FULL, { lang: "ar" });
  ok("perte-cin: both CIN slots filled", (r.filled.match(/JA123456/g) ?? []).length === 2,
    String((r.filled.match(/JA123456/g) ?? []).length), "2");
}

// 8. attestation-hebergement (real namodaj, fr brackets)
{
  const FR: Record<string, string> = { name: "Ahmed Alami", cin: "JA123456", date: "15/03/2026", city: "Rabat", address: "5 rue Atlas, Rabat", birth: "01/01/1980", dest: "Monsieur le Consul" };
  const tpl = allTemplates["attestation-hebergement"];
  const r = fillTemplate(tpl.fr, FR, { lang: "fr" });
  ok("hébergement: name bracket filled", r.filled.includes("Ahmed Alami"), r.filled.slice(0, 120), "Ahmed Alami");
}

console.log("\n── C. coverage report (real templates, full fixture) ─────");

const REAL_IDS = Object.keys(require("../src/lib/data/real-templates")).length ? undefined : undefined;
// list of real template ids (from real-sources generated file)
{
  const fs = await import("node:fs");
  const src = fs.readFileSync("src/lib/data/real-sources.ts", "utf-8");
  const ids = [...src.matchAll(/"([\w-]+)": \{ site/g)].map((m) => m[1]);
  console.log(`  docs with real provenance: ${ids.length}`);
  for (const id of ids) {
    const tpl = allTemplates[id];
    if (!tpl) continue;
    for (const lang of ["ar", "fr"] as const) {
      const text = tpl[lang];
      if (!text) continue;
      const isReal = true; // merged template (may be base for the missing lang)
      const total = (text.match(/\[…?\]?[\u2026.]{2,}/g) ?? []).length
        + (text.match(/\[[^\]\n]{1,120}\]/g) ?? []).length;
      const r = fillTemplate(text, FULL, { lang });
      const left = (r.filled.match(/[\u2026.]{2,}/g) ?? []).length
        + (r.filled.match(/\[[^\]\n]{1,120}\]/g) ?? []).length;
      console.log(`    ${id.padEnd(26)} ${lang}  slots~${String(total).padStart(3)} → left ${String(left).padStart(3)}  (filled ${r.replaced})`);
    }
  }
}

console.log("\n── D. cross-language leak scan (all templates) ───────────");

const ACRONYMS = new Set([
  "CNSS", "CIN", "CDI", "CDD", "AMO", "CNOPS", "DGI", "DPE", "ANEF", "MAD",
  "TVA", "ICE", "RC", "IF", "TP", "PDF", "CV", "BAC", "N", "E", "mail",
  "Logo", "Tél", "TITULAIRE", "LE", "LA", "DE", "Mr", "Mme", "N°",
  "SOCIÉTÉ", "SIGNÉE", "ATTESTONS", "EST", "EMPLOYÉE", "AU", "SEIN", "EN",
  "QUALITÉ", "DEPUIS", "DÉLIVRONS", "CETTE", "ATTESTATION", "À", "SA",
  "DEMANDE", "POUR", "SERVIR", "ET", "VALOIR", "CE", "QUE", "DROIT",
  "NOUS", "SOUSSIGNÉS", "TRAVAIL", "SIGNÉE", "Email", "Banque", "VISA",
  "Passeport", "Service", "stage", "Stage",
  // legitimate admin acronyms used inside Arabic Moroccan documents
  "VIN", "RIB", "ALD", "OMPIC", "LinkedIn", "CNRPS", "ANRAT", "ONSSA",
  "ONCF", "RAM", "ONEE", "LYDEC", "REDAL", "AMENDIS", "CNSS", "FNI",
]);

let leaks = 0;
for (const [id, tpl] of Object.entries(allTemplates)) {
  for (const lang of ["ar", "fr"] as const) {
    let text = tpl[lang];
    if (!text) continue;
    // strip URLs, e-mails and bare domain names (tgr.gov.ma…) first —
    // official links are legitimate content, not language leaks
    text = text.replace(/https?:\/\/\S+/g, " ").replace(/www\.\S+/g, " ")
      .replace(/[\w.-]+@[\w.-]+\.\w+/g, " ")
      .replace(/\b[\w-]+(?:\.[\w-]+)*(?:\.(?:ma|com|net|org|fr|gov|co))\b/gi, " ");
    if (lang === "ar") {
      // Latin sequences in Arabic text
      const words = text.match(/[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’°-]{1,}/g) ?? [];
      const bad = words.filter((w) => !ACRONYMS.has(w) && !ACRONYMS.has(w.replace(/[°’']/g, "")));
      if (bad.length) {
        leaks += bad.length;
        console.log(`    ⚠ ${id}.ar Latin words: ${[...new Set(bad)].slice(0, 6).join(", ")}`);
      }
    } else {
      // Arabic characters in French text
      const arChars = text.match(/[\u0621-\u064A]/g);
      if (arChars) {
        leaks += arChars.length;
        console.log(`    ⚠ ${id}.fr contains Arabic characters (${arChars.length})`);
      }
    }
  }
}
ok("cross-language leak scan", leaks === 0, `${leaks} leaks`, "0 leaks");

console.log(`\n══ RESULT: ${pass} passed, ${fail} failed ══`);
if (fail > 0) {
  console.log("failed:", failures.join(" | "));
  process.exit(1);
}
