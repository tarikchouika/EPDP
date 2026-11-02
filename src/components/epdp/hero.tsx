"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { FileText, Landmark, Search, Sparkles, ShieldCheck, Globe2, BadgeCheck } from "lucide-react";
import { documents, docCount } from "@/lib/data/documents";
import { allDocuments, docTotal } from "@/lib/data/registry";
import { categories } from "@/lib/data/categories";
import { officialLinks } from "@/lib/data/official-links";

export function Hero() {
  const { dict } = useI18n();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = q.trim() ? `?q=${encodeURIComponent(q.trim())}` : "";
    window.location.hash = "#services";
    if (q.trim()) {
      window.dispatchEvent(new CustomEvent("epdp-search", { detail: q.trim() }));
    }
    const el = document.getElementById("services");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60 bg-zellige">
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" aria-hidden="true" />
    <div className="absolute inset-x-0 top-0 h-1.5 gold-divider" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="text-center lg:text-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-accent px-4 py-1.5 text-xs sm:text-sm font-bold text-primary">
              <Sparkles className="h-4 w-4 text-gold" />
              {dict.hero.badge}
            </span>

            <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.25] tracking-tight">
              {dict.hero.title}{" "}
              <span className="text-gradient-moroccan">{dict.hero.titleAccent}</span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-5 max-w-2xl text-sm sm:text-base leading-7 text-muted-foreground">
              {dict.hero.subtitle.replace("{docs}", String(docTotal))}
            </p>

            <form onSubmit={submit} className="mx-auto lg:mx-0 mt-7 flex max-w-xl gap-2">
              <div className="relative flex-1">
                <Search className="absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={dict.hero.searchPlaceholder}
                  aria-label={dict.hero.searchPlaceholder}
                  className="h-12 w-full rounded-xl border border-input bg-card ps-10 pe-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <Button type="submit" className="h-12 px-5 font-bold">
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">{dict.services.title.split(" ")[0]}</span>
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a href="#services">
                <Button size="lg" className="font-bold px-6">
                  <FileText className="h-4 w-4" />
                  {dict.hero.ctaPrimary}
                </Button>
              </a>
              <a href="#links">
                <Button size="lg" variant="outline" className="font-bold px-6 border-gold">
                  <Landmark className="h-4 w-4 text-gold" />
                  {dict.hero.ctaSecondary}
                </Button>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5 text-primary" /> {dict.services.freeTag}</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> {dict.links.officialBadge}</span>
              <span className="inline-flex items-center gap-1"><Globe2 className="h-3.5 w-3.5 text-primary" /> 7 {dict.stats.languages.split(" ")[0]}</span>
            </div>
          </div>

          {/* Moroccan ornament card */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-sm rounded-3xl border border-gold/50 bg-card p-8 shadow-xl shadow-primary/5">
              <div className="absolute inset-3 rounded-2xl border border-gold/25" aria-hidden="true" />
              <svg viewBox="0 0 200 200" className="mx-auto h-44 w-44" role="img" aria-label="Moroccan star">
                <path d="M100 8 L112 42 L146 30 L132 64 L166 76 L132 88 L146 122 L112 110 L100 144 L88 110 L54 122 L68 88 L34 76 L68 64 L54 30 L88 42 Z" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
                <path d="M100 40 L107 60 L127 54 L116 76 L136 84 L116 92 L127 114 L107 108 L100 128 L93 108 L73 114 L84 92 L64 84 L84 76 L73 54 L93 60 Z" className="fill-gold/25 stroke-gold" strokeWidth="1.5" />
                <path d="M100 62 L104.5 77 L119.5 73.5 L110 84 L119.5 94.5 L104.5 91 L100 106 L95.5 91 L80.5 94.5 L90 84 L80.5 73.5 L95.5 77 Z" className="fill-secondary/30 stroke-secondary" strokeWidth="1.5" />
              </svg>
              <div className="mt-4 space-y-2 text-center">
                <p className="font-display text-lg font-bold text-primary" dir="rtl">
                  مكتبة الوثائق الإدارية المغربية
                </p>
                <p className="text-xs text-muted-foreground" dir="ltr">
                  Bibliothèque de documents administratifs marocains
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const { dict, locale } = useI18n();
  const items = [
    { icon: FileText, value: `${docTotal}+`, label: dict.stats.documents },
    { icon: Landmark, value: `${officialLinks.length}+`, label: dict.stats.official },
    { icon: Globe2, value: "7", label: dict.stats.languages },
    { icon: BadgeCheck, value: `${categories.length}`, label: dict.stats.categories },
  ];
  return (
    <section className="border-b border-border/60 bg-muted/40" aria-label="stats">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-x-reverse divide-border/60 md:grid-cols-4">
        {items.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-4 py-6 sm:py-8">
            <Icon className="h-8 w-8 text-gold shrink-0" aria-hidden="true" />
            <div className="text-center sm:text-start">
              <p className="font-display text-2xl sm:text-3xl font-bold text-primary leading-none">{value}</p>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-muted-foreground leading-tight">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
