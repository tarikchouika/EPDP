"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { categories } from "@/lib/data/categories";
import { allDocuments, popularAll } from "@/lib/data/registry";
import { DocCard, catIcons } from "./catalog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, FileText, LayoutGrid, Sparkles, Star, Landmark } from "lucide-react";

/** Home: grid of the 19 administrative categories, each linking to its page. */
export function CategoriesGrid() {
  const { dict, locale } = useI18n();

  const counts = allDocuments.reduce<Record<string, number>>((acc, d) => {
    acc[d.cat] = (acc[d.cat] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section className="py-14 sm:py-20" aria-labelledby="home-categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-1.5 text-xs font-bold text-primary">
            <LayoutGrid className="h-3.5 w-3.5 text-gold" />
            {dict.nav.categories}
          </span>
          <h2 id="home-categories" className="mt-4 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            {dict.pages.categoriesTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {dict.pages.categoriesSubtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = catIcons[c.id];
            return (
              <Link
                key={c.id}
                href={`/forms/${c.id}`}
                className="group flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
                    {counts[c.id] ?? 0}
                  </span>
                </div>
                <h3 className="mt-3 font-bold leading-6 text-foreground group-hover:text-primary">
                  {c.name[locale]}
                </h3>
                <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-5 text-muted-foreground/90">
                  {c.desc[locale]}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                  {dict.pages.openCategory}
                  <ArrowRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Home: most requested documents. */
export function PopularDocs() {
  const { dict } = useI18n();
  const docs = popularAll.slice(0, 10);

  return (
    <section className="border-y border-border/60 bg-muted/30 py-14 sm:py-20" aria-labelledby="home-popular">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-1.5 text-xs font-bold text-primary">
              <Star className="h-3.5 w-3.5 fill-current text-gold" />
              {dict.services.popular}
            </span>
            <h2 id="home-popular" className="mt-4 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              {dict.pages.popularTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {dict.pages.popularSubtitle}
            </p>
          </div>
          <Link href="/forms?cat=popular" className="shrink-0">
            <Button variant="outline" className="border-gold font-bold">
              <FileText className="h-4 w-4 text-gold" />
              {dict.pages.viewAll}
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {docs.map((d) => (
            <DocCard key={d.id} doc={d} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Home: closing call-to-action band (assistant + documents). */
export function HomeCta() {
  const { dict } = useI18n();

  return (
    <section className="bg-zellige py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 shadow-lg shadow-primary/5">
            <div className="absolute inset-3 rounded-2xl border border-primary/15" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
                {dict.pages.assistantCtaTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {dict.pages.assistantCtaDesc}
              </p>
              <Link href="/assistant" className="mt-5 inline-block">
                <Button size="lg" className="font-bold">
                  <Sparkles className="h-4 w-4" />
                  {dict.pages.tryAssistant}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-card p-8 shadow-lg shadow-primary/5">
            <div className="absolute inset-3 rounded-2xl border border-gold/20" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Landmark className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
                {dict.links.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {dict.links.subtitle}
              </p>
              <Link href="/links" className="mt-5 inline-block">
                <Button size="lg" variant="outline" className="border-gold font-bold">
                  <Landmark className="h-4 w-4 text-gold" />
                  {dict.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
