export type Locale = "ar" | "en" | "fr" | "es" | "it" | "de" | "ru";

export const LOCALES: Locale[] = ["ar", "en", "fr", "es", "it", "de", "ru"];

export interface LegalSection {
  h: string;
  body: string[];
}

export interface LegalDoc {
  id: "terms" | "privacy" | "cookies" | "disclaimer";
  title: string;
  sections: LegalSection[];
}

export interface Dict {
  dir: "rtl" | "ltr";
  localeName: string;
  englishName: string;

  nav: {
    home: string;
    services: string;
    links: string;
    how: string;
    faq: string;
    about: string;
    legal: string;
  };

  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
    searchPlaceholder: string;
  };

  stats: {
    documents: string;
    categories: string;
    languages: string;
    official: string;
  };

  services: {
    title: string;
    subtitle: string;
    search: string;
    all: string;
    popular: string;
    results: string;
    noResults: string;
    noResultsHint: string;
    viewDoc: string;
    aboutDoc: string;
    templateTab: string;
    detailsTab: string;
    copy: string;
    copied: string;
    download: string;
    arabicVersion: string;
    frenchVersion: string;
    requiredInfo: string;
    destination: string;
    officialSource: string;
    freeTag: string;
    note: string;
  };

  links: {
    title: string;
    subtitle: string;
    visit: string;
    officialBadge: string;
    verifiedNote: string;
    copyUrl: string;
    copiedUrl: string;
  };

  how: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };

  faq: {
    title: string;
    subtitle: string;
  };

  about: {
    title: string;
    paragraphs: string[];
    values: { title: string; desc: string }[];
  };

  legal: {
    title: string;
    subtitle: string;
    updated: string;
    docs: LegalDoc[];
  };

  chat: {
    openLabel: string;
    title: string;
    subtitle: string;
    placeholder: string;
    greeting: string;
    suggestionsTitle: string;
    sourcesLabel: string;
    fallback: string;
    disclaimer: string;
    sendLabel: string;
    youLabel: string;
    botLabel: string;
  };

  footer: {
    tagline: string;
    quickLinks: string;
    legalTitle: string;
    officialTitle: string;
    rights: string;
    disclaimer: string;
    madeIn: string;
  };

  theme: { light: string; dark: string; system: string; toggle: string };
  language: { label: string };
  common: { close: string; menu: string; top: string };
}
