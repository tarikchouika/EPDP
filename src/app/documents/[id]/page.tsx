import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocument, allDocuments } from "@/lib/data/registry";
import { categories } from "@/lib/data/categories";
import { DocumentView } from "@/components/epdp/document-view";

export function generateStaticParams() {
  return allDocuments.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doc = getDocument(id);
  if (!doc) return { title: "404" };
  const category = categories.find((c) => c.id === doc.cat);
  return {
    title: `${doc.title.ar} — ${doc.title.fr}`,
    description: doc.desc.ar,
    alternates: { canonical: `/documents/${doc.id}` },
    keywords: [...doc.keywords, doc.title.fr, category?.name.fr ?? ""].filter(Boolean),
  };
}

export default async function DocumentRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doc = getDocument(id);
  if (!doc) notFound();
  return <DocumentView doc={doc} />;
}
