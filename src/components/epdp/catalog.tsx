"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { categories, type CategoryId } from "@/lib/data/categories";
import { allDocuments, getTemplate, type ResolvedDocument } from "@/lib/data/registry";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search, Star, FileText,
  Mail, Scale, BadgeCheck, FileSignature, Handshake, Stamp, Home, ArrowLeftRight,
  Briefcase, HeartHandshake, Users, HardHat, Receipt, Landmark, CreditCard, ClipboardList,
  FileX, Coins, HeartPulse, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight,
  SlidersHorizontal, X, ArrowUpRight,
} from "lucide-react";

export const catIcons: Record<CategoryId, React.ComponentType<{ className?: string }>> = {
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

export type CatFilter = CategoryId | "all" | "popular";
type SortMode = "popular" | "alpha";

/** Responsive page size: 12 on portrait phones, 16 on landscape phones/tablets, 24 on desktops. */
function usePageSize() {
  const [size, setSize] = useState(12);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSize(w >= 1024 ? 24 : w >= 640 ? 16 : 12);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

function pageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set<number>([1, 2, current - 1, current, current + 1, total - 1, total]);
  const sorted = [...set].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) out.push("…");
    out.push(p);
    prev = p;
  }
  return out;
}

/**
 * Unified document browser.
 * - On `/forms`: full catalog with category chips linking to dedicated pages.
 * - On `/forms/[cat]`: `fixedCat` locks the listing to one category.
 * Catalog state (q/sort/page) is mirrored in the URL for deep links.
 */
export function Catalog({ fixedCat }: { fixedCat?: CategoryId }) {
  const { dict, locale } = useI18n();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CatFilter>("all");
  const [sort, setSort] = useState<SortMode>("popular");
  const [page, setPage] = useState(1);
  const pageSize = usePageSize();
  const toolbarRef = useRef<HTMLDivElement>(null);

  const validCat = (c: string | null): CatFilter =>
    c === "popular"
      ? "popular"
      : categories.some((x) => x.id === c)
        ? (c as CategoryId)
        : "all";

  /** Restore catalog state from the URL (supports deep links + back/forward). */
  const readParams = useCallback(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      setQuery(sp.get("q") ?? "");
      setCat(fixedCat ?? validCat(sp.get("cat")));
      setSort(sp.get("sort") === "alpha" ? "alpha" : "popular");
      setPage(Math.max(1, parseInt(sp.get("page") ?? "1", 10) || 1));
    } catch {
      /* ignore */
    }
     
  }, [fixedCat]);

  useEffect(() => {
    // Mount-time restoration from the URL — intentional setState in effect
    // (same pattern as the i18n provider): first render is SSR-safe, then
    // the deep-linked catalog state (cat/q/sort/page) is applied once.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    readParams();
    window.addEventListener("popstate", readParams);
    return () => window.removeEventListener("popstate", readParams);
  }, [readParams]);

  const syncUrl = useCallback(
    (q: string, c: CatFilter, s: SortMode, p: number, mode: "push" | "replace") => {
      try {
        const url = new URL(window.location.href);
        const sp = url.searchParams;
        if (q.trim()) sp.set("q", q.trim());
        else sp.delete("q");
        if (!fixedCat) {
          if (c !== "all") sp.set("cat", c);
          else sp.delete("cat");
        }
        if (s !== "popular") sp.set("sort", s);
        else sp.delete("sort");
        if (p > 1) sp.set("page", String(p));
        else sp.delete("page");
        if (mode === "push") window.history.pushState(null, "", url);
        else window.history.replaceState(null, "", url);
      } catch {
        /* ignore */
      }
    },
    [fixedCat]
  );

  const applySort = (s: SortMode) => {
    setSort(s);
    setPage(1);
    syncUrl(query, fixedCat ?? cat, s, 1, "push");
  };

  const onSearchChange = (v: string) => {
    setQuery(v);
    setPage(1);
    syncUrl(v, fixedCat ?? cat, sort, 1, "replace");
  };

  const goToPage = (n: number) => {
    const total = totalPages;
    const np = Math.min(Math.max(1, n), total);
    if (np === safePage) return;
    setPage(np);
    syncUrl(query, fixedCat ?? cat, sort, np, "push");
    toolbarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const scope = fixedCat ? allDocuments.filter((d) => d.cat === fixedCat) : allDocuments;
    const list = scope.filter((d) => {
      const effective: CatFilter = fixedCat ?? cat;
      if (effective === "popular" && !d.popular) return false;
      if (effective !== "all" && effective !== "popular" && d.cat !== effective) return false;
      if (!q) return true;
      const hay = [
        d.title[locale],
        d.title.ar,
        d.title.fr,
        d.title.en,
        ...d.keywords,
        d.desc[locale],
        d.desc.ar,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
    const coll = new Intl.Collator(locale === "ar" ? "ar" : locale);
    return [...list].sort((a, b) => {
      if (sort === "popular") {
        const pa = a.popular ? 0 : 1;
        const pb = b.popular ? 0 : 1;
        if (pa !== pb) return pa - pb;
      }
      return coll.compare(a.title[locale], b.title[locale]);
    });
  }, [query, cat, sort, locale, fixedCat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const pageItems = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);
  const from = filtered.length ? (safePage - 1) * pageSize + 1 : 0;
  const to = Math.min(safePage * pageSize, filtered.length);
  const showingText = dict.catalog.showing
    .replace("{from}", String(from))
    .replace("{to}", String(to))
    .replace("{total}", String(filtered.length));
  const currentAria = dict.catalog.currentPage
    .replace("{page}", String(safePage))
    .replace("{pages}", String(totalPages));
  const hasFilters = (fixedCat ?? cat) !== "all" || query.trim() !== "";

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Search */}
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute top-1/2 start-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={dict.services.search}
              aria-label={dict.services.search}
              className="h-12 rounded-xl bg-card ps-10 pe-10 text-sm shadow-sm"
            />
            {query && (
              <button
                onClick={() => onSearchChange("")}
                aria-label={dict.common.close}
                className="absolute top-1/2 end-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category chips — links to dedicated category pages */}
        {!fixedCat && (
          <div
            className="mt-5 -mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 sm:overflow-visible"
            role="group"
            aria-label={dict.catalog.filterAria}
          >
            <div className="flex w-max gap-2 sm:mx-auto sm:w-auto sm:flex-wrap sm:justify-center">
              <FilterChip href="/forms" active={cat === "all"}>
                {dict.services.all}
              </FilterChip>
              <FilterChip href="/forms?cat=popular" active={cat === "popular"} star>
                {dict.services.popular}
              </FilterChip>
              {categories.map((c) => {
                const Icon = catIcons[c.id];
                return (
                  <FilterChip
                    key={c.id}
                    href={`/forms/${c.id}`}
                    active={cat === c.id}
                    icon={<Icon className="h-3.5 w-3.5" />}
                  >
                    {c.name[locale]}
                  </FilterChip>
                );
              })}
            </div>
          </div>
        )}

        {/* Toolbar: result count + sort */}
        <div ref={toolbarRef} className="mt-6 flex scroll-mt-24 flex-wrap items-center justify-center gap-3 sm:justify-between">
          <p className="text-xs font-bold text-muted-foreground" role="status" aria-live="polite">
            {showingText}
          </p>
          <div className="flex items-center gap-2">
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-3 text-xs font-bold text-muted-foreground"
                onClick={() => {
                  setCat("all");
                  setQuery("");
                  setPage(1);
                  if (!fixedCat) syncUrl("", "all", sort, 1, "push");
                  else syncUrl("", fixedCat, sort, 1, "push");
                }}
              >
                <X className="h-3.5 w-3.5" />
                {dict.catalog.clearFilters}
              </Button>
            )}
            <Select value={sort} onValueChange={(v) => applySort(v as SortMode)}>
              <SelectTrigger
                aria-label={dict.catalog.sortLabel}
                title={dict.catalog.sortLabel}
                className="h-9 w-[168px] rounded-xl bg-card text-xs font-bold shadow-sm"
              >
                <span className="inline-flex items-center gap-2">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
                  <SelectValue />
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">{dict.catalog.sortPopular}</SelectItem>
                <SelectItem value="alpha">{dict.catalog.sortAlpha}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <Search className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <p className="mt-3 font-bold">{dict.services.noResults}</p>
            <p className="mt-1 text-xs text-muted-foreground">{dict.services.noResultsHint}</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {pageItems.map((doc) => (
              <DocCard key={doc.id} doc={doc} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label={currentAria} className="mt-10">
            <ul className="flex flex-wrap items-center justify-center gap-1.5">
              <li>
                <PageBtn onClick={() => goToPage(1)} disabled={safePage === 1} ariaLabel={dict.catalog.first}>
                  <ChevronsLeft className="h-4 w-4 rtl:-scale-x-100" />
                </PageBtn>
              </li>
              <li>
                <PageBtn onClick={() => goToPage(safePage - 1)} disabled={safePage === 1} ariaLabel={dict.catalog.prev}>
                  <ChevronLeft className="h-4 w-4 rtl:-scale-x-100" />
                  <span className="hidden md:inline">{dict.catalog.prev}</span>
                </PageBtn>
              </li>
              {pageNumbers(safePage, totalPages).map((p, i) =>
                p === "…" ? (
                  <li
                    key={`e-${i}`}
                    className="flex h-10 w-10 items-center justify-center text-muted-foreground sm:h-9 sm:w-9"
                    aria-hidden
                  >
                    …
                  </li>
                ) : (
                  <li key={p}>
                    <PageBtn
                      onClick={() => goToPage(p)}
                      active={p === safePage}
                      ariaLabel={dict.catalog.pageAria.replace("{n}", String(p))}
                      ariaCurrent={p === safePage}
                    >
                      {p}
                    </PageBtn>
                  </li>
                )
              )}
              <li>
                <PageBtn
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  ariaLabel={dict.catalog.next}
                >
                  <span className="hidden md:inline">{dict.catalog.next}</span>
                  <ChevronRight className="h-4 w-4 rtl:-scale-x-100" />
                </PageBtn>
              </li>
              <li>
                <PageBtn
                  onClick={() => goToPage(totalPages)}
                  disabled={safePage === totalPages}
                  ariaLabel={dict.catalog.last}
                >
                  <ChevronsRight className="h-4 w-4 rtl:-scale-x-100" />
                </PageBtn>
              </li>
            </ul>
            <p className="mt-3 text-center text-[11px] font-semibold text-muted-foreground sm:hidden" aria-hidden>
              {currentAria}
            </p>
          </nav>
        )}
      </div>
    </div>
  );
}

function PageBtn({
  children,
  onClick,
  disabled,
  active,
  ariaLabel,
  ariaCurrent,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  ariaLabel: string;
  ariaCurrent?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={ariaCurrent ? "page" : undefined}
      className={`inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-lg px-2 text-sm font-bold transition-colors sm:h-9 sm:min-w-9 ${
        active
          ? "border border-primary bg-primary/10 text-primary shadow-sm"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      } ${disabled ? "pointer-events-none opacity-40" : ""}`}
    >
      {children}
    </button>
  );
}

function FilterChip({
  children,
  href,
  active,
  icon,
  star,
}: {
  children: React.ReactNode;
  href: string;
  active: boolean;
  icon?: React.ReactNode;
  star?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-card text-foreground/75 hover:border-gold hover:text-primary"
      }`}
    >
      {star ? <Star className="h-3.5 w-3.5 fill-current" /> : icon}
      {children}
    </Link>
  );
}

export function DocCard({ doc }: { doc: ResolvedDocument }) {
  const { dict, locale } = useI18n();
  const Icon = catIcons[doc.cat];
  const hasTemplate = Boolean(getTemplate(doc.templateId));
  return (
    <Link
      href={`/documents/${doc.id}`}
      className="group flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          {doc.popular && (
            <Badge variant="outline" className="border-gold/60 px-1.5 text-[10px] text-gold gap-1">
              <Star className="h-3 w-3 fill-current" />
              {dict.services.popular}
            </Badge>
          )}
          {hasTemplate && (
            <Badge variant="outline" className="border-primary/40 px-1.5 text-[10px] text-primary">
              {dict.services.freeTag}
            </Badge>
          )}
        </div>
      </div>

      <h3 className="mt-3 font-bold text-[15px] leading-6 text-foreground group-hover:text-primary">
        {doc.title[locale]}
      </h3>
      <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground/90 line-clamp-3">
        {doc.desc[locale]}
      </p>

      <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-bold text-foreground/80 transition-colors group-hover:border-primary group-hover:text-primary">
        <FileText className="h-4 w-4" />
        {dict.services.viewDoc}
        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 rtl:-scale-x-100" />
      </span>
    </Link>
  );
}
