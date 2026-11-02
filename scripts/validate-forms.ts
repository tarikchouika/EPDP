// Validates the forms catalog: unique ids, complete 7-locale coverage,
// valid categories/authorities, and duplicate detection.
// Run: bun scripts/validate-forms.ts
import { allDocuments, popularAll } from "../src/lib/data/registry";
import { categories } from "../src/lib/data/categories";
import type { CategoryId } from "../src/lib/data/categories";
import { officialLinks, resolvedLinkCategories, getLink } from "../src/lib/data/official-links";
import type { Locale } from "../src/lib/i18n/types";

const LOCALES: Locale[] = ["ar", "fr", "en", "es", "it", "de", "ru"];
const catIds = new Set(categories.map((c) => c.id));
const linkIds = new Set(officialLinks.map((l) => l.id));

const errors: string[] = [];
const warnings: string[] = [];
const seenIds = new Map<string, string>();
const seenTitleAr = new Map<string, string>();
const byCat = new Map<string, number>();

for (const d of allDocuments) {
  const loc = `${d.id} (${d.cat})`;
  if (seenIds.has(d.id)) errors.push(`DUPLICATE ID: ${d.id} (also in ${seenIds.get(d.id)})`);
  else seenIds.set(d.id, d.cat);
  byCat.set(d.cat, (byCat.get(d.cat) ?? 0) + 1);

  if (!catIds.has(d.cat as CategoryId)) errors.push(`INVALID CAT: ${loc}`);
  for (const k of LOCALES) {
    const t = (d.title as Record<Locale, string | undefined>)[k]?.trim();
    if (!t) errors.push(`MISSING title.${k}: ${loc}`);
    const w = (d.where as Record<Locale, string | undefined>)[k]?.trim();
    if (!w) errors.push(`MISSING where.${k}: ${loc}`);
    const de = (d.desc as Record<Locale, string | undefined>)[k]?.trim();
    if (!de) errors.push(`MISSING desc.${k}: ${loc}`);
  }
  if (d.fields) {
    for (const k of LOCALES) {
      const arr = (d.fields as Record<Locale, string[] | undefined>)[k];
      if (!arr || !arr.length || arr.some((x) => !x?.trim()))
        errors.push(`INCOMPLETE fields.${k}: ${loc}`);
    }
  }
  if (!d.keywords || d.keywords.length < 3) errors.push(`KEYWORDS<3: ${loc}`);
  if (d.authority && !linkIds.has(d.authority)) errors.push(`INVALID authority "${d.authority}": ${loc}`);
  const tar = d.title.ar?.trim();
  if (tar) {
    if (seenTitleAr.has(tar)) warnings.push(`DUP-AR-TITLE: "${tar}" [${seenTitleAr.get(tar)}] & [${loc}]`);
    else seenTitleAr.set(tar, loc);
  }
}

for (const l of officialLinks) {
  const g = getLink(l.id);
  if (!g) { errors.push(`getLink returned null: ${l.id}`); continue; }
  for (const k of LOCALES) {
    const n = (g.name as Record<Locale, string | undefined>)[k]?.trim();
    if (!n) errors.push(`MISSING link name.${k}: ${l.id}`);
  }
}
for (const c of resolvedLinkCategories) {
  for (const k of LOCALES) {
    const n = (c.name as Record<Locale, string | undefined>)[k]?.trim();
    if (!n) errors.push(`MISSING linkCat name.${k}: ${c.id}`);
  }
}
// getLink resolution spot-check
for (const l of officialLinks.slice(0, 5)) {
  const g = getLink(l.id)!;
  if (!g.name.es || !g.name.ru) errors.push(`getLink overlay not applied: ${l.id}`);
}

console.log("══════════ CATALOG VALIDATION ══════════");
console.log(`Total documents: ${allDocuments.length}`);
console.log(`Popular: ${popularAll.length}`);
console.log("Per category:");
for (const c of categories) console.log(`  ${(byCat.get(c.id) ?? 0).toString().padStart(4)}  ${c.id}`);
console.log(`Categories covered: ${[...byCat.keys()].length}/${categories.length}`);
console.log(`Official links: ${officialLinks.length} (all 7-locale names)`);

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warnings:`);
  for (const w of warnings.slice(0, 30)) console.log("  " + w);
}
if (errors.length) {
  console.log(`\n✗ ${errors.length} ERRORS:`);
  for (const e of errors.slice(0, 60)) console.log("  " + e);
  process.exit(1);
}
console.log("\n✓ ALL CHECKS PASSED — every entry resolves in all 7 locales.");
