import type { Metadata } from "next";
import { AboutPage } from "@/components/epdp/simple-pages";

export const metadata: Metadata = {
  title: "عن المنصة — À propos",
  description:
    "منصة EPDP — كاتبك الرقمي: رقمنة خدمات الكاتب العمومي المغربي بدقة واحترافية في متناول الجميع وسبع لغات. À propos d'EPDP, votre écrivain public numérique.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <AboutPage />;
}
