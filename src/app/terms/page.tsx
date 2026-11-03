import type { Metadata } from "next";
import { LegalDocPage } from "@/components/epdp/about-legal";

export const metadata: Metadata = {
  title: "شروط الاستخدام — Conditions d'utilisation",
  description:
    "شروط استعمال منصة EPDP — كاتبك الرقمي: الاستخدام المسموح، الملكية الفكرية، وحدود المسؤولية. Conditions d'utilisation de la plateforme EPDP.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return <LegalDocPage docId="terms" />;
}
