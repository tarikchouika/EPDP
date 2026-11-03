"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { FileText, Home, SearchX } from "lucide-react";

export default function NotFound() {
  const { dict } = useI18n();

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:py-28">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-card text-primary shadow-sm">
        <SearchX className="h-8 w-8" />
      </span>
      <p className="mt-6 font-display text-5xl font-bold text-gradient-moroccan" aria-hidden="true">
        404
      </p>
      <h1 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
        {dict.pages.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-[15px]">
        {dict.pages.notFoundDesc}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/">
          <Button size="lg" className="font-bold">
            <Home className="h-4 w-4" />
            {dict.pages.notFoundCta}
          </Button>
        </Link>
        <Link href="/forms">
          <Button size="lg" variant="outline" className="border-gold font-bold">
            <FileText className="h-4 w-4 text-gold" />
            {dict.nav.services}
          </Button>
        </Link>
      </div>
    </div>
  );
}
