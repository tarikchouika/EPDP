// Dump document catalogue (id, ar/fr titles, popular flag) for the real-forms pipeline.
// Run: bunx tsx scripts/real-forms/dump-catalog.mts
import { writeFileSync } from "node:fs";
import { allDocuments, allTemplates } from "../../src/lib/data/registry";

const rows = allDocuments
  .filter((d) => d.templateId && allTemplates[d.templateId])
  .map((d) => ({
    id: d.id,
    templateId: d.templateId!,
    ar: d.title.ar,
    fr: d.title.fr,
    popular: Boolean(d.popular),
    cat: d.cat,
  }));

writeFileSync("/home/z/my-project/scripts/real-forms/catalog.json", JSON.stringify(rows, null, 1));
const popular = rows.filter((r) => r.popular);
console.log(`total templated docs: ${rows.length}; popular: ${popular.length}`);
console.log("first 12 popular:", popular.slice(0, 12).map((p) => p.ar).join(" | "));
