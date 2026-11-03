"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { allDocuments, getTemplate, type ResolvedDocument } from "@/lib/data/registry";
import { categories } from "@/lib/data/categories";
import { getLink } from "@/lib/data/official-links";
import { downloadWord } from "@/lib/docx-export";
import { PageHeader } from "./page-header";
import { catIcons, DocCard } from "./catalog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Star, Download, Copy, Check, ExternalLink, MapPin, ListChecks, Sparkles,
  Landmark, FileText, Tag,
} from "lucide-react";

/** Full document page: template, details, official source and related forms. */
export function DocumentView({ doc }: { doc: ResolvedDocument }) {
  const { dict, locale } = useI18n();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<"ar" | "fr">("ar");

  const tpl = getTemplate(doc.templateId);
  const category = categories.find((c) => c.id === doc.cat);
  const Icon = catIcons[doc.cat];
  const authority = doc.authority ? getLink(doc.authority) : null;

  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        toast({ description: dict.services.copied });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  const related = allDocuments
    .filter((d) => d.cat === doc.cat && d.id !== doc.id)
    .sort((a, b) => Number(b.popular ?? false) - Number(a.popular ?? false))
    .slice(0, 5);

  const docsInCat = allDocuments.filter((d) => d.cat === doc.cat).length;

  return (
    <>
      <PageHeader
        icon={<Icon className="h-7 w-7" />}
        title={doc.title[locale]}
        crumbs={[
          { label: dict.nav.services, href: "/forms" },
          ...(category
            ? [{ label: category.name[locale], href: `/forms/${doc.cat}` }]
            : []),
        ]}
      >
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {doc.popular && (
            <Badge variant="outline" className="border-gold/60 gap-1 text-gold">
              <Star className="h-3 w-3 fill-current" />
              {dict.services.popular}
            </Badge>
          )}
          {tpl && (
            <Badge variant="outline" className="border-primary/40 text-primary">
              {dict.services.freeTag}
            </Badge>
          )}
          {category && (
            <Badge variant="outline" className="border-border text-muted-foreground">
              {category.name[locale]}
            </Badge>
          )}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* ── Main column ── */}
          <div className="min-w-0">
            {/* Description + official names */}
            <p className="text-sm leading-8 text-muted-foreground sm:text-[15px]">
              {doc.desc[locale]}
            </p>

            <div className="mt-5 rounded-xl border border-border/70 bg-card p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {dict.catalog.officialTitle}
              </p>
              <p dir="rtl" className="mt-1.5 text-sm font-semibold leading-7 text-foreground/90">
                {dict.catalog.officialAr}: {doc.title.ar}
              </p>
              <p dir="ltr" className="text-sm font-semibold leading-7 text-foreground/90">
                {dict.catalog.officialFr}: {doc.title.fr}
              </p>
            </div>

            {/* Template */}
            {tpl ? (
              <section className="mt-8" aria-label={dict.services.templateTab}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-lg font-bold sm:text-xl">
                    {dict.services.templateTab}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <div
                      className="inline-flex rounded-lg border border-border bg-card p-1"
                      role="group"
                      aria-label={dict.filler.docLang}
                    >
                      <button
                        onClick={() => setLang("ar")}
                        className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                          lang === "ar" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {dict.services.arabicVersion}
                      </button>
                      <button
                        onClick={() => setLang("fr")}
                        className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                          lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {dict.services.frenchVersion}
                      </button>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="font-bold"
                      onClick={() => copyText(tpl[lang])}
                    >
                      {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                      {dict.services.copy}
                    </Button>
                    <Button
                      size="sm"
                      className="font-bold"
                      onClick={() =>
                        downloadWord(lang === "ar" ? doc.title.ar : doc.title.fr, tpl[lang], lang === "ar")
                      }
                    >
                      <Download className="h-4 w-4" />
                      {dict.services.download}
                    </Button>
                  </div>
                </div>

                <Link
                  href={`/assistant?doc=${doc.id}`}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
                >
                  <Sparkles className="h-4 w-4 text-gold" />
                  {dict.pages.fillWithAssistant}
                </Link>

                <pre
                  dir={lang === "ar" ? "rtl" : "ltr"}
                  className="mt-4 scroll-moroccan whitespace-pre-wrap rounded-xl border border-border bg-muted/30 p-5 font-sans text-[13px] leading-8 text-start"
                >
                  {tpl[lang]}
                </pre>
              </section>
            ) : (
              <p className="mt-6 rounded-xl border border-gold/40 bg-accent/60 p-4 text-xs leading-6 text-foreground/80">
                {dict.services.note}
              </p>
            )}

            {/* Details */}
            <section className="mt-10 space-y-6" aria-label={dict.services.detailsTab}>
              <h2 className="font-display text-lg font-bold sm:text-xl">
                {dict.services.detailsTab}
              </h2>

              {doc.fields && doc.fields[locale] && doc.fields[locale].length > 0 && (
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                    <ListChecks className="h-4 w-4 text-primary" />
                    {dict.services.requiredInfo}
                  </h3>
                  <ul className="space-y-1.5">
                    {doc.fields[locale].map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {dict.services.destination}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">{doc.where[locale]}</p>
              </div>

              {authority && (
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    {dict.services.officialSource}
                  </h3>
                  <a
                    href={authority.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:bg-primary/10"
                  >
                    <Landmark className="h-4 w-4" />
                    {authority.name[locale]}
                    <span className="text-[11px] font-semibold text-muted-foreground" dir="ltr">
                      ({authority.domain})
                    </span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}

              <div>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                  <Tag className="h-4 w-4 text-primary" />
                  {dict.pages.keywordsLabel}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {doc.keywords.map((k) => (
                    <span
                      key={k}
                      dir="auto"
                      className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">
            {category && (
              <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-muted-foreground">
                      {dict.nav.categories}
                    </p>
                    <Link
                      href={`/forms/${doc.cat}`}
                      className="font-bold text-sm text-primary hover:underline"
                    >
                      {category.name[locale]}
                    </Link>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  {category.desc[locale]}
                </p>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground">
                    <FileText className="h-4 w-4 text-gold" />
                    {dict.pages.docsCount.replace("{n}", String(docsInCat))}
                  </span>
                  <Link
                    href={`/forms/${doc.cat}`}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    {dict.pages.openCategory}
                  </Link>
                </div>
              </div>
            )}

            {tpl && (
              <Link
                href={`/assistant?doc=${doc.id}`}
                className="block rounded-2xl border border-gold/50 bg-accent/70 p-5 shadow-sm transition-colors hover:bg-accent"
              >
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                  <Sparkles className="h-4 w-4 text-gold" />
                  {dict.pages.assistantCtaTitle}
                </span>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                  {dict.pages.assistantCtaDesc}
                </p>
              </Link>
            )}
          </aside>
        </div>

        {/* Related documents */}
        {related.length > 0 && (
          <section className="mt-14 border-t border-border/60 pt-10">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                {dict.pages.relatedDocs}
              </h2>
              {category && (
                <Link
                  href={`/forms/${doc.cat}`}
                  className="shrink-0 text-xs font-bold text-primary hover:underline"
                >
                  {dict.pages.viewAll}
                </Link>
              )}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {related.map((d) => (
                <DocCard key={d.id} doc={d} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
