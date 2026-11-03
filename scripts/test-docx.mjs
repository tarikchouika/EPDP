// Verify the docx generator produces genuine, openable Word files.
// Run: node scripts/test-docx.mjs
import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const { generateDocx } = await import("../src/lib/docx.ts").catch(() => ({}));
// Fallback: inline re-import via tsx-style loader is unavailable — use built copy.
if (!generateDocx) {
  console.error("direct TS import failed");
  process.exit(2);
}

const arTitle = "طلب استقالة";
const arBody = `الحمد لله وحده ………… في : …………

من السيدة: …………، مغربية، كاملة الأهلية
والحاملة لبطاقة التعريف الوطنية رقم : …………

الموضوع : طلب استقالة

سلام تام بوجود مولانا الإمام ،

بعد تقديم أسمى عبارات الاحترام و التقدير، يسعدني ويشرفني التقدم إليكم بهذا الطلب والرامي إلى استقالتي من العمل لدى شركتكم الموقرة.`;

const frTitle = "Demande de résiliation";
const frBody = `Royaume du Maroc

Objet : Demande de résiliation

Madame, Monsieur,

Après avoir vous présenter mes salutations les plus respectueuses, j'ai l'honneur de vous informé de ma volonté de résilier le présent contrat.`;

writeFileSync("/tmp/test-ar.docx", generateDocx(arTitle, arBody, true));
writeFileSync("/tmp/test-fr.docx", generateDocx(frTitle, frBody, false));
console.log("generated /tmp/test-ar.docx and /tmp/test-fr.docx");

// 1) ZIP integrity
execSync("unzip -t /tmp/test-ar.docx", { stdio: "inherit" });
execSync("unzip -l /tmp/test-ar.docx", { stdio: "inherit" });

// 2) python-docx opens it (strict OOXML consumer)
execSync(`python3 - <<'PY'
from docx import Document
for f in ("/tmp/test-ar.docx", "/tmp/test-fr.docx"):
    d = Document(f)
    paras = [p.text for p in d.paragraphs if p.text.strip()]
    print(f, "->", len(paras), "paragraphs; first:", paras[0][:50])
print("PYTHON-DOCX OK")
PY`, { stdio: "inherit" });

// 3) LibreOffice converts it (what failed with the old HTML-.doc export)
execSync("soffice --headless --convert-to pdf --outdir /tmp /tmp/test-ar.docx /tmp/test-fr.docx", { stdio: "inherit" });
console.log("ALL DOCX CHECKS PASSED");
