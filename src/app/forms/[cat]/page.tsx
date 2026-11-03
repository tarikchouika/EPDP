import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/lib/data/categories";
import { CategoryPage } from "@/components/epdp/category-page";

export function generateStaticParams() {
  return categories.map((c) => ({ cat: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cat: string }>;
}): Promise<Metadata> {
  const { cat } = await params;
  const category = categories.find((c) => c.id === cat);
  if (!category) return { title: "404" };
  return {
    title: `${category.name.ar} — ${category.name.fr}`,
    description: `${category.desc.ar} | ${category.desc.fr}`,
    alternates: { canonical: `/forms/${category.id}` },
  };
}

export default async function CategoryRoute({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  const category = categories.find((c) => c.id === cat);
  if (!category) notFound();
  return <CategoryPage catId={category.id} />;
}
