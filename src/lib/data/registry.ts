// Central registry merging all documents and templates.
// Single import point for consumers (services, assistant, hero stats).
//
// Every legacy bilingual entry is completed at runtime with its i18n overlay
// so `title`/`where`/`fields` always resolve in ALL 7 UI languages.
// Completeness is enforced by scripts/validate-forms.ts.
//
// Real-world templates (verified against katib.ma / onebox.ma / namodaj.ma)
// override the base templates — see real-templates.ts + real-sources.ts.
import type { Locale } from "@/lib/i18n/types";
import type { L } from "./categories";
import { documents, type DocumentItem } from "./documents";
import { documentsMore } from "./documents-more";
import { documentsMore2 } from "./documents-more-2";
import { docI18n } from "./i18n-overlays";
import { templates, type DocTemplate } from "./templates";
import { templatesMore } from "./templates-more";
import { templatesMore2 } from "./templates-more-2";
import { realTemplates } from "./real-templates";
// Extended catalog (katib.ma / onebox.ma / namodaj.ma coverage):
import { formsDgi } from "./forms-dgi";
import { formsCnss } from "./forms-cnss";
import { formsDemandesA } from "./forms-demandes-a";
import { formsDemandesB } from "./forms-demandes-b";
import { formsChikayat } from "./forms-chikayat";
import { formsIchhadat } from "./forms-ichhadat";
import { formsTasarih } from "./forms-tasarih";
import { formsIltizamat } from "./forms-iltizamat";
import { formsAmal } from "./forms-amal";
import { formsWakalat } from "./forms-wakalat";
import { formsUqudBay } from "./forms-uqud-bay";
import { formsUqudKira } from "./forms-uqud-kira";
import { formsJamaiyat } from "./forms-jamaiyat";
import { formsBinaa } from "./forms-binaa";
import { formsMuqawalat } from "./forms-muqawalat";
import { formsUsra } from "./forms-usra";
import { formsBank } from "./forms-bank";
import { formsIjraat } from "./forms-ijraat";
import { formsMahkama } from "./forms-mahkama";
import { formsNaulat } from "./forms-naulat";

export type { DocumentItem } from "./documents";

/** A document whose display strings resolve in every UI locale. */
export interface ResolvedDocument extends Omit<DocumentItem, "title" | "where" | "fields"> {
  title: L;
  where: L;
  fields?: Record<Locale, string[]>;
}

const resolveDoc = (d: DocumentItem): ResolvedDocument => {
  const o = docI18n[d.id];
  const resolved = {
    ...d,
    title: { ...d.title, ...(o?.title ?? {}) },
    where: { ...d.where, ...(o?.where ?? {}) },
    ...(d.fields || o?.fields
      ? { fields: { ...(d.fields ?? {}), ...(o?.fields ?? {}) } }
      : {}),
  };
  // Runtime completeness is guaranteed by the overlays + validate-forms.ts.
  return resolved as unknown as ResolvedDocument;
};

/** All documents (legacy + extended catalog, overlays applied). */
export const allDocuments: ResolvedDocument[] = [
  ...documents,
  ...documentsMore,
  ...documentsMore2,
  ...formsDgi,
  ...formsCnss,
  ...formsDemandesA,
  ...formsDemandesB,
  ...formsChikayat,
  ...formsIchhadat,
  ...formsTasarih,
  ...formsIltizamat,
  ...formsAmal,
  ...formsWakalat,
  ...formsUqudBay,
  ...formsUqudKira,
  ...formsJamaiyat,
  ...formsBinaa,
  ...formsMuqawalat,
  ...formsUsra,
  ...formsBank,
  ...formsIjraat,
  ...formsMahkama,
  ...formsNaulat,
].map(resolveDoc);

/** All templates (base + phase 2 + verified real-world sources). */
const mergedTemplates: Record<string, DocTemplate> = {
  ...templates,
  ...templatesMore,
  ...templatesMore2,
};
// Real-world wording wins per language; missing languages keep the base text.
for (const [id, t] of Object.entries(realTemplates)) {
  mergedTemplates[id] = { ...mergedTemplates[id], ...t } as DocTemplate;
}
export const allTemplates: Record<string, DocTemplate> = mergedTemplates;

export const getTemplate = (id?: string): DocTemplate | null =>
  id ? allTemplates[id] ?? null : null;

export const getDocument = (id: string): ResolvedDocument | undefined =>
  allDocuments.find((d) => d.id === id);

export const popularAll = allDocuments.filter((d) => d.popular);
export const docTotal = allDocuments.length;
