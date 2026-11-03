"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
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

/**
 * On the server (and the hydration render) this is useEffect — a no-op during
 * SSR. In the browser it becomes useLayoutEffect, which fires synchronously
 * after the hydration commit and BEFORE the browser paints. That way the
 * user's saved locale replaces the SSR default without a visible flash of
 * mixed-language content.
 */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function applyDocument(l: Locale) {
  const dict = dictionaries[l];
  const el = document.documentElement;
  el.lang = l;
  el.dir = dict.dir;
  el.dataset.locale = l;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // First render is always "ar" to match the server HTML exactly (no
  // hydration mismatch). The pre-paint layout effect below then swaps to
  // the persisted/URL locale before anything is painted.
  const [locale, setLocaleState] = useState<Locale>("ar");

  useIsoLayoutEffect(() => {
    try {
      const url = new URL(window.location.href);
      const q = url.searchParams.get("lang") || "";
      let target: Locale | null = null;
      if (isLocale(q)) {
        target = q;
        localStorage.setItem(STORAGE_KEY, q);
      } else {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && isLocale(saved)) target = saved;
      }
      if (target && target !== locale) setLocaleState(target);
      if (target) applyDocument(target);
    } catch {
      /* ignore */
    }
     
  }, []);

  const setLocale = useCallback((l: Locale) => {
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
  }, []);

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
