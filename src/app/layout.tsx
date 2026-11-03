import type { Metadata, Viewport } from "next";
import Image from "next/image";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/epdp/theme-provider";
import { LanguageProvider } from "@/lib/i18n/context";
import { Header } from "@/components/epdp/header";
import { Footer } from "@/components/epdp/footer";
import { Chatbot } from "@/components/epdp/chatbot";

const SITE_URL = "https://epdp.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EPDP — كاتبك الرقمي | نماذج ووثائق إدارية مغربية مجانية",
    template: "%s | EPDP",
  },
  description:
    "منصة EPDP — كاتبك الرقمي: أكثر من 1180 نموذجاً ووثيقة إدارية مغربية مجانية (CNSS، DGI، طلبات، شكايات، عقود كراء وبيع، وكالات، تصاريح بالشرف، سيرة ذاتية) بالعربية والفرنسية، مع دليل بوابات وروابط رسمية للإدارات المغربية ومساعد رقمي يملأ وثيقتك ببياناتك ويحررها بشكل احترافي. مجاني بالكامل.",
  keywords: [
    "كاتب عمومي",
    "نماذج إدارية المغرب",
    "وثائق إدارية",
    "طلب إداري",
    "شكاية",
    "تصريح بالشرف",
    "عقد كراء",
    "وكالة",
    "سيرة ذاتية المغرب",
    "نماذج CNSS",
    "نماذج DGI",
    "katib public maroc",
    "documents administratifs maroc",
    "modèles de documents maroc",
    "demande administrative maroc",
    "attestation de travail",
    "contrat de bail maroc",
    "procuration maroc",
    "Morocco administrative documents",
    "formulaire CNSS",
    "CV maroc",
    "خدمات عمومية رقمية",
    "الروابط الرسمية المغرب",
  ],
  authors: [{ name: "EPDP — كاتبك الرقمي" }],
  creator: "EPDP",
  applicationName: "EPDP",
  category: "government",
  alternates: {
    canonical: "/",
    languages: {
      ar: `${SITE_URL}/?lang=ar`,
      en: `${SITE_URL}/?lang=en`,
      fr: `${SITE_URL}/?lang=fr`,
      es: `${SITE_URL}/?lang=es`,
      it: `${SITE_URL}/?lang=it`,
      de: `${SITE_URL}/?lang=de`,
      ru: `${SITE_URL}/?lang=ru`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_MA",
    alternateLocale: ["fr_MA", "en_US", "es_ES", "it_IT", "de_DE", "ru_RU"],
    url: SITE_URL,
    siteName: "EPDP — كاتبك الرقمي",
    title: "EPDP — كاتبك الرقمي",
    description:
      "أكثر من 1180 نموذجاً ووثيقة إدارية مغربية مجانية (CNSS، DGI، طلبات، شكايات، عقود) بالعربية والفرنسية، مع دليل البوابات والمواقع الرسمية ومساعد رقمي يملأ وثيقتك ويحررها. رقمنة خدمات الكاتب العمومي باحترافية.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPDP — كاتبك الرقمي",
    description:
      "نماذج ووثائق إدارية مغربية مجانية + دليل البوابات والمواقع الرسمية + مساعد رقمي يملأ وثيقتك ويحررها.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-square.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1c26" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "EPDP — كاتبك الرقمي",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "كاتبك الرقمي: نماذج ووثائق إدارية مجانية ودليل البوابات والروابط الرسمية.",
      areaServed: "MA",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "EPDP — كاتبك الرقمي",
      inLanguage: ["ar", "fr", "en", "es", "it", "de", "ru"],
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Service",
      name: "EPDP — كاتبك الرقمي",
      serviceType: "Public writer / administrative document services",
      provider: { "@id": `${SITE_URL}/#org` },
      areaServed: { "@type": "Country", name: "Morocco" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: SITE_URL,
        availableLanguage: ["ar", "fr", "en", "es", "it", "de", "ru"],
      },
      description:
        "نماذج ووثائق إدارية مجربية جاهزة (CNSS، DGI، طلبات، شكايات، عقود، وكالات، تصاريح، سيرة ذاتية)، دليل البوابات والمواقع الرسمية، ومساعد ذكي للتوجيه الإداري.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
    },
  ],
};

/**
 * Runs before first paint: applies the saved/URL locale to <html> so the
 * direction (RTL/LTR) and language are correct from the very first frame —
 * no flash of mixed-language content, ever.
 */
const localeBootstrapScript = `(function(){try{var q=new URLSearchParams(location.search).get('lang');var s=localStorage.getItem('epdp-lang');var ok=/^(ar|en|fr|es|it|de|ru)$/;var l=ok.test(q||'')?q:(ok.test(s||'')?s:'ar');var d=document.documentElement;d.lang=l;d.dir=l==='ar'?'rtl':'ltr';d.setAttribute('data-locale',l);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Noto+Kufi+Arabic:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: localeBootstrapScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased text-foreground">
        {/* Brand watermark — fixed, non-interactive, above content, below chrome */}
        <div
          aria-hidden="true"
          className="epdp-watermark pointer-events-none fixed inset-0 z-30 flex select-none items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt=""
            width={840}
            height={346}
            className="w-[68vmin] max-w-[680px] opacity-[0.06] dark:opacity-[0.08]"
          />
        </div>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
              <Chatbot />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
