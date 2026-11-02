import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { it } from "./it";
import { de } from "./de";
import { ru } from "./ru";
import type { Dict, Locale } from "./types";

export const dictionaries: Record<Locale, Dict> = { ar, en, fr, es, it, de, ru };

export const localeMeta: { code: Locale; native: string; short: string }[] = [
  { code: "ar", native: "العربية", short: "ع" },
  { code: "en", native: "English", short: "EN" },
  { code: "fr", native: "Français", short: "FR" },
  { code: "es", native: "Español", short: "ES" },
  { code: "it", native: "Italiano", short: "IT" },
  { code: "de", native: "Deutsch", short: "DE" },
  { code: "ru", native: "Русский", short: "RU" },
];

export function isLocale(x: string): x is Locale {
  return ["ar", "en", "fr", "es", "it", "de", "ru"].includes(x);
}

export type { Dict, Locale };
