// Template token classifier + document generator + validators.
// Fills [..] placeholders AND dot-leader slots (…… / .......) in templates
// from collected answers. Language-agnostic: handles Arabic and French token
// wording, and the dot-leader blanks used by real Moroccan form libraries
// (katib.ma / namodaj.ma style "………").
import type { Answers, WizardField } from "./fields";
import type { Locale } from "@/lib/i18n/types";
import type { DocLang } from "./translate";

export interface FillResult {
  filled: string;
  remaining: string[]; // unresolved slot descriptions, for manual editing
  replaced: number;
}

interface Rule {
  test: RegExp;
  keys: string[]; // first key with an answer wins
}

/** Ordered classification rules — most specific first. */
const RULES: Rule[] = [
  // combined address + city
  { test: /العنوان\s*\/\s*المدينة|Adresse\s*\/\s*Ville/i, keys: ["__addr_city"] },
  // registration numbers (before generic CIN)
  { test: /رقم التسجيل|التسجيل CNSS|N° CNSS|immatriculation|N° d'immatriculation/i, keys: ["cnssno"] },
  { test: /الرمادية|رقم البطاقة الرمادية|carte grise/i, keys: ["grise"] },
  // specific person names before generic name
  { test: /الوكيل|المفوض إليه|mandataire/i, keys: ["agent"] },
  { test: /اسم المعني|المعني بالوثيقة|concerné/i, keys: ["concerned"] },
  { test: /اسم الأب|nom du père/i, keys: ["father"] },
  { test: /اسم الأم|nom de la mère/i, keys: ["mother"] },
  { test: /المكري|bailleur/i, keys: ["landlord"] },
  { test: /المكتري|locataire/i, keys: ["tenant"] },
  { test: /البائع|المتنازل(؟)?\b|vendeur|cédant/i, keys: ["seller"] },
  { test: /المشتري|المتنازل له|acquéreur|cessionnaire/i, keys: ["buyer"] },
  { test: /الدائن|créancier/i, keys: ["creditor"] },
  { test: /المدين(ة)?|débiteur/i, keys: ["name"] }, // "المدين" in dette = debtor
  { test: /المشغل|employeur/i, keys: ["employer"] },
  { test: /الأجير|المستضاف|salarié|hébergé/i, keys: ["employee"] },
  { test: /المسؤول|responsable/i, keys: ["manager"] },
  { test: /المقاولة|تسمية المقاولة|Entreprise|entreprise|société|Raison sociale/i, keys: ["company"] },
  // identity
  { test: /الاسم الكامل|اسم الموقع|اسم(؟)?\s*$|Nom complet|nom et prénom/i, keys: ["name"] },
  { test: /الاسم|الطالب(ة)?\s*$|^\[Nom\]?$|nom$/i, keys: ["name"] },
  { test: /البطاقة(?! الرمادية)|CIN|carte d'identité/i, keys: ["cin", "lost_cin"] },
  { test: /الهاتف|Téléphone|tél\b/i, keys: ["phone"] },
  { test: /البريد|E-mail|email/i, keys: ["email"] },
  { test: /العنوان الكامل|الساكن(ة)? بـ|العنوان(؟)?$|Adresse complète|Habite/i, keys: ["address"] },
  // dates — specific variants before generic
  { test: /الولادة|naissance/i, keys: ["birth"] },
  { test: /التوظيف|الالتحاق|embauche/i, keys: ["startdate"] },
  { test: /الاستحقاق|échéance/i, keys: ["incident_date"] },
  { test: /الواقعة|الحادث|incident|accident/i, keys: ["incident_date"] },
  { test: /التاريخ|تاريخ|Date(?! de naissance)|\bdate\b|اليوم|jour/i, keys: ["date"] },
  // place
  { test: /المكان|المدينة|Lieu|Ville|ville/i, keys: ["city"] },
  // work
  { test: /الوظيفة|المنصب|المسمى الوظيفي|Poste(?! :)|\bposte\b/i, keys: ["position"] },
  { test: /المستوى|niveau/i, keys: ["education"] },
  { test: /المهارات|compétences/i, keys: ["details"] },
  { test: /الخبرات|expériences/i, keys: ["experience"] },
  // money & time
  { test: /المبلغ|Montant|الثمن|prix|Salaire/i, keys: ["amount"] },
  { test: /المدة|durée/i, keys: ["duration"] },
  { test: /عدد|nombre|Nombre/i, keys: ["count"] },
  // subject / destination / details
  { test: /الموضوع|الغرض|Objet|objet/i, keys: ["subject"] },
  { test: /الموجه إليها|الموجه إليه|المرجو من|destinataire|à l'attention/i, keys: ["dest"] },
  { test: /التفاصيل|الظروف|Détails|circonstances|نص التصريح|préciser|Description|description/i, keys: ["details"] },
  // misc old-template tokens
  { test: /الجماعة|commune/i, keys: ["commune", "city"] },
  { test: /المصلحة|direction/i, keys: ["details"] },
  { test: /domaine/i, keys: ["position"] },
  { test: /intitulé/i, keys: ["position"] },
  { test: /السنة|année/i, keys: ["incident_date"] },
  { test: /شعار/i, keys: [] }, // logo → manual
];

/**
 * Context rules for pure-dot slots (…… / [......]). Ordered most specific
 * first — when two rules match the same context window, the one whose match
 * ends closest to the slot wins; ties go to the earlier (more specific) rule.
 */
const CONTEXT_RULES: { test: RegExp; key: string }[] = [
  // birth: "المزداد(ة) بتاريخ:" MUST win over the generic بتاريخ inside it
  // (both swallow the trailing colon so they end together → list order wins).
  // [()]? in both positions = tolerant of "(ة)", ")ة(" (some real Moroccan
  // templates use mirrored parentheses) or no parentheses at all.
  { test: /المزداد\s*[()]?[ةه]?[()]?\s*بتاريخ\s*[::]?\s*|date de naissance|مكان الولادة|تاريخ الولادة|né\(e\)\s*le/i, key: "birth" },
  // lost-ID context (declaration de perte): the card that was lost — BEFORE
  // the generic cin rule so it wins the "…رقم :" tie
  { test: /التي تحمل رقم\s*[::]?\s*|البطاقة الضائعة|الضائعة|المفقودة|perdue/i, key: "lost_cin" },
  // CIN: "الحامل(ة) لبطاقة التعريف الوطنية رقم:" — the رقم: alternative of the
  // same rule reaches the slot, so it beats shorter matches on the line
  { test: /الحامل\s*[()]?[ةه]?[()]?\s*(ل|لل)بطاقة|بطاقة التعريف الوطنية رقم|رقم البطاقة|N°\s*CIN|CIN\s*N°|TITULAIRE DE LA CIN|رقم\s*[::]\s*$/i, key: "cin" },
  { test: /اسم الأب|nom du père/i, key: "father" },
  { test: /اسم الأم|nom de la mère/i, key: "mother" },
  { test: /اسم المعني|concerné/i, key: "concerned" },
  // attorney-in-fact: "أوكل عني السيد(ة)/" (procuration) — swallows through
  // the السيد(ة)/ marker so it ties the generic name rule and wins by order
  { test: /أوكل عني\s*السيد\s*[()]?[ةه]?[()]?\s*[:\/]?\s*|أوكل عني|وكّل عني|المفوض إليه|mandataire/i, key: "agent" },
  { test: /رقم البطاقة|N° CIN|CIN/i, key: "cin" },
  { test: /الهاتف|Tél/i, key: "phone" },
  // address variants used by real Moroccan templates (swallow "بـ:" so the
  // match reaches the slot and ties are broken by list order)
  { test: /والساكن\s*[()]?[ةه]?[()]?\s*بـ?\s*[::]?\s*|الساكن\s*[()]?[ةه]?[()]?\s*بـ?\s*[::]?\s*|الساكن\s*[()]?[ةه]?[()]?\s*$|demeurant?\s*à|Habite|العنوان\s*[()]?[ةه]?[()]?\s*[::]?\s*$|Adresse/i, key: "address" },
  { test: /البريد|mail/i, key: "email" },
  // person: "من السيد(ة):" / "السيد(ة)/" / mirrored parens / "Mr/Mme"
  { test: /السيد\s*[()]?[ةه]?[()]?\s*[:\/]|Mr\/Mme|Monsieur\/Madame/i, key: "name" },
  // professions / roles
  { test: /صفته|بصفته|بصفتي|EN QUALITÉ DE|en qualité de|الوظيفة|بوظيفة/i, key: "position" },
  { test: /المكري|bailleur/i, key: "landlord" },
  { test: /المكتري|locataire/i, key: "tenant" },
  { test: /الوكيل|mandataire/i, key: "agent" },
  // dates — specific before generic
  { test: /مزداد(ة)?\s*بتاريخ|depuis|منذ|مند\s|DEPUIS/i, key: "startdate" },
  { test: /التاريخ|بتاريخ\s*:?\s*$|Date|LE\s*$|le\s*:?\s*$|في\s*:?\s*$/i, key: "date" },
  // place — "حرر   بـ..." tolerates flexible spacing; bare "مدينة" variant
  { test: /حرر\s*بـ?|حرر بال|Fait à|المكان|المدينة|مدينة\s*[::]?\s*$|Lieu|Ville/i, key: "city" },
  // destination
  { test: /إلى السيد|قائد|الملحقة الإدارية|à l'attention|destinataire/i, key: "dest" },
  { test: /المبلغ|بمبلغ\s*قدره?|بمبلغ|Montant/i, key: "amount" },
  { test: /عدد|nombre/i, key: "count" },
];

const BRACKET = /\[([^\][\n]{1,120})\]/g;
/** Dot-leader slot: run of ≥2 ellipsis/dot chars (……… / ......, mixed too). */
const DOT_SLOT = /[\u2026.]{2,}/g;
/** Date-shaped slot: …/…./……… (dot groups separated by slashes). */
const DATE_SLOT = /(?=[\u2026./]*\/)[\u2026./]{5,}/g;

function resolve(keys: string[], answers: Answers): string | null {
  for (const k of keys) {
    if (k === "__addr_city") {
      const a = answers.address?.trim();
      const c = answers.city?.trim();
      if (a && c) return `${a}، ${c}`;
      if (a) return a;
      if (c) return c;
      continue;
    }
    const v = answers[k];
    if (v && v.trim()) return v.trim();
  }
  return null;
}

/** Pick the context rule whose match ends closest to the slot. */
function pickContextRule(before: string): { key: string; end: number } | null {
  let bestKey: string | null = null;
  let bestEnd = -1;
  for (const cr of CONTEXT_RULES) {
    const matches = [...before.matchAll(new RegExp(cr.test.source, "gi"))];
    const last = matches[matches.length - 1];
    if (last && last.index !== undefined) {
      const end = last.index + last[0].length;
      if (end > bestEnd) {
        bestEnd = end;
        bestKey = cr.key;
      }
    }
  }
  return bestKey ? { key: bestKey, end: bestEnd } : null;
}

/** Human label for an unfilled dot slot (context words, trimmed). */
function dotLabel(before: string): string {
  const ctx = before.replace(/[\s:،,\-–—]*$/, "").trim();
  const tail = ctx.split(/[\s،,]+/).slice(-3).join(" ");
  return tail ? `…… ${tail}` : "………";
}

/**
 * Fill a template from collected answers.
 * @param opts.lang target document language (affects the address+city
 *        separator and date shapes). Defaults to "ar".
 */
export function fillTemplate(
  text: string,
  answers: Answers,
  opts?: { lang?: DocLang }
): FillResult {
  const lang: DocLang = opts?.lang ?? "ar";
  const remaining: string[] = [];
  let replaced = 0;

  // ── pass 0: address + city combined slot (locale-aware separator) ──
  const addrCity = (a: string, c: string) => `${a}${lang === "fr" ? ", " : "، "}${c}`;

  // ── pass 1: bracket slots [.....] ──
  let filled = text.replace(
    BRACKET,
    (match, inner: string, offset: number) => {
      const content = String(inner);
      const isBlank = /^[.\s…‑-]*$/.test(content);
      let keys: string[] | null = null;

      const lineStart = text.lastIndexOf("\n", offset) + 1;
      const before = text.slice(Math.max(lineStart, offset - 60), offset);

      if (!isBlank) {
        for (const rule of RULES) {
          if (rule.test.test(content)) {
            keys = rule.keys;
            break;
          }
        }
        // "Commune de [nom]" → the commune/city, not the person
        if (
          keys?.includes("name") &&
          /^(nom|الاسم)$/i.test(content) &&
          /commune|الجماعة/i.test(before)
        ) {
          keys = ["commune", "city"];
        }
      } else {
        const pick = pickContextRule(before);
        keys = pick ? [pick.key] : null;
      }

      // resolve (with locale-aware addr_city)
      let value: string | null = null;
      if (keys) {
        if (keys.includes("__addr_city")) {
          const a = answers.address?.trim();
          const c = answers.city?.trim();
          value = a && c ? addrCity(a, c) : a || c || null;
        } else {
          value = resolve(keys, answers);
        }
      }
      if (value) {
        replaced++;
        return value;
      }
      const label = isBlank ? "………" : content.replace(/[.…]+$/, "").trim();
      if (label && !remaining.includes(label)) remaining.push(label);
      return match; // keep slot for manual editing
    }
  );

  // ── pass 2: date-shaped slots (…/…./………) ──
  const usedDotKeys = new Set<string>();
  // city & date may legitimately repeat (signing place + prefecture city,
  // several dates) — identity fields (name, CIN, birth…) fill only once so a
  // second witness block stays blank for handwriting, like the paper form.
  const repeatable = (k: string) => k === "city" || k === "date";
  filled = filled.replace(DATE_SLOT, (match, offset: number) => {
    const lineStart = filled.lastIndexOf("\n", offset) + 1;
    const before = filled.slice(Math.max(lineStart, offset - 60), offset);
    const pick = pickContextRule(before);
    // date-shaped: prefer birth/startdate context, else the document date
    const key =
      pick && (pick.key === "birth" || pick.key === "startdate" || pick.key === "incident_date")
        ? pick.key
        : "date";
    if (usedDotKeys.has(key) && !repeatable(key)) return match;
    const v = answers[key];
    if (v && v.trim()) {
      usedDotKeys.add(key);
      replaced++;
      return v.trim();
    }
    return match;
  });

  // ── pass 3: plain dot-leader slots (………) ──
  filled = filled.replace(DOT_SLOT, (match, offset: number) => {
    const lineStart = filled.lastIndexOf("\n", offset) + 1;
    const before = filled.slice(Math.max(lineStart, offset - 60), offset);
    const pick = pickContextRule(before);
    if (!pick) return match; // no recognised context → leave blank
    const key = pick.key;
    // each identity context key fills only its FIRST dot slot (witness n°2,
    // second signature line… stay blank like the real paper form); city and
    // date may repeat
    if (usedDotKeys.has(key) && !repeatable(key)) return match;
    const v = answers[key];
    if (v && v.trim()) {
      usedDotKeys.add(key);
      replaced++;
      return v.trim();
    }
    return match;
  });

  // ── pass 4: report unfilled dot slots as remaining (deduped) ──
  const dotLeft = filled.match(new RegExp(DOT_SLOT.source, "g")) ?? [];
  let cursor = 0;
  for (const slot of dotLeft.slice(0, 12)) {
    const idx = filled.indexOf(slot, cursor);
    if (idx < 0) break;
    cursor = idx + slot.length;
    const lineStart = filled.lastIndexOf("\n", idx) + 1;
    const before = filled.slice(Math.max(lineStart, idx - 60), idx);
    const label = dotLabel(before);
    if (!remaining.includes(label)) remaining.push(label);
  }

  return { filled, remaining, replaced };
}

export type ValidationErr = "required" | "cin" | "phone" | "email" | "date" | "short" | null;

/** Validate an answer for a field. */
export function validateAnswer(field: WizardField, raw: string): ValidationErr {
  const v = raw.trim();
  if (!v) return field.required ? "required" : null;
  switch (field.type) {
    case "cin": {
      if (!/^[A-Za-z]{1,2}\s?\d{5,6}$/.test(v.replace(/\s+/g, " "))) return "cin";
      break;
    }
    case "phone": {
      const digits = v.replace(/[\s.-]/g, "");
      if (!/^(?:\+212|0)([5-7]\d{8})$/.test(digits)) return "phone";
      break;
    }
    case "email": {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "email";
      break;
    }
    case "date": {
      if (!/^\d{1,2}[/.-]\d{1,2}[/.-]\d{4}$/.test(v) && !/^\d{4}-\d{2}-\d{2}$/.test(v)) return "date";
      break;
    }
    case "textarea": {
      if (v.length < 2) return "short";
      break;
    }
    case "text": {
      if (v.length < 1) return "short";
      break;
    }
    case "number": {
      if (!/^\d+([.,]\d+)?$/.test(v)) return "short";
      break;
    }
  }
  return null;
}

/** Validation error message for the current locale. */
export function errMessage(err: ValidationErr, locale: Locale, msgs: {
  required: string; cin: string; phone: string; email: string; date: string; short: string;
}): string {
  if (!err) return "";
  return msgs[err];
}
