"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { allDocuments } from "@/lib/data/registry";
import { categories, type CategoryId } from "@/lib/data/categories";
import { PageHeader } from "./page-header";
import { Catalog, catIcons } from "./catalog";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** /forms/[cat] — a dedicated page for one administrative category. */
export function CategoryPage({ catId }: { catId: CategoryId }) {
  const { dict, locale } = useI18n();
  const cat = categories.find((c) => c.id === catId);
  if (!cat) return null;
  const Icon = catIcons[catId];
  const count = allDocuments.filter((d) => d.cat === catId).length;

  return (
    <>
      <PageHeader
        icon={<Icon className="h-7 w-7" />}
        title={cat.name[locale]}
        subtitle={cat.desc[locale]}
        crumbs={[{ label: dict.nav.services, href: "/forms" }]}
      >
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-accent px-3 py-1.5 text-xs font-bold text-primary">
            <FileText className="h-3.5 w-3.5 text-gold" />
            {dict.pages.docsCount.replace("{n}", String(count))}
          </span>
          <Link href="/forms">
            <Button variant="outline" size="sm" className="border-gold font-bold">
              {dict.services.all}
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </Button>
          </Link>
        </div>
      </PageHeader>
      <Catalog fixedCat={catId} />
    </>
  );
}
