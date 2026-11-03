import type { Metadata } from "next";
import { AppDownload } from "@/components/epdp/app-download";

export const metadata: Metadata = {
  title: "تطبيق الأندرويد — Application Android | EPDP",
  description:
    "حمّل تطبيق EPDP — كاتبك الرقمي على هاتفك الأندرويد: APK موقّع بشهادة CN=TARIK CHOUIKA، تثبيت مباشر مع شرح تجاوز Google Play Protect. Téléchargez l'application Android EPDP.",
  alternates: { canonical: "/app" },
};

export default function AppPage() {
  return <AppDownload />;
}
