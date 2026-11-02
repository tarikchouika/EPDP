// Dump existing docs + links summary for subagent prompts
import { readFileSync, writeFileSync } from "fs";
const src = (f) => readFileSync(`src/lib/data/${f}`, "utf8");
const catRe = /cat:\s*"([a-z-]+)"/g;
// Extract doc entries: id, cat, title.ar, title.fr, has fields
const docFiles = ["documents.ts","documents-more.ts","documents-more-2.ts"];
const out = [];
for (const f of docFiles) {
  const t = src(f);
  const entries = t.split(/\n\s\s\{/).slice(1);
  for (const e of entries) {
    const id = (e.match(/id:\s*"([^"]+)"/) || [])[1] || "?";
    const cat = (e.match(/cat:\s*"([^"]+)"/) || [])[1] || "?";
    const tar = (e.match(/title:\s*\{\s*ar:\s*"([^"]+)"/) || [])[1] || "?";
    const tfr = (e.match(/title:\s*\{\s*ar:\s*"[^"]+",\s*fr:\s*"([^"]+)"/) || [])[1] || "?";
    const hasFields = /fields:\s*\{/.test(e) ? " [fields]" : "";
    const tpl = /templateId/.test(e) ? " [tpl]" : "";
    out.push(`${f} | ${cat} | ${id} | ${tar} | ${tfr}${hasFields}${tpl}`);
  }
}
writeFileSync("scripts/dump-docs.txt", out.join("\n"));
// Links: id + name.ar/fr/en + domain
const lt = src("official-links.ts");
const lout = [];
const lentries = lt.split(/\n\s\{/).slice(1);
for (const e of lentries) {
  const id = (e.match(/id:\s*"([^"]+)"/) || [])[1];
  if (!id) continue;
  const dom = (e.match(/domain:\s*"([^"]+)"/) || [])[1] || "?";
  const nar = (e.match(/name:\s*\{\s*ar:\s*"([^"]+)"/) || [])[1] || "?";
  const nfr = (e.match(/ar:\s*"[^"]+",\s*fr:\s*"([^"]+)"/) || [])[1] || "?";
  lout.push(`${id} | ${dom} | ${nar} | ${nfr}`);
}
writeFileSync("scripts/dump-links.txt", lout.join("\n"));
console.log("docs:", out.length, "links:", lout.length);
