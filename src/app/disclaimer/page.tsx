import type { Metadata } from "next";
import { LegalDocPage } from "@/components/epdp/about-legal";

export const metadata: Metadata = {
  title: "إخلاء المسؤولية القانونية — Avertissement légal",
  description:
    "إخلاء المسؤولية القانونية لمنصة EPDP: نماذج استرشادية، والمصادر الرسمية هي المرجع الوحيد للمعلومة النهائية. Avertissement légal d'EPDP.",
  alternates: { canonical: "/disclaimer" },
};

export default function Disclaimer() {
  return <LegalDocPage docId="disclaimer" />;
}
