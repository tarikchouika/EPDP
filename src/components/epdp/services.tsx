"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { categories, type CategoryId } from "@/lib/data/categories";
import { allDocuments, getTemplate, type ResolvedDocument } from "@/lib/data/registry";
import { getLink } from "@/lib/data/official-links";
import { downloadWord, downloadPdf } from "@/lib/docx-export";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Search, Star, FileText, Download, Copy, Check, ExternalLink, MapPin, ListChecks,
  Mail, Scale, BadgeCheck, FileSignature, Handshake, Stamp, Home, ArrowLeftRight,
  Briefcase, HeartHandshake, Users, HardHat, Receipt, Landmark, CreditCard, ClipboardList, X,
  FileX, Sparkles, Coins, HeartPulse, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight, SlidersHorizontal, Printer,
} from "lucide-react";

const catIcons: Record<CategoryId, React.ComponentType<{ className?: string }>> = {
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

type CatFilter = CategoryId | "all" | "popular";
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

export function Services() {
  const { dict, locale } = useI18n();
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CatFilter>("all");
  const [sort, setSort] = useState<SortMode>("popular");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<ResolvedDocument | null>(null);
  const pageSize = usePageSize();

  const validCat = (c: string | null): CatFilter =>
    c === "popular" ? "popular" : categories.some((x) => x.id === c) ? (c as CategoryId) : "all";

  /** Restore catalog state from the URL (supports deep links + back/forward). */
  const readParams = useCallback(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      setQuery(sp.get("q") ?? "");
      setCat(validCat(sp.get("cat")));
      setSort(sp.get("sort") === "alpha" ? "alpha" : "popular");
      setPage(Math.max(1, parseInt(sp.get("page") ?? "1", 10) || 1));
    } catch {
      /* ignore */
    }
  }, []);

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
        if (c !== "all") sp.set("cat", c);
        else sp.delete("cat");
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
    []
  );

  /** Hero search box dispatches a global event — keep it in sync. */
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      setQuery(detail);
      setPage(1);
      syncUrl(detail, cat, sort, 1, "replace");
    };
    window.addEventListener("epdp-search", handler);
    return () => window.removeEventListener("epdp-search", handler);
  }, [cat, sort, syncUrl]);

  const applyFilter = (c: CatFilter) => {
    setCat(c);
    setPage(1);
    syncUrl(query, c, sort, 1, "push");
  };

  const applySort = (s: SortMode) => {
    setSort(s);
    setPage(1);
    syncUrl(query, cat, s, 1, "push");
  };

  const onSearchChange = (v: string) => {
    setQuery(v);
    setPage(1);
    syncUrl(v, cat, sort, 1, "replace");
  };

  const goToPage = (n: number) => {
    const np = Math.min(Math.max(1, n), totalPages);
    if (np === safePage) return;
    setPage(np);
    syncUrl(query, cat, sort, np, "push");
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = allDocuments.filter((d) => {
      if (cat === "popular" && !d.popular) return false;
      if (cat !== "all" && cat !== "popular" && d.cat !== cat) return false;
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
  }, [query, cat, sort, locale]);

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
  const hasFilters = cat !== "all" || query.trim() !== "";

  return (
    <section id="services" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Search */}
        <div className="mt-10">
          <div className="relative mx-auto max-w-xl">
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

          {/* Category chips — horizontally scrollable on phones, wrapped on larger screens */}
          <div
            className="mt-5 -mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 sm:overflow-visible"
            role="group"
            aria-label={dict.catalog.filterAria}
          >
            <div className="flex w-max gap-2 sm:mx-auto sm:w-auto sm:flex-wrap sm:justify-center">
              <FilterChip active={cat === "all"} onClick={() => applyFilter("all")}>
                {dict.services.all}
              </FilterChip>
              <FilterChip active={cat === "popular"} onClick={() => applyFilter("popular")} star>
                {dict.services.popular}
              </FilterChip>
              {categories.map((c) => {
                const Icon = catIcons[c.id];
                return (
                  <FilterChip
                    key={c.id}
                    active={cat === c.id}
                    onClick={() => applyFilter(c.id)}
                    icon={<Icon className="h-3.5 w-3.5" />}
                  >
                    {c.name[locale]}
                  </FilterChip>
                );
              })}
            </div>
          </div>

          {/* Toolbar: result count + sort */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-between">
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
                    syncUrl("", "all", sort, 1, "push");
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
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <Search className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <p className="mt-3 font-bold">{dict.services.noResults}</p>
            <p className="mt-1 text-xs text-muted-foreground">{dict.services.noResultsHint}</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {pageItems.map((doc) => (
              <DocCard key={doc.id} doc={doc} onOpen={() => setSelected(doc)} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label={currentAria}
            className="mt-10"
          >
            <ul className="flex flex-wrap items-center justify-center gap-1.5">
              <li>
                <PageBtn
                  onClick={() => goToPage(1)}
                  disabled={safePage === 1}
                  ariaLabel={dict.catalog.first}
                >
                  <ChevronsLeft className="h-4 w-4 rtl:-scale-x-100" />
                </PageBtn>
              </li>
              <li>
                <PageBtn
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  ariaLabel={dict.catalog.prev}
                >
                  <ChevronLeft className="h-4 w-4 rtl:-scale-x-100" />
                  <span className="hidden md:inline">{dict.catalog.prev}</span>
                </PageBtn>
              </li>
              {pageNumbers(safePage, totalPages).map((p, i) =>
                p === "…" ? (
                  <li key={`e-${i}`} className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center text-muted-foreground" aria-hidden>
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

      <DocDialog key={selected?.id ?? "none"} doc={selected} onClose={() => setSelected(null)} />
    </section>
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
      className={`inline-flex h-10 min-w-10 sm:h-9 sm:min-w-9 items-center justify-center gap-1.5 rounded-lg px-2 text-sm font-bold transition-colors ${
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
  active,
  onClick,
  icon,
  star,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  star?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-card text-foreground/75 hover:border-gold hover:text-primary"
      }`}
    >
      {star ? <Star className="h-3.5 w-3.5 fill-current" /> : icon}
      {children}
    </button>
  );
}

function DocCard({ doc, onOpen }: { doc: ResolvedDocument; onOpen: () => void }) {
  const { dict, locale } = useI18n();
  const Icon = catIcons[doc.cat];
  const hasTemplate = Boolean(getTemplate(doc.templateId));
  return (
    <article className="group flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          {doc.popular && (
            <Badge variant="outline" className="border-gold/60 text-[10px] text-gold gap-1 px-1.5">
              <Star className="h-3 w-3 fill-current" />
              {dict.services.popular}
            </Badge>
          )}
          {hasTemplate && (
            <Badge variant="outline" className="border-primary/40 text-[10px] text-primary px-1.5">
              {dict.services.freeTag}
            </Badge>
          )}
        </div>
      </div>

      <h3 className="mt-3 font-bold text-[15px] leading-6 text-foreground">
        {doc.title[locale]}
      </h3>
      <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground/90 line-clamp-3">
        {doc.desc[locale]}
      </p>

      <Button
        variant="outline"
        size="sm"
        className="mt-4 w-full font-bold group-hover:border-primary group-hover:text-primary"
        onClick={onOpen}
      >
        <FileText className="h-4 w-4" />
        {dict.services.viewDoc}
      </Button>
    </article>
  );
}

function DocDialog({ doc, onClose }: { doc: ResolvedDocument | null; onClose: () => void }) {
  const { dict, locale } = useI18n();
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);
  const [lang, setLang] = useState<"ar" | "fr">("ar");

  if (!doc) return null;
  const tpl = getTemplate(doc.templateId);

  const copyText = (text: string, key: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(key);
        toast({ description: dict.services.copied });
        setTimeout(() => setCopied(null), 2000);
      })
      .catch(() => {});
  };

  return (
    <Dialog open={Boolean(doc)} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto scroll-moroccan p-0 gap-0">
        <DialogHeader className="border-b bg-muted/40 px-6 py-4">
          <DialogTitle className="font-display text-lg font-bold leading-8">
            {doc.title[locale]}
          </DialogTitle>
          <DialogDescription asChild>
            <div className="mt-2 rounded-lg border border-border/70 bg-card p-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {dict.catalog.officialTitle}
              </p>
              <p dir="rtl" className="mt-1 text-xs font-semibold leading-6 text-foreground/90">
                {dict.catalog.officialAr}: {doc.title.ar}
              </p>
              <p dir="ltr" className="text-xs font-semibold leading-6 text-foreground/90">
                {dict.catalog.officialFr}: {doc.title.fr}
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-5">
          <p className="text-sm leading-7 text-muted-foreground">{doc.desc[locale]}</p>

          {tpl ? (
            <Tabs defaultValue="template" className="mt-5">
              <TabsList className="h-10">
                <TabsTrigger value="template" className="font-bold text-xs px-4">
                  {dict.services.templateTab}
                </TabsTrigger>
                <TabsTrigger value="details" className="font-bold text-xs px-4">
                  {dict.services.detailsTab}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="template" className="mt-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex rounded-lg border border-border bg-card p-1" role="group" aria-label={dict.filler.docLang}>
                    <button
                      onClick={() => setLang("ar")}
                      className={`rounded-md px-3 py-1 text-xs font-bold transition ${lang === "ar" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {dict.services.arabicVersion}
                    </button>
                    <button
                      onClick={() => setLang("fr")}
                      className={`rounded-md px-3 py-1 text-xs font-bold transition ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {dict.services.frenchVersion}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="font-bold" onClick={() => copyText(tpl[lang], lang)}>
                      {copied === lang ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                      {dict.services.copy}
                    </Button>
                    <Button
                      size="sm"
                      className="font-bold"
                      onClick={() =>
                        downloadWord(
                          lang === "ar" ? doc.title.ar : doc.title.fr,
                          tpl[lang],
                          lang === "ar"
                        )
                      }
                    >
                      <Download className="h-4 w-4" />
                      {dict.services.download}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="font-bold"
                      onClick={downloadPdf}
                    >
                      <Printer className="h-4 w-4" />
                      {dict.services.downloadPdf}
                    </Button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("epdp-open-filler", { detail: doc.id }));
                    onClose();
                  }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
                >
                  <Sparkles className="h-4 w-4 text-gold" />
                  {dict.filler.ctaCard}
                </button>

                <pre
                  dir={lang === "ar" ? "rtl" : "ltr"}
                  className="mt-4 max-h-[46vh] overflow-y-auto scroll-moroccan whitespace-pre-wrap rounded-xl border border-border bg-muted/30 p-5 text-[13px] leading-8 font-sans text-start"
                >
                  {tpl[lang]}
                </pre>
                {/* Hidden print sheet — the only thing visible to the print/PDF engine. */}
                <div id="epdp-print" dir={lang === "ar" ? "rtl" : "ltr"} className="epdp-print">
                  {tpl[lang]}
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-4 space-y-5">
                <DetailBlock icon={<ListChecks className="h-4 w-4" />} title={dict.services.requiredInfo}>
                  <ul className="space-y-1.5">
                    {(doc.fields?.[locale] ?? []).map((f, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
                <DestinationBlock doc={doc} />
              </TabsContent>
            </Tabs>
          ) : (
            <div className="mt-5 space-y-5">
              <p className="rounded-xl border border-gold/40 bg-accent/60 p-4 text-xs leading-6 text-foreground/80">
                {dict.services.note}
              </p>
              <DestinationBlock doc={doc} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DestinationBlock({ doc }: { doc: ResolvedDocument }) {
  const { dict, locale } = useI18n();
  const authority = doc.authority ? getLink(doc.authority) : null;
  return (
    <div className="space-y-5">
      <DetailBlock icon={<MapPin className="h-4 w-4" />} title={dict.services.destination}>
        <p className="text-sm leading-6 text-muted-foreground">{doc.where[locale]}</p>
      </DetailBlock>
      {authority && (
        <DetailBlock icon={<ExternalLink className="h-4 w-4" />} title={dict.services.officialSource}>
          <a
            href={authority.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-3 py-2 text-sm font-bold text-primary hover:bg-primary/10"
          >
            <Landmark className="h-4 w-4" />
            {authority.name[locale]}
            <span className="text-[11px] font-semibold text-muted-foreground" dir="ltr">
              ({authority.domain})
            </span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </DetailBlock>
      )}
    </div>
  );
}

function DetailBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
        <span className="text-primary">{icon}</span>
        {title}
      </h4>
      {children}
    </div>
  );
}
