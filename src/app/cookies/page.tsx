import type { Metadata } from "next";
import { LegalDocPage } from "@/components/epdp/about-legal";

export const metadata: Metadata = {
  title: "سياسة ملفات تعريف الارتباط — Politique de cookies",
  description:
    "ملفات تعريف الارتباط على منصة EPDP: ضرورية لحفظ اللغة والوضع اللوني فقط، دون أي ملفات إعلانية أو تتبعية. Politique de cookies d'EPDP.",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return <LegalDocPage docId="cookies" />;
}
