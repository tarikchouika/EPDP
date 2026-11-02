// Merged i18n overlays for legacy bilingual data (documents + official links).
// Single import point for the registry and the official-links resolver.
import { docI18nBase } from "./i18n-doc1";
import { docI18nMore } from "./i18n-doc2";
import { linkI18n as linkI18nPart, linkCatI18n as linkCatI18nPart } from "./i18n-links";
import type { DocI18nOverlay } from "./forms-shared";

export type { DocI18nOverlay } from "./forms-shared";

/** All legacy document overlays (documents.ts + more + more-2). */
export const docI18n: Record<string, DocI18nOverlay> = {
  ...docI18nBase,
  ...docI18nMore,
};

export const linkI18n = linkI18nPart;
export const linkCatI18n = linkCatI18nPart;
