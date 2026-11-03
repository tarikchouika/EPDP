"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageHeader } from "./page-header";
import { Catalog } from "./catalog";
import { FileText } from "lucide-react";

/** /forms — the full catalog page. */
export function FormsPage() {
  const { dict } = useI18n();
  return (
    <>
      <PageHeader
        icon={<FileText className="h-7 w-7" />}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
      />
      <Catalog />
    </>
  );
}
