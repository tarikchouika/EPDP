"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useI18n } from "@/lib/i18n/context";
import { localeMeta } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Moon, Sun, Languages, Menu, Globe } from "lucide-react";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="EPDP"
      className="shrink-0"
    >
      <rect width="64" height="64" rx="14" className="fill-primary" />
      <path
        d="M32 8 L37.5 22.5 L52 18 L43 32 L52 46 L37.5 41.5 L32 56 L26.5 41.5 L12 46 L21 32 L12 18 L26.5 22.5 Z"
        className="fill-background"
        opacity="0.95"
      />
      <path
        d="M32 18 L34.8 26.2 L43 24 L37.5 32 L43 40 L34.8 37.8 L32 46 L29.2 37.8 L21 40 L26.5 32 L21 24 L29.2 26.2 Z"
        className="fill-gold"
      />
      <circle cx="32" cy="32" r="3" className="fill-secondary" />
    </svg>
  );
}

export function BrandText() {
  const { dict, locale } = useI18n();
  return (
    <span className="flex flex-col leading-tight">
      <span className="font-display font-bold text-base sm:text-lg text-primary">
        {locale === "ar" ? "الكاتب العمومي الرقمي" : locale === "fr" ? "Katib Public Numérique" : "EPDP"}
      </span>
      <span className="text-[11px] sm:text-xs text-muted-foreground tracking-wide">
        {locale === "ar" ? "EPDP · منصة مغربية مجانية" : locale === "fr" ? "Plateforme marocaine gratuite" : dict.hero.badge}
      </span>
    </span>
  );
}

export function Header() {
  const { dict, locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#services", label: dict.nav.services },
    { href: "#links", label: dict.nav.links },
    { href: "#how", label: dict.nav.how },
    { href: "#faq", label: dict.nav.faq },
    { href: "#about", label: dict.nav.about },
    { href: "#legal", label: dict.nav.legal },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-2">
          <Link href="#top" className="flex items-center gap-2.5 min-w-0" aria-label="EPDP">
            <Logo size={38} />
            <BrandText />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="main">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5 h-9" aria-label={dict.language.label}>
                  <Languages className="h-4 w-4 text-primary" />
                  <span className="hidden sm:inline text-xs font-bold">
                    {localeMeta.find((l) => l.code === locale)?.native}
                  </span>
                  <Globe className="h-3.5 w-3.5 text-gold" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                {localeMeta.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLocale(l.code as Locale)}
                    className={`cursor-pointer justify-between ${locale === l.code ? "bg-accent font-bold text-primary" : ""}`}
                  >
                    <span>{l.native}</span>
                    <span className="text-[10px] text-muted-foreground">{l.code.toUpperCase()}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              size="sm"
              className="h-9 w-9 p-0"
              aria-label={dict.theme.toggle}
              title={theme === "dark" ? dict.theme.light : dict.theme.dark}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0 lg:hidden" aria-label={dict.common.menu}>
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side={locale === "ar" ? "right" : "left"} className="w-72 overflow-y-auto">
                <SheetTitle className="flex items-center gap-2 border-b pb-3">
                  <Logo size={32} />
                  <span className="font-display font-bold text-primary">EPDP</span>
                </SheetTitle>
                <nav className="mt-4 flex flex-col gap-1" aria-label="mobile">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-accent hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="mt-4 border-t pt-4">
                    <p className="px-3 pb-2 text-xs font-bold text-muted-foreground">{dict.language.label}</p>
                    <div className="grid grid-cols-2 gap-1">
                      {localeMeta.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLocale(l.code as Locale);
                            setOpen(false);
                          }}
                          className={`rounded-lg px-3 py-2 text-xs font-semibold text-start hover:bg-accent ${
                            locale === l.code ? "bg-accent text-primary" : ""
                          }`}
                        >
                          {l.native}
                        </button>
                      ))}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
