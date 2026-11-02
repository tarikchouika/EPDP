"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { officialLinks } from "@/lib/data/official-links";
import { Logo } from "./header";
import { Heart } from "lucide-react";

export function Footer() {
  const { dict, locale } = useI18n();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "#services", label: dict.nav.services },
    { href: "#links", label: dict.nav.links },
    { href: "#how", label: dict.nav.how },
    { href: "#faq", label: dict.nav.faq },
    { href: "#about", label: dict.nav.about },
  ];

  const legalLinks = dict.legal.docs.map((d, i) => ({
    href: `#legal`,
    label: d.title,
  }));

  const portals = ["gov-ma", "idarati", "cnie", "tax", "cnss", "chikaya"]
    .map((id) => officialLinks.find((l) => l.id === id))
    .filter(Boolean)
    .slice(0, 6);

  return (
    <footer className="mt-auto border-t border-border/70 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#top" className="flex items-center gap-2.5" aria-label="EPDP">
              <Logo size={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-primary">
                  {locale === "ar" ? "الكاتب العمومي الرقمي" : locale === "fr" ? "Katib Public Numérique" : "EPDP"}
                </span>
                <span className="text-[11px] text-muted-foreground">epdp.pages.dev</span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">{dict.footer.tagline}</p>
          </div>

          <nav aria-label="quick links">
            <h3 className="mb-3 font-bold text-sm">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="legal">
            <h3 className="mb-3 font-bold text-sm">{dict.footer.legalTitle}</h3>
            <ul className="space-y-2">
              {legalLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="official portals">
            <h3 className="mb-3 font-bold text-sm">{dict.footer.officialTitle}</h3>
            <ul className="space-y-2">
              {portals.map((p) => (
                <li key={p!.id}>
                  <a
                    href={p!.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    dir="auto"
                  >
                    {locale === "fr" ? p!.name.fr : p!.name.ar}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-[11px] leading-6 text-muted-foreground/80">{dict.footer.disclaimer}</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs font-semibold text-muted-foreground">
              © {year} EPDP — {dict.footer.rights}
            </p>
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
              {dict.footer.madeIn}
              <Heart className="h-3.5 w-3.5 text-secondary fill-current" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
