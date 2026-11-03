import type { Metadata } from "next";
import { DocumentsIndex } from "@/components/epdp/documents-index";

export const metadata: Metadata = {
  title: "فهرس الوثائق — Index des documents",
  description:
    "الفهرس الشامل لجميع النماذج والوثائق الإدارية المغربية حسب الفئة، مع رابط مباشر لكل وثيقة. Index complet de tous les documents administratifs marocains par catégorie.",
  alternates: { canonical: "/documents" },
};

export default function Documents() {
  return <DocumentsIndex />;
}
