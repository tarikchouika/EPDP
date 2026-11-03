import type { Metadata } from "next";
import { AssistantPage } from "@/components/epdp/simple-pages";

export const metadata: Metadata = {
  title: "مساعد ملء الوثائق — Assistant de saisie des documents",
  description:
    "اختر الوثيقة وسيطرح المساعد أسئلته حقلًا حقلًا ثم يحرر وثيقتك ببياناتك جاهزة للطباعة والتحميل — بياناتك تبقى في متصفحك. Remplissez vos documents administratifs automatiquement.",
  alternates: { canonical: "/assistant" },
};

export default function Assistant() {
  return <AssistantPage />;
}
