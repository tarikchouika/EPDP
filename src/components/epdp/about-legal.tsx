"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { PageHeader } from "./page-header";
import { Target, Gift, Users, Scale, ScrollText } from "lucide-react";

const valueIcons = [Target, Gift, Users];

/** About content — composed inside the /about page under a PageHeader. */
export function AboutContent() {
  const { dict } = useI18n();
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <h2 className="font-display text-xl font-bold leading-snug sm:text-2xl">
            {dict.about.title}
          </h2>
          <div className="mt-6 space-y-4">
            {dict.about.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-8 text-muted-foreground sm:text-[15px]">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {dict.about.values.map((v, i) => {
            const Icon = valueIcons[i] ?? Target;
            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{v.title}</h3>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type LegalDocId = "terms" | "privacy" | "cookies" | "disclaimer";

/**
 * Standalone legal page (/terms, /privacy, /cookies, /disclaimer):
 * one document rendered in full, plus cross-links to its sibling pages.
 */
export function LegalDocPage({ docId }: { docId: LegalDocId }) {
  const { dict } = useI18n();
  const doc = dict.legal.docs.find((d) => d.id === docId)!;
  const others = dict.legal.docs.filter((d) => d.id !== docId);

  return (
    <>
      <PageHeader
        icon={<Scale className="h-7 w-7" />}
        title={doc.title}
        subtitle={dict.legal.subtitle}
        crumbs={[{ label: dict.legal.title }]}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-1.5 text-xs font-bold text-primary">
            <Scale className="h-3.5 w-3.5 text-gold" />
            {dict.legal.updated}
          </span>
        </div>

        <div className="mt-10 space-y-9">
          {doc.sections.map((sec, j) => (
            <section key={j} id={`sec-${j + 1}`} className="scroll-mt-24">
              <h2 className="mb-2.5 flex items-center gap-2.5 text-base font-bold text-primary">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-bold text-primary">
                  {j + 1}
                </span>
                {sec.h.replace(/^\s*\d+\s*[.\-)]\s*/, "")}
              </h2>
              {sec.body.map((p, k) => (
                <p key={k} className="mb-2.5 text-[13px] leading-7 text-muted-foreground sm:text-sm">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
          <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-bold">
            <ScrollText className="h-4 w-4 text-gold" />
            {dict.pages.related}
          </h3>
          <ul className="grid gap-2 sm:grid-cols-3">
            {others.map((d) => (
              <li key={d.id}>
                <Link
                  href={`/${d.id}`}
                  className="flex h-full items-center gap-2 rounded-xl border border-border/70 bg-accent/50 px-3.5 py-3 text-xs font-bold transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Scale className="h-3.5 w-3.5 shrink-0 text-gold" />
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
