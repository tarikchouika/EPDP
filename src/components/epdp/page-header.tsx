"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Shared page hero used by every subpage for a consistent identity:
 * breadcrumb trail, icon badge, title and subtitle — RTL/LTR aware.
 */
export function PageHeader({
  icon,
  title,
  subtitle,
  crumbs = [],
  children,
}: {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  const { dict } = useI18n();

  return (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Breadcrumb */}
        <nav aria-label={dict.pages.breadcrumb} className="min-w-0">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-semibold text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 transition-colors hover:text-primary"
              >
                <Home className="h-3.5 w-3.5" />
                {dict.nav.home}
              </Link>
            </li>
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={i} className="flex min-w-0 items-center gap-1.5">
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60 rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                  {c.href && !last ? (
                    <Link
                      href={c.href}
                      className="truncate rounded-md px-1.5 py-1 transition-colors hover:text-primary"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      className={`truncate px-1.5 py-1 ${last ? "text-primary" : ""}`}
                      aria-current={last ? "page" : undefined}
                    >
                      {c.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Title row */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          {icon && (
            <span className="inline-flex h-14 min-w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-card px-2 text-primary shadow-sm">
              {icon}
            </span>
          )}
          <div className="min-w-0">
            <h1 className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
