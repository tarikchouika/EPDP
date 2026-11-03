"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { PageHeader } from "./page-header";
import { OfficialLinksContent } from "./official-links";
import { DocumentAssistant } from "./document-assistant";
import { FaqAccordion, HowItWorks } from "./sections";
import { AboutContent } from "./about-legal";
import { Logo } from "./header";
import { Landmark, HelpCircle, Info, Globe, ArrowRight } from "lucide-react";
import type { LinkCategoryId } from "@/lib/data/official-links";

/** Cross-link strip that keeps the links/portals pages connected. */
function RelatedPages({
  items,
}: {
  items: { href: string; title: string; desc: string; icon: React.ReactNode }[];
}) {
  const { dict } = useI18n();
  return (
    <div className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="mb-4 font-display text-lg font-bold text-primary sm:text-xl">
          {dict.pages.related}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {it.icon}
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 text-sm font-bold">
                  {it.title}
                  <ArrowRight
                    className="h-3.5 w-3.5 text-gold rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1 block text-xs leading-6 text-muted-foreground">
                  {it.desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/** /links — official links of public institutions & bodies. */
export function LinksPage() {
  const { dict } = useI18n();
  return (
    <>
      <PageHeader
        icon={<Landmark className="h-7 w-7" />}
        title={dict.links.title}
        subtitle={dict.links.subtitle}
        crumbs={[{ label: dict.nav.links }]}
      />
      <OfficialLinksContent cats={["social", "employment", "economy", "utilities"]} />
      <RelatedPages
        items={[
          {
            href: "/portals",
            title: dict.nav.portals,
            desc: dict.portals.subtitle,
            icon: <Landmark className="h-5 w-5" />,
          },
        ]}
      />
    </>
  );
}

/** /portals — official government portals & digital public platforms. */
export function PortalsPage() {
  const { dict } = useI18n();
  return (
    <>
      <PageHeader
        icon={<Landmark className="h-7 w-7" />}
        title={dict.portals.title}
        subtitle={dict.portals.subtitle}
        crumbs={[{ label: dict.nav.portals }]}
      />
      <OfficialLinksContent cats={["gov", "digital"]} />
      <RelatedPages
        items={[
          {
            href: "/links",
            title: dict.nav.links,
            desc: dict.links.subtitle,
            icon: <Globe className="h-5 w-5" />,
          },
        ]}
      />
    </>
  );
}

/** /assistant — digital document-filling assistant (branded with the logo). */
export function AssistantPage() {
  const { dict } = useI18n();
  const f = dict.filler;
  return (
    <>
      <PageHeader
        icon={<Logo size={30} />}
        title={f.title}
        subtitle={f.subtitle}
        crumbs={[{ label: dict.nav.assistant }]}
      />
      <DocumentAssistant />
    </>
  );
}

/** /faq — how it works + frequently asked questions. */
export function FaqPage() {
  const { dict } = useI18n();
  return (
    <>
      <PageHeader
        icon={<HelpCircle className="h-7 w-7" />}
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
        crumbs={[{ label: dict.nav.faq }]}
      />
      <HowItWorks />
      <FaqAccordion />
    </>
  );
}

/** /about — about the platform. */
export function AboutPage() {
  const { dict } = useI18n();
  return (
    <>
      <PageHeader
        icon={<Info className="h-7 w-7" />}
        title={dict.about.title}
        crumbs={[{ label: dict.nav.about }]}
      />
      <AboutContent />
    </>
  );
}
