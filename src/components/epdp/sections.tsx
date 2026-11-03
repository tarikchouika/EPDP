"use client";

import { useI18n } from "@/lib/i18n/context";
import { faqItems } from "@/lib/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircleQuestion, Search, Download, MapPin } from "lucide-react";

const stepIcons = [Search, MessageCircleQuestion, Download, MapPin];

export function HowItWorks() {
  const { dict } = useI18n();
  return (
    <section id="how" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            {dict.how.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {dict.how.subtitle}
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.how.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Search;
            return (
              <li key={i} className="relative rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <span className="absolute -top-4 start-6 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-base font-bold text-primary-foreground shadow-md">
                  {i + 1}
                </span>
                <Icon className="mt-2 h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="mt-3 font-display font-bold">{step.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/** FAQ accordion (JSON-LD included) — composed inside pages under a PageHeader. */
export function FaqAccordion() {
  const { locale } = useI18n();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-1.5 text-xs font-bold text-primary">
          <HelpCircle className="h-3.5 w-3.5 text-gold" />
          FAQ
        </span>
      </div>
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {faqItems.map((item, i) => (
          <AccordionItem key={item.id} value={item.id} className="border-border/70">
            <AccordionTrigger className="py-4 text-start text-sm font-bold hover:text-primary hover:no-underline sm:text-[15px]">
              <span className="flex items-center gap-2.5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-[11px] font-bold text-primary">
                  {i + 1}
                </span>
                {item.q[locale]}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm leading-7 text-muted-foreground">
              {item.a[locale]}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
