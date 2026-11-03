"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { PageHeader } from "./page-header";
import { navCatIcons } from "./header";
import { allDocuments, docTotal } from "@/lib/data/registry";
import { categories } from "@/lib/data/categories";
import { FileText } from "lucide-react";

/**
 * /documents — complete browse index of every document, grouped by category,
 * each entry linking to its own /documents/[id] page.
 */
export function DocumentsIndex() {
  const { dict, locale } = useI18n();

  return (
    <>
      <PageHeader
        icon={<FileText className="h-7 w-7" />}
        title={dict.docsIndex.title}
        subtitle={dict.docsIndex.subtitle}
        crumbs={[{ label: dict.nav.docsIndex }]}
      >
        <p className="mt-3 text-xs font-bold text-muted-foreground">
          {dict.pages.docsCount.replace("{n}", String(docTotal))} ·{" "}
          {categories.length} {dict.stats.categories}
        </p>
      </PageHeader>

      <div className="border-y border-border/60 bg-muted/30 bg-zellige">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          {/* Category quick-nav */}
          <nav className="mb-10 flex flex-wrap gap-2" aria-label={dict.nav.categories}>
            {categories.map((c) => {
              const Icon = navCatIcons[c.id];
              const count = allDocuments.filter((d) => d.cat === c.id).length;
              if (!count) return null;
              return (
                <a
                  key={c.id}
                  href={`#cat-${c.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs font-bold shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                  {c.name[locale]}
                  <span className="text-[10px] font-bold text-muted-foreground">{count}</span>
                </a>
              );
            })}
          </nav>

          <div className="space-y-10">
            {categories.map((c) => {
              const docs = allDocuments.filter((d) => d.cat === c.id);
              if (!docs.length) return null;
              const Icon = navCatIcons[c.id];
              return (
                <section key={c.id} id={`cat-${c.id}`} className="scroll-mt-24">
                  <div className="mb-4 flex items-baseline justify-between gap-3 border-b border-border/70 pb-2">
                    <h2 className="flex items-center gap-2 font-display text-lg font-bold text-primary sm:text-xl">
                      {Icon && <Icon className="h-5 w-5" />}
                      {c.name[locale]}
                    </h2>
                    <p className="shrink-0 text-xs font-bold text-muted-foreground">
                      {dict.pages.docsCount.replace("{n}", String(docs.length))}
                    </p>
                  </div>
                  <ul className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2 lg:grid-cols-3">
                    {docs.map((d) => (
                      <li key={d.id} className="min-w-0">
                        <Link
                          href={`/documents/${d.id}`}
                          className="block truncate rounded-md px-2 py-1.5 text-[13px] leading-6 text-foreground/85 transition-colors hover:bg-accent hover:text-primary"
                        >
                          {d.title[locale]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
