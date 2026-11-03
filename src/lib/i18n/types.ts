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
    assistant: string;
    portals: string;
    docsIndex: string;
    categories: string;
    androidApp: string;
  };

  brand: {
    name: string;
    tagline: string;
    /** Compact tagline for narrow (mobile) headers — never truncates mid-word. */
    shortTagline: string;
  };

  meta: {
    /** Browser tab title for this locale (AR keeps the per-route SSR titles). */
    tabTitle: string;
  };

  pages: {
    related: string;
    breadcrumb: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    popularTitle: string;
    popularSubtitle: string;
    viewAll: string;
    openCategory: string;
    docsCount: string;
    relatedDocs: string;
    notFoundTitle: string;
    notFoundDesc: string;
    notFoundCta: string;
    fillWithAssistant: string;
    assistantCtaTitle: string;
    assistantCtaDesc: string;
    tryAssistant: string;
    keywordsLabel: string;
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

  catalog: {
    showing: string;
    prev: string;
    next: string;
    first: string;
    last: string;
    pageAria: string;
    currentPage: string;
    sortLabel: string;
    sortPopular: string;
    sortAlpha: string;
    officialTitle: string;
    officialAr: string;
    officialFr: string;
    filterAria: string;
    clearFilters: string;
  };

  links: {
    title: string;
    subtitle: string;
    visit: string;
    officialBadge: string;
    verifiedNote: string;
    count: string;
    copyUrl: string;
    copiedUrl: string;
  };

  portals: {
    title: string;
    subtitle: string;
  };

  docsIndex: {
    title: string;
    subtitle: string;
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

  app: {
    subtitle: string;
    badge: string;
    intro: string;
    downloadTitle: string;
    downloadDesc: string;
    downloadPrimary: string;
    downloadAlt: string;
    sizeNote: string;
    autoBuild: string;
    featuresTitle: string;
    features: { t: string; d: string }[];
    stepsTitle: string;
    stepsIntro: string;
    steps: { t: string; d: string }[];
    protectTitle: string;
    protectBody: string;
    protectStep1: string;
    protectStep2: string;
    certTitle: string;
    certBody: string;
    certOwner: string;
    certValidity: string;
    qrTitle: string;
    qrBody: string;
    versionNote: string;
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

  filler: {
    badge: string;
    title: string;
    subtitle: string;
    ctaCard: string;
    privacy: string;
    pickTitle: string;
    pickHint: string;
    pickNone: string;
    open: string;
    idleIntro: string;
    startMsg: string;
    collectDoneMsg: string;
    skipDoneMsg: string;
    editFieldMsg: string;
    editSavedMsg: string;
    docLang: string;
    docLangAr: string;
    docLangFr: string;
    optional: string;
    skip: string;
    send: string;
    editAnswer: string;
    editAnswers: string;
    answered: string;
    of: string;
    questions: string;
    reviewTitle: string;
    reviewHint: string;
    remaining: string;
    remainingHint: string;
    generate: string;
    regenerate: string;
    doneTitle: string;
    doneHint: string;
    print: string;
    copy: string;
    word: string;
    another: string;
    validation: {
      required: string;
      cin: string;
      phone: string;
      email: string;
      date: string;
      short: string;
    };
  };

  theme: { light: string; dark: string; system: string; toggle: string };
  language: { label: string };
  common: { close: string; menu: string; top: string };
}
