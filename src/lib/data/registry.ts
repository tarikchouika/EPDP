// Central registry merging all documents and templates.
// Single import point for consumers (services, assistant, hero stats).
import { documents, type DocumentItem } from "./documents";
import { documentsMore } from "./documents-more";
import { documentsMore2 } from "./documents-more-2";
import { templates, type DocTemplate } from "./templates";
import { templatesMore } from "./templates-more";
import { templatesMore2 } from "./templates-more-2";

export type { DocumentItem } from "./documents";
export type { DocTemplate } from "./templates";

/** All documents (base + phase 2). */
export const allDocuments: DocumentItem[] = [
  ...documents,
  ...documentsMore,
  ...documentsMore2,
];

/** All templates (base + phase 2). */
export const allTemplates: Record<string, DocTemplate> = {
  ...templates,
  ...templatesMore,
  ...templatesMore2,
};

export const getTemplate = (id?: string): DocTemplate | null =>
  id ? allTemplates[id] ?? null : null;

export const getDocument = (id: string): DocumentItem | undefined =>
  allDocuments.find((d) => d.id === id);

export const popularAll = allDocuments.filter((d) => d.popular);
export const docTotal = allDocuments.length;
