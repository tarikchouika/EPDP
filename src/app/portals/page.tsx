import type { Metadata } from "next";
import { PortalsPage } from "@/components/epdp/simple-pages";

export const metadata: Metadata = {
  title: "بوابات رسمية — Portails officiels",
  description:
    "البوابات الحكومية والمنصات الرقمية العمومية الرسمية المغربية لإنجاز إجراءاتك الإدارية عن بعد. Portails gouvernementaux et plateformes numériques publics officiels du Maroc.",
  alternates: { canonical: "/portals" },
};

export default function Portals() {
  return <PortalsPage />;
}
