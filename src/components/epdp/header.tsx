"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useI18n } from "@/lib/i18n/context";
import { localeMeta } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import { categories } from "@/lib/data/categories";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  Moon, Sun, Menu, Globe, ChevronDown, LayoutGrid, Home,
  Mail, Scale, BadgeCheck, FileSignature, Handshake, Stamp, ArrowLeftRight,
  Briefcase, HeartHandshake, Users, HardHat, Receipt, Landmark, CreditCard,
  ClipboardList, FileX, Coins, HeartPulse,
} from "lucide-react";

export const navCatIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  demandes: Mail,
  dgi: Coins,
  cnss: HeartPulse,
  chikayat: Scale,
  ichhadat: BadgeCheck,
  tasarih: FileSignature,
  iltizamat: Handshake,
  wakalat: Stamp,
  "uqud-kira": Home,
  "uqud-bay": ArrowLeftRight,
  amal: Briefcase,
  usra: HeartHandshake,
  jamaiyat: Users,
  binaa: HardHat,
  muqawalat: Receipt,
  mahkama: Landmark,
  bank: CreditCard,
  ijraat: ClipboardList,
  "naulat-fasikh": FileX,
};

/** Brand mark — the official EPDP logo artwork (transparent PNG, 840×346). */
const LOGO_AR = 840 / 346;

export function Logo({ size = 38, priority = false }: { size?: number; priority?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="EPDP"
      width={Math.round(size * LOGO_AR)}
      height={size}
      priority={priority}
      className="shrink-0 select-none"
    />
  );
}

export function BrandText() {
  const { dict } = useI18n();
  return (
    <span className="flex min-w-0 flex-col leading-tight">
      <span className="sr-only">EPDP — {dict.brand.tagline}</span>
      {/* Mobile: compact tagline — never truncates mid-word */}
      <span className="truncate font-display text-sm font-bold text-primary sm:hidden">
        {dict.brand.shortTagline}
      </span>
      {/* Tablet/desktop: full brand tagline */}
      <span className="hidden truncate font-display text-sm font-bold text-primary sm:inline sm:text-base">
        {dict.brand.tagline}
      </span>
    </span>
  );
}

export function Header() {
  const { dict, locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/forms", label: dict.nav.services },
    { href: "/assistant", label: dict.nav.assistant },
    { href: "/portals", label: dict.nav.portals },
    { href: "/links", label: dict.nav.links },
    { href: "/faq", label: dict.nav.faq },
    { href: "/about", label: dict.nav.about },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const catsActive = pathname.startsWith("/forms/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-2">
          <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="EPDP">
            <Logo size={34} priority />
            <BrandText />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="main">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    catsActive
                      ? "bg-accent text-primary"
                      : "text-foreground/80 hover:bg-accent hover:text-primary"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                  {dict.nav.categories}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="max-h-[70vh] w-64 overflow-y-auto scroll-moroccan">
                {categories.map((c) => {
                  const Icon = navCatIcons[c.id];
                  return (
                    <DropdownMenuItem key={c.id} asChild>
                      <Link
                        href={`/forms/${c.id}`}
                        className={`flex cursor-pointer items-center gap-2.5 ${
                          pathname === `/forms/${c.id}` ? "bg-accent font-bold text-primary" : ""
                        }`}
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="truncate">{c.name[locale]}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-accent text-primary"
                    : "text-foreground/80 hover:bg-accent hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 gap-1.5" aria-label={dict.language.label}>
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="hidden text-xs font-bold sm:inline">
                    {localeMeta.find((l) => l.code === locale)?.native}
                  </span>
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
              <SheetContent side={locale === "ar" ? "right" : "left"} className="w-72 overflow-y-auto scroll-moroccan">
                <SheetTitle className="flex items-center gap-2 border-b pb-3">
                  <Logo size={28} />
                  <span className="font-display font-bold text-primary">{dict.brand.tagline}</span>
                </SheetTitle>
                <nav className="mt-4 flex flex-col gap-1" aria-label="mobile">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-primary ${
                      pathname === "/" ? "bg-accent text-primary" : ""
                    }`}
                  >
                    <Home className="h-4 w-4" />
                    {dict.nav.home}
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-primary ${
                        isActive(item.href) ? "bg-accent text-primary" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="mt-4 border-t pt-4">
                    <p className="px-3 pb-2 text-xs font-bold text-muted-foreground">
                      {dict.nav.categories}
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                      {categories.map((c) => {
                        const Icon = navCatIcons[c.id];
                        return (
                          <Link
                            key={c.id}
                            href={`/forms/${c.id}`}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors hover:bg-accent hover:text-primary ${
                              pathname === `/forms/${c.id}` ? "bg-accent text-primary" : ""
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5 text-primary" />
                            {c.name[locale]}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

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
