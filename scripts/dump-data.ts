import { allDocuments } from "../src/lib/data/registry";
import { officialLinks, linkCategories } from "../src/lib/data/official-links";
import { writeFileSync } from "fs";

const docLines = allDocuments.map((d) => `${d.cat} | ${d.title.ar} | ${d.title.fr}${d.templateId ? " [TPL]" : ""}`);
writeFileSync("scripts/dump-docs.txt", docLines.join("\n") + "\n");

const linkLines = officialLinks.map((l) => `${l.id} | ${l.domain} | ${l.name.fr}`);
writeFileSync("scripts/dump-links.txt",
  "LINK IDS: " + officialLinks.map((l) => l.id).join(", ") + "\n\n" +
  linkLines.join("\n") + "\n\nLINK CATS: " + linkCategories.map((c) => `${c.id}(${c.name.ar}/${c.name.fr})`).join(", ") + "\n");
console.log("docs:", allDocuments.length, "| links:", officialLinks.length, "| linkCats:", linkCategories.length);
console.log("sample resolved title (en):", allDocuments[0].title.en ?? "MISSING");
