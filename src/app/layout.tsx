import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/epdp/theme-provider";
import { LanguageProvider } from "@/lib/i18n/context";

const SITE_URL = "https://epdp.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "منصة الكاتب العمومي الرقمية | EPDP — نماذج ووثائق إدارية مغربية مجانية",
    template: "%s | EPDP",
  },
  description:
    "منصة مغربية رقمية لخدمات الكاتب العمومي: أكثر من 125 نموذجاً ووثيقة إدارية جاهزة (طلبات، شكايات، عقود كراء، وكالات، تصاريح بالشرف، سيرة ذاتية) بالعربية والفرنسية، مع دليل الروابط الرسمية للإدارات المغربية ومساعد آلي يملأ وثيقتك ببياناتك ويحررها بشكل احترافي. مجاني بالكامل.",
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
    "katib public maroc",
    "documents administratifs maroc",
    "modèles de documents maroc",
    "demande administrative maroc",
    "attestation de travail",
    "contrat de bail maroc",
    "procuration maroc",
    "Morocco administrative documents",
    "CV maroc",
    "خدمات عمومية رقمية",
    "الروابط الرسمية المغرب",
  ],
  authors: [{ name: "EPDP — منصة الكاتب العمومي الرقمية" }],
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
    siteName: "EPDP — منصة الكاتب العمومي الرقمية",
    title: "منصة الكاتب العمومي الرقمية | EPDP",
    description:
      "أكثر من 125 نموذجاً ووثيقة إدارية مغربية مجانية بالعربية والفرنسية، مع دليل المواقع الرسمية ومساعد آلي يملأ وثيقتك ويحررها بشكل احترافي. رقمنة خدمات الكاتب العمومي باحترافية.",
  },
  twitter: {
    card: "summary_large_image",
    title: "منصة الكاتب العمومي الرقمية | EPDP",
    description:
      "نماذج ووثائق إدارية مغربية مجانية + دليل المواقع الرسمية + مساعد آلي يملأ وثيقتك ويحررها بشكل احترافي.",
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
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1512" },
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
      name: "EPDP — منصة الكاتب العمومي الرقمية",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      description:
        "منصة رقمية مغربية لخدمات الكاتب العمومي: نماذج ووثائق إدارية مجانية ودليل الروابط الرسمية.",
      areaServed: "MA",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "EPDP — منصة الكاتب العمومي الرقمية",
      inLanguage: ["ar", "fr", "en", "es", "it", "de", "ru"],
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Service",
      name: "خدمات الكاتب العمومي الرقمية",
      serviceType: "Public writer / administrative document services",
      provider: { "@id": `${SITE_URL}/#org` },
      areaServed: { "@type": "Country", name: "Morocco" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: SITE_URL,
        availableLanguage: ["ar", "fr", "en", "es", "it", "de", "ru"],
      },
      description:
        "نماذج ووثائق إدارية مغربية جاهزة (طلبات، شكايات، عقود، وكالات، تصاريح، سيرة ذاتية)، دليل المواقع الرسمية، ومساعد ذكي للتوجيه الإداري.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
    },
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
