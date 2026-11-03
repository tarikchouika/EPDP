import type { Metadata } from "next";
import { LegalDocPage } from "@/components/epdp/about-legal";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — Politique de confidentialité",
  description:
    "سياسة الخصوصية لمنصة EPDP: لا تسجيل، لا جمع للبيانات الشخصية، وكل ما تملأه يبقى في جهازك. Politique de confidentialité d'EPDP.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return <LegalDocPage docId="privacy" />;
}
