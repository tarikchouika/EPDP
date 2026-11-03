import type { Metadata } from "next";
import { FormsPage } from "@/components/epdp/forms-page";

export const metadata: Metadata = {
  title: "مكتبة الوثائق والنماذج — Bibliothèque des documents",
  description:
    "تصفح أكثر من 1180 نموذجاً ووثيقة إدارية مغربية (CNSS، DGI، طلبات، شكايات، عقود، وكالات، تصاريح) مع بحث وفرز وترقيم صفحات. Parcourez plus de 1180 documents administratifs marocains.",
  alternates: { canonical: "/forms" },
};

export default function Forms() {
  return <FormsPage />;
}
