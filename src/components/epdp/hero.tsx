"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { FileText, Landmark, Search, Sparkles, ShieldCheck, Globe2, BadgeCheck } from "lucide-react";
import { docTotal } from "@/lib/data/registry";
import { categories } from "@/lib/data/categories";
import { officialLinks } from "@/lib/data/official-links";

export function Hero() {
  const { dict } = useI18n();
  const router = useRouter();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(q.trim() ? `/forms?q=${encodeURIComponent(q.trim())}` : "/forms");
  };

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60 bg-zellige">
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" aria-hidden="true" />
      <div className="gold-divider absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* min-w-0 lets this grid item shrink below its longest word (German
            compounds) instead of spilling past the viewport — see globals.css. */}
        <div className="min-w-0 text-center lg:text-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-accent px-4 py-1.5 text-xs font-bold text-primary sm:text-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              {dict.hero.badge}
            </span>

            <h1 className="mt-5 break-words font-display text-3xl font-bold leading-[1.25] tracking-tight hyphens-auto sm:text-4xl lg:text-5xl">
              {dict.hero.title}{" "}
              <span className="text-gradient-moroccan">{dict.hero.titleAccent}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:mx-0">
              {dict.hero.subtitle.replace("{docs}", String(docTotal))}
            </p>

            <form onSubmit={submit} className="mx-auto mt-7 flex max-w-xl gap-2 lg:mx-0">
              <div className="relative min-w-0 flex-1">
                <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
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
                <span className="hidden sm:inline">{dict.hero.ctaPrimary}</span>
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/forms">
                <Button size="lg" className="px-6 font-bold">
                  <FileText className="h-4 w-4" />
                  {dict.hero.ctaPrimary}
                </Button>
              </Link>
              <Link href="/links">
                <Button size="lg" variant="outline" className="border-gold px-6 font-bold">
                  <Landmark className="h-4 w-4 text-gold" />
                  {dict.hero.ctaSecondary}
                </Button>
              </Link>
            </div>

            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold text-muted-foreground sm:text-xs lg:justify-start">
              {dict.hero.trust}
            </p>
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
  const { dict } = useI18n();
  const items = [
    { icon: FileText, value: `${docTotal}+`, label: dict.stats.documents },
    { icon: Landmark, value: `${officialLinks.length}+`, label: dict.stats.official },
    { icon: Globe2, value: "7", label: dict.stats.languages },
    { icon: BadgeCheck, value: `${categories.length}`, label: dict.stats.categories },
  ];
  return (
    <section className="border-b border-border/60 bg-muted/40" aria-label="stats">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border/60 max-md:divide-y md:grid-cols-4 md:divide-x rtl:md:divide-x-reverse">
        {items.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-4 py-6 sm:py-8">
            <Icon className="h-8 w-8 shrink-0 text-gold" aria-hidden="true" />
            <div className="text-center sm:text-start">
              <p className="font-display text-2xl font-bold leading-none text-primary sm:text-3xl">{value}</p>
              <p className="mt-1 text-[11px] font-semibold leading-tight text-muted-foreground sm:text-xs">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
