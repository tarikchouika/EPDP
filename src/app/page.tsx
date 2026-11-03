"use client";

import { Hero, Stats } from "@/components/epdp/hero";
import { CategoriesGrid, PopularDocs, HomeCta } from "@/components/epdp/home-sections";
import { HowItWorks } from "@/components/epdp/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CategoriesGrid />
      <PopularDocs />
      <HowItWorks />
      <HomeCta />
    </>
  );
}
