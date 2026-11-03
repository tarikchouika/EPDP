"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { getLink, type ResolvedLink } from "@/lib/data/official-links";
import { categories } from "@/lib/data/categories";
import { Logo } from "./header";
import { Heart } from "lucide-react";

export function Footer() {
  const { dict, locale } = useI18n();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/forms", label: dict.nav.services },
    { href: "/documents", label: dict.nav.docsIndex },
    { href: "/assistant", label: dict.nav.assistant },
    { href: "/portals", label: dict.nav.portals },
    { href: "/links", label: dict.nav.links },
    { href: "/faq", label: dict.nav.faq },
    { href: "/about", label: dict.nav.about },
    { href: "/app", label: dict.nav.androidApp },
  ];

  const legalLinks = dict.legal.docs.map((d) => ({
    href: `/${d.id}`,
    label: d.title,
  }));

  const topCategories = categories.slice(0, 6).map((c) => ({
    href: `/forms/${c.id}`,
    label: c.name[locale],
  }));

  const portals: ResolvedLink[] = ["gov-ma", "idarati", "cnie", "tax", "cnss", "chikaya"]
    .map((id) => getLink(id))
    .filter((x): x is ResolvedLink => Boolean(x))
    .slice(0, 6);

  return (
    <footer className="mt-auto border-t border-border/70 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="EPDP">
              <Logo size={34} />
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="sr-only">EPDP — </span>
                <span className="font-display font-bold text-primary">{dict.brand.tagline}</span>
                <span className="text-[11px] text-muted-foreground">epdp.pages.dev</span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">{dict.footer.tagline}</p>
          </div>

          <nav aria-label="quick links">
            <h3 className="mb-3 text-sm font-bold">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="legal">
            <h3 className="mb-3 text-sm font-bold">{dict.footer.legalTitle}</h3>
            <ul className="space-y-2">
              {legalLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-xs text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-3 mt-6 text-sm font-bold">{dict.nav.categories}</h3>
            <ul className="space-y-2">
              {topCategories.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="official portals">
            <h3 className="mb-3 text-sm font-bold">{dict.footer.officialTitle}</h3>
            <ul className="space-y-2">
              {portals.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition-colors hover:text-primary"
                    dir="auto"
                  >
                    {p.name[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Extra bottom clearance so the floating chatbot button (fixed, 68px
            tall zone) never covers footer links on phones. */}
        <div className="mt-10 border-t border-border/60 pt-6 pb-20 sm:pb-6">
          <p className="text-[11px] leading-6 text-muted-foreground/80">{dict.footer.disclaimer}</p>
          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs font-semibold text-muted-foreground">
              © {year} EPDP — {dict.footer.rights}
            </p>
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
              {dict.footer.madeIn}
              <Heart className="h-3.5 w-3.5 fill-current text-secondary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
