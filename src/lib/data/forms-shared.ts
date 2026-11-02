// Shared helpers for the extended forms catalog (katib.ma / onebox.ma /
// namodaj.ma coverage: CNSS, DGI and all other public-administration forms).
//
// IMPORTANT — argument order for all helpers:
//   (ar, fr, en, es, it, de, ru)
// Arabic and French first (official languages of Morocco), then the other
// UI languages. This differs from the legacy `D()` in documents.ts which
// used (ar, en, fr, …); new files MUST use these helpers only.
import type { L } from "./categories";
import type { Locale } from "@/lib/i18n/types";

/** The five non-official UI locales (ar/fr are the official core). */
export type Loc5 = "en" | "es" | "it" | "de" | "ru";
export type OptL5 = Partial<Record<Loc5, string>>;

export const T7 = (ar: string, fr: string, en: string, es: string, it: string, de: string, ru: string): L => ({
  ar, fr, en, es, it, de, ru,
});

export const D7 = (ar: string, fr: string, en: string, es: string, it: string, de: string, ru: string): L => ({
  ar, fr, en, es, it, de, ru,
});

export const W7 = (ar: string, fr: string, en: string, es: string, it: string, de: string, ru: string): L => ({
  ar, fr, en, es, it, de, ru,
});

/** Runtime overlay completing title/where (+fields) for the legacy bilingual entries. */
export interface DocI18nOverlay {
  title?: OptL5;
  where?: OptL5;
  fields?: Partial<Record<Loc5, string[]>>;
}

/** Overlay completing official-link / link-category names. */
export interface LinkI18nOverlay {
  name?: OptL5;
}

/** Locale-following display of a resolved multilingual name. */
export const locName = (n: Partial<Record<Locale, string>>, locale: Locale): string =>
  n[locale] || n.en || n.fr || n.ar || "";
