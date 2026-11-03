/**
 * VLM visual QA review of the final rendered pages.
 * Sends each screenshot to the vision model for a strict, measured review:
 * rendering, layout, RTL, logo, modes, absence of CJK/Asian symbols.
 * Exits non-zero if any verdict is FAIL.
 */
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";

const SHOTS = [
  { path: "/tmp/render/01-home-portrait-ar-light.png", label: "الرئيسية — بورتريه 390px، وضع مشع، عربية RTL" },
  { path: "/tmp/render/07-home-landscape-light.png", label: "الرئيسية — لاندسكيب 1280px، وضع مشع، عربية RTL" },
  { path: "/tmp/render/02-home-landscape-dark.png", label: "الرئيسية — لاندسكيب 1280px، وضع قاتم، عربية RTL" },
  { path: "/tmp/render/04-documents-portrait.png", label: "فهرس الوثائق (1180 وثيقة) — بورتريه، مشع" },
  { path: "/tmp/render/05-forms-cnss-portrait.png", label: "فئة الضمان الاجتماعي CNSS — بورتريه، مشع" },
  { path: "/tmp/render/06-doc-detail-portrait.png", label: "صفحة وثيقة (طلب إداري عام) — بورتريه، مشع" },
  { path: "/tmp/render/08-links-portrait.png", label: "دليل المواقع الرسمية — بورتريه، مشع" },
];

async function main() {
  const zai = await ZAI.create();
  let fails = 0;
  for (const shot of SHOTS) {
    if (!fs.existsSync(shot.path)) {
      console.log(`=== ${shot.label}\nFILE MISSING: ${shot.path}\n`);
      fails++;
      continue;
    }
    const b64 = fs.readFileSync(shot.path).toString("base64");
    try {
      const res = await zai.chat.completions.createVision({
        model: "glm-4.6v",
        thinking: { type: "disabled" },
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `أنت مراجع QA بصري صارم. هذه لقطة من منصة EPDP المغربية (كاتب عمومي رقمي). السياق: ${shot.label}. أجب بإيجاز بالعربية: 1) هل النص العربي يُعرض سليماً (لا مربعات/tofu/حروف مقطعة)؟ 2) هل التخطيط سليم (هيدر، بطاقات، أزرار — لا تداخل ولا قص)؟ 3) هل يظهر شعار EPDP في الهيدر والعلامة المائية الخلفية؟ 4) هل توجد أي رموز آسيوية/صينية أو رموز بلا معنى في أي مكان؟ 5) هل الألوان متناسقة مع الوضع (${shot.label.includes("قاتم") ? "قاتم" : "مشع"})؟ اختم بالحكم: PASS أو FAIL مع سبب من سطر واحد.`,
              },
              { type: "image_url", image_url: { url: `data:image/png;base64,${b64}` } },
            ],
          },
        ],
      });
      const out = res.choices[0].message.content.trim();
      console.log(`=== ${shot.label}`);
      console.log(out);
      console.log("");
      if (!/PASS\b/.test(out) || /FAIL/.test(out)) fails++;
    } catch (e) {
      console.log(`=== ${shot.label}\nVLM ERROR: ${e.message}\n`);
      fails++;
    }
  }
  console.log(fails === 0 ? "ALL VISUAL VERDICTS: PASS" : `FAILURES: ${fails}`);
  process.exit(fails === 0 ? 0 : 1);
}

main().catch((e) => { console.error("FATAL", e); process.exit(1); });
