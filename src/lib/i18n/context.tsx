"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, isLocale, type Dict, type Locale } from "./index";

interface LanguageCtx {
  locale: Locale;
  dict: Dict;
  setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

const STORAGE_KEY = "epdp-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  const applyDocument = useCallback((l: Locale) => {
    const dict = dictionaries[l];
    document.documentElement.lang = l;
    document.documentElement.dir = dict.dir;
  }, []);

  useEffect(() => {
    // Mount-time initialization from URL/localStorage (client only).
    // setState is intentional here: first render is always SSR-safe ('ar'),
    // then the user's saved preference is applied — standard i18n hydration pattern.
    try {
      const url = new URL(window.location.href);
      const q = url.searchParams.get("lang") || "";
      if (isLocale(q)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(q);
        localStorage.setItem(STORAGE_KEY, q);
        applyDocument(q);
        return;
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isLocale(saved)) {
        setLocaleState(saved);
        applyDocument(saved);
      }
    } catch {
      /* ignore */
    }
  }, [applyDocument]);

  const setLocale = useCallback(
    (l: Locale) => {
      setLocaleState(l);
      try {
        localStorage.setItem(STORAGE_KEY, l);
        const url = new URL(window.location.href);
        url.searchParams.set("lang", l);
        window.history.replaceState(null, "", url.toString());
      } catch {
        /* ignore */
      }
      applyDocument(l);
    },
    [applyDocument]
  );

  const value = useMemo(
    () => ({ locale, dict: dictionaries[locale], setLocale }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): LanguageCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
