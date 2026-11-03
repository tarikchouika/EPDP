import type { Metadata } from "next";
import { LinksPage } from "@/components/epdp/simple-pages";

export const metadata: Metadata = {
  title: "دليل المواقع الرسمية المغربية — Sites officiels du Maroc",
  description:
    "الروابط الرسمية الموثقة للإدارات الحكومية والخدمات الرقمية العمومية بالمملكة المغربية. Liens officiels vérifiés des administrations et services publics marocains.",
  alternates: { canonical: "/links" },
};

export default function Links() {
  return <LinksPage />;
}
