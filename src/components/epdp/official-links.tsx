"use client";

import { useI18n } from "@/lib/i18n/context";
import {
  officialLinks,
  getLink,
  resolvedLinkCategories,
  type LinkCategoryId,
} from "@/lib/data/official-links";
import type { L } from "@/lib/data/categories";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, ShieldCheck, Landmark, Copy, Globe } from "lucide-react";

const catIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  gov: Landmark,
  digital: Globe,
  social: ShieldCheck,
  employment: Globe,
  economy: Landmark,
  utilities: Globe,
};

/**
 * Official links directory — composed inside the /links and /portals pages.
 * `cats` narrows the listing to a subset of categories.
 */
export function OfficialLinksContent({ cats }: { cats?: LinkCategoryId[] }) {
  const { dict, locale } = useI18n();
  const list = cats
    ? resolvedLinkCategories.filter((c) => cats.includes(c.id))
    : resolvedLinkCategories;

  return (
    <div className="border-y border-border/60 bg-muted/30 bg-zellige py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-2 space-y-10">
          {list.map((cat) => {
            const links = officialLinks.filter((l) => l.cat === cat.id);
            if (!links.length) return null;
            return (
              <div key={cat.id}>
                <div className="mb-4 flex items-baseline justify-between gap-3 border-b border-border/70 pb-2">
                  <h2 className="font-display text-lg font-bold text-primary sm:text-xl">
                    {cat.name[locale]}
                  </h2>
                  <p className="shrink-0 text-xs font-bold text-muted-foreground">
                    {dict.links.count.replace("{n}", String(links.length))}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {links.map((link) => (
                    <LinkCard
                      key={link.id}
                      url={link.url}
                      domain={link.domain}
                      name={getLink(link.id)!.name}
                      desc={link.desc[locale]}
                      visitLabel={dict.links.visit}
                      official={dict.links.officialBadge}
                      copyUrl={dict.links.copyUrl}
                      copiedUrl={dict.links.copiedUrl}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs font-semibold text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          {dict.links.verifiedNote}
        </p>
      </div>
    </div>
  );
}

function LinkCard({
  url,
  domain,
  name,
  desc,
  visitLabel,
  official,
  copyUrl,
  copiedUrl,
}: {
  url: string;
  domain: string;
  name: L;
  desc: string;
  visitLabel: string;
  official: string;
  copyUrl: string;
  copiedUrl: string;
}) {
  const { locale } = useI18n();
  const { toast } = useToast();
  const displayName = name[locale];

  return (
    <article className="group flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-bold leading-6">{displayName}</h3>
        <Badge variant="outline" className="shrink-0 gap-1 border-primary/40 text-[10px] font-bold text-primary">
          <ShieldCheck className="h-3 w-3" />
          {official}
        </Badge>
      </div>
      <p className="mt-1.5 flex-1 text-xs leading-5 text-muted-foreground">{desc}</p>
      <p className="mt-2 text-[11px] font-bold text-gold" dir="ltr">{domain}</p>
      <div className="mt-4 flex items-center gap-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          <ExternalLink className="h-4 w-4" />
          {visitLabel}
        </a>
        <Button
          size="sm"
          variant="outline"
          className="h-9 w-9 p-0"
          aria-label={copyUrl}
          title={copyUrl}
          onClick={() => {
            navigator.clipboard
              .writeText(url)
              .then(() => toast({ description: copiedUrl }))
              .catch(() => {});
          }}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
