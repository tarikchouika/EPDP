"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { categories, type CategoryId } from "@/lib/data/categories";
import { allDocuments, getTemplate, type DocumentItem } from "@/lib/data/registry";
import { getLink } from "@/lib/data/official-links";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  FileX, Sparkles,
} from "lucide-react";

const catIcons: Record<CategoryId, React.ComponentType<{ className?: string }>> = {
  demandes: Mail,
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

function downloadWord(title: string, content: string, rtl: boolean) {
  const escaped = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const html = `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>${title}</title></head><body dir="${rtl ? "rtl" : "ltr"}" style="font-family:'Traditional Arabic','Sakkal Majalla','Times New Roman',serif;font-size:14pt;line-height:2.1;white-space:pre-wrap;">${escaped.replace(/\n/g, "<br>")}</body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.replace(/[\\/:*?"<>|]/g, "-")}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function Services() {
  const { dict, locale } = useI18n();
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CategoryId | "all" | "popular">("all");
  const [selected, setSelected] = useState<DocumentItem | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      setQuery(detail);
    };
    window.addEventListener("epdp-search", handler);
    return () => window.removeEventListener("epdp-search", handler);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allDocuments.filter((d) => {
      if (cat === "popular" && !d.popular) return false;
      if (cat !== "all" && cat !== "popular" && d.cat !== cat) return false;
      if (!q) return true;
      const hay = [
        d.title.ar,
        d.title.fr,
        ...d.keywords,
        d.desc[locale],
        d.desc.ar,
        d.desc.fr,
        d.desc.en,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, cat, locale]);

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

        {/* Search + filters */}
        <div className="mt-10">
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute top-1/2 start-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={dict.services.search}
              aria-label={dict.services.search}
              className="h-12 rounded-xl bg-card ps-10 pe-10 text-sm shadow-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label={dict.common.close}
                className="absolute top-1/2 end-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <FilterChip active={cat === "all"} onClick={() => setCat("all")}>
              {dict.services.all}
            </FilterChip>
            <FilterChip active={cat === "popular"} onClick={() => setCat("popular")} star>
              {dict.services.popular}
            </FilterChip>
            {categories.map((c) => {
              const Icon = catIcons[c.id];
              return (
                <FilterChip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)} icon={<Icon className="h-3.5 w-3.5" />}>
                  {locale === "fr" ? c.name.fr : c.name.ar}
                </FilterChip>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs font-bold text-muted-foreground" role="status">
            {filtered.length} {dict.services.results}
          </p>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <Search className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <p className="mt-3 font-bold">{dict.services.noResults}</p>
            <p className="mt-1 text-xs text-muted-foreground">{dict.services.noResultsHint}</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((doc) => (
              <DocCard key={doc.id} doc={doc} onOpen={() => setSelected(doc)} />
            ))}
          </div>
        )}
      </div>

      <DocDialog key={selected?.id ?? "none"} doc={selected} onClose={() => setSelected(null)} />
    </section>
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
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
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

function DocCard({ doc, onOpen }: { doc: DocumentItem; onOpen: () => void }) {
  const { dict, locale } = useI18n();
  const Icon = catIcons[doc.cat];
  const hasTemplate = Boolean(getTemplate(doc.templateId));
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md">
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

      <h3 className="mt-3 font-bold text-[15px] leading-6 text-foreground" dir="rtl">
        {doc.title.ar}
      </h3>
      <p className="text-xs font-semibold text-muted-foreground" dir="ltr">
        {doc.title.fr}
      </p>
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

function DocDialog({ doc, onClose }: { doc: DocumentItem | null; onClose: () => void }) {
  const { dict, locale } = useI18n();
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);
  const [lang, setLang] = useState<"ar" | "fr">("ar");

  if (!doc) return null;
  const tpl = getTemplate(doc.templateId);
  const authority = doc.authority ? getLink(doc.authority) : null;

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
          <div className="flex flex-wrap items-center gap-2" dir="rtl">
            <DialogTitle className="font-display text-lg font-bold leading-8">
              {doc.title.ar}
            </DialogTitle>
          </div>
          <DialogDescription className="text-sm font-semibold" dir="ltr">
            {doc.title.fr}
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
                  <div className="inline-flex rounded-lg border border-border bg-card p-1">
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
                  className={`mt-4 max-h-[46vh] overflow-y-auto scroll-moroccan whitespace-pre-wrap rounded-xl border border-border bg-muted/30 p-5 text-[13px] leading-8 font-sans ${
                    lang === "ar" ? "text-start" : "text-start"
                  }`}
                >
                  {tpl[lang]}
                </pre>
              </TabsContent>

              <TabsContent value="details" className="mt-4 space-y-5">
                <DetailBlock icon={<ListChecks className="h-4 w-4" />} title={dict.services.requiredInfo}>
                  <ul className="space-y-1.5">
                    {(doc.fields?.[locale === "fr" ? "fr" : locale === "ar" ? "ar" : "en"] ?? doc.fields?.ar ?? []).map((f, i) => (
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

function DestinationBlock({ doc }: { doc: DocumentItem }) {
  const { dict, locale } = useI18n();
  const authority = doc.authority ? getLink(doc.authority) : null;
  return (
    <div className="space-y-5">
      <DetailBlock icon={<MapPin className="h-4 w-4" />} title={dict.services.destination}>
        <p className="text-sm text-muted-foreground" dir="rtl">{doc.where.ar}</p>
        <p className="text-xs text-muted-foreground/80" dir="ltr">{doc.where.fr}</p>
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
            {locale === "fr" ? authority.name.fr : authority.name.ar}
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
