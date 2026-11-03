"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
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

let initialTitle: string | null = null;

/** Tab titles we install ourselves — used to tell our writes from Next's. */
const TAB_OVERRIDES = new Set(Object.values(dictionaries).map((d) => d.meta.tabTitle));

function applyDocument(l: Locale) {
  const dict = dictionaries[l];
  if (initialTitle === null) initialTitle = document.title;
  const el = document.documentElement;
  el.lang = l;
  el.dir = dict.dir;
  el.dataset.locale = l;
  // Non-Arabic locales get a fully translated tab title immediately (this
  // runs before paint, so there is no flash of the wrong-language title).
  // Arabic is left to Next.js per-route metadata; the observer effect below
  // restores the recorded route title if the tab currently shows one of our
  // locale overrides.
  if (l !== "ar") document.title = dict.meta.tabTitle;
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

  /**
   * Keep the browser tab title in the active locale.
   *
   * Next.js re-syncs <title> from route metadata on client-side navigation
   * and after hydration, which would pull the tab back to Arabic while the
   * UI is in another language. This effect watches the <title> element: it
   * records every Next-managed (Arabic, per-route) title so the current
   * route can be restored when the user switches back, and re-applies the
   * locale title whenever Next overwrites it in a non-Arabic locale.
   */
  const routeTitles = useRef(new Map<string, string>()).current;

  useEffect(() => {
    const override = locale === "ar" ? null : dictionaries[locale].meta.tabTitle;

    const apply = () => {
      const path = window.location.pathname; // live: the effect may outlive navigation
      const cur = document.title;
      const isOurs = TAB_OVERRIDES.has(cur);
      // Remember the per-route SSR/Next title for the current path so we can
      // restore it exactly when the user returns to Arabic.
      if (cur && !isOurs && !routeTitles.has(path)) routeTitles.set(path, cur);
      if (override) {
        if (cur !== override) document.title = override;
      } else {
        const want = routeTitles.get(path) ?? (isOurs ? initialTitle : undefined);
        if (want && cur !== want) document.title = want;
      }
    };

    apply();

    const obs = new MutationObserver(apply);
    obs.observe(document.head, { childList: true });
    const titleEl = document.head.querySelector("title");
    if (titleEl) obs.observe(titleEl, { childList: true, characterData: true, subtree: true });
    return () => obs.disconnect();
  }, [locale, routeTitles]);

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
