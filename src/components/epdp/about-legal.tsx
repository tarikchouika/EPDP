"use client";

import { useI18n } from "@/lib/i18n/context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Target, Gift, Users, Scale, ScrollText } from "lucide-react";

const valueIcons = [Target, Gift, Users];

export function About() {
  const { dict } = useI18n();
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              {dict.about.title}
            </h2>
            <div className="mt-6 space-y-4">
              {dict.about.paragraphs.map((p, i) => (
                <p key={i} className="text-sm sm:text-[15px] leading-8 text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {dict.about.values.map((v, i) => {
              const Icon = valueIcons[i] ?? Target;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-sm">{v.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Legal() {
  const { dict } = useI18n();
  return (
    <section id="legal" className="border-t border-border/60 bg-muted/30 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-1.5 text-xs font-bold text-primary">
            <Scale className="h-3.5 w-3.5 text-gold" />
            {dict.legal.updated}
          </span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold">{dict.legal.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{dict.legal.subtitle}</p>
        </div>

        <div className="mt-10 space-y-4">
          {dict.legal.docs.map((doc, i) => (
            <details
              key={doc.id}
              className="group rounded-2xl border border-border/80 bg-card shadow-sm open:border-gold/50"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3 font-bold text-sm sm:text-[15px]">
                  <ScrollText className="h-5 w-5 shrink-0 text-gold" />
                  {doc.title}
                </span>
                <span className="text-muted-foreground transition-transform group-open:rotate-45 text-xl leading-none select-none">
                  +
                </span>
              </summary>
              <div className="border-t border-border/60 px-5 py-5 sm:px-6">
                {doc.sections.map((sec, j) => (
                  <div key={j} className="mb-5 last:mb-0">
                    <h4 className="mb-1.5 text-sm font-bold text-primary">{sec.h}</h4>
                    {sec.body.map((p, k) => (
                      <p key={k} className="mb-2 text-[13px] leading-7 text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
