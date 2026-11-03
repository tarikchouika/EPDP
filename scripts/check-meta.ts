/** Verify every locale dict has a valid meta.tabTitle (runtime-level check). */
import { ar } from "@/lib/i18n/ar";
import { en } from "@/lib/i18n/en";
import { fr } from "@/lib/i18n/fr";
import { es } from "@/lib/i18n/es";
import { it } from "@/lib/i18n/it";
import { de } from "@/lib/i18n/de";
import { ru } from "@/lib/i18n/ru";
let fail = 0;
for (const [name, d] of Object.entries({ ar, en, fr, es, it, de, ru })) {
  const t = (d as Record<string, any>).meta?.tabTitle;
  const ok = typeof t === "string" && t.length > 10 && !/undefined/.test(t);
  console.log(name.padEnd(3), ok ? "OK  " + t.slice(0, 50) : "MISSING/INVALID!");
  if (!ok) fail = 1;
}
process.exit(fail);
