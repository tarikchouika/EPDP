// Regenerates public/sitemap.xml with the multi-page structure:
// static pages + 19 category pages + all 1180 document pages.
// Run: npx tsx scripts/gen-sitemap.ts
import { writeFileSync } from "node:fs";
import { allDocuments } from "../src/lib/data/registry";
import { categories } from "../src/lib/data/categories";

const BASE = "https://epdp.pages.dev";
const LANGS = ["ar", "en", "fr", "es", "it", "de", "ru"];

const entry = (path: string, priority: string, changefreq: string) => {
  const alternates = LANGS.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}${path}${path.includes("?") ? "&" : "?"}lang=${l}"/>`
  ).join("\n");
  return `  <url>
    <loc>${BASE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${path}"/>
  </url>`;
};

const urls: string[] = [
  entry("/", "1.0", "weekly"),
  entry("/forms", "0.9", "weekly"),
  entry("/documents", "0.9", "weekly"),
  entry("/assistant", "0.8", "monthly"),
  entry("/portals", "0.8", "monthly"),
  entry("/links", "0.8", "monthly"),
  entry("/faq", "0.6", "monthly"),
  entry("/about", "0.5", "monthly"),
  entry("/terms", "0.3", "yearly"),
  entry("/privacy", "0.3", "yearly"),
  entry("/cookies", "0.3", "yearly"),
  entry("/disclaimer", "0.3", "yearly"),
  ...categories.map((c) => entry(`/forms/${c.id}`, "0.8", "weekly")),
  ...allDocuments.map((d) => entry(`/documents/${d.id}`, "0.7", "monthly")),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml, "utf-8");
console.log(`sitemap.xml written: ${urls.length} URLs`);
