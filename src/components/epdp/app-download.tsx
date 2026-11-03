"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageHeader } from "./page-header";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Download,
  Github,
  ShieldAlert,
  BadgeCheck,
  Fingerprint,
  QrCode,
  Maximize2,
  RefreshCw,
  Palette,
  ExternalLink,
} from "lucide-react";

const PLATFORM_APK = "https://epdp.pages.dev/EPDP.apk";
const GITHUB_APK = "https://github.com/tarikchouika/EPDP/releases/latest/download/EPDP.apk";

const featureIcons = [Maximize2, RefreshCw, Palette];

/** /app — Android app download + install guide (Play Protect bypass included). */
export function AppDownload() {
  const { dict } = useI18n();

  return (
    <>
      <PageHeader
        icon={<Smartphone className="h-7 w-7" />}
        title={dict.nav.androidApp}
        subtitle={dict.app.subtitle}
        crumbs={[{ label: dict.nav.androidApp }]}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* ---------- Download card ---------- */}
        <section className="overflow-hidden rounded-3xl border border-gold/40 bg-card shadow-sm">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
            <div className="mx-auto flex flex-col items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/app-icon.png"
                alt="EPDP"
                width={112}
                height={112}
                className="h-28 w-28 rounded-3xl shadow-md"
              />
              <span className="rounded-full border border-gold bg-accent px-3 py-1 text-[11px] font-bold text-primary">
                {dict.app.badge}
              </span>
            </div>

            <div className="min-w-0 text-center lg:text-start">
              <h1 className="font-display text-xl font-bold sm:text-2xl">{dict.app.downloadTitle}</h1>
              <p className="mt-2 text-[13px] leading-7 text-muted-foreground sm:text-sm">
                {dict.app.intro}
              </p>

              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a href={PLATFORM_APK} download className="w-full sm:w-auto">
                  <Button size="lg" className="w-full px-6 font-bold sm:w-auto">
                    <Download className="h-4 w-4" />
                    {dict.app.downloadPrimary}
                  </Button>
                </a>
                <a href={GITHUB_APK} className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-gold px-6 font-bold sm:w-auto">
                    <Github className="h-4 w-4" />
                    {dict.app.downloadAlt}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </Button>
                </a>
              </div>

              <p className="mt-4 text-xs font-semibold text-muted-foreground">
                {dict.app.sizeNote} · {dict.app.autoBuild}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Features ---------- */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold sm:text-xl">{dict.app.featuresTitle}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {dict.app.features.map((f, i) => {
              const Icon = featureIcons[i] ?? Maximize2;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold">{f.t}</h3>
                  <p className="mt-1.5 text-xs leading-6 text-muted-foreground">{f.d}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- Install steps ---------- */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold sm:text-xl">{dict.app.stepsTitle}</h2>
          <p className="mt-2 text-[13px] leading-7 text-muted-foreground sm:text-sm">
            {dict.app.stepsIntro}
          </p>

          <ol className="mt-6 space-y-4">
            {dict.app.steps.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold">{s.t}</h3>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Play Protect callout ---------- */}
        <section className="mt-10 rounded-2xl border-2 border-gold/60 bg-accent/60 p-6 sm:p-8">
          <h2 className="flex items-center gap-2.5 font-display text-base font-bold text-primary sm:text-lg">
            <ShieldAlert className="h-5 w-5 shrink-0 text-gold" />
            {dict.app.protectTitle}
          </h2>
          <p className="mt-3 text-[13px] leading-7 text-muted-foreground sm:text-sm">
            {dict.app.protectBody}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-gold/50 bg-card p-4">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-bold text-primary">
                1
              </span>
              <p className="text-xs font-bold leading-6">{dict.app.protectStep1}</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gold/50 bg-card p-4">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-bold text-primary">
                2
              </span>
              <p className="text-xs font-bold leading-6">{dict.app.protectStep2}</p>
            </div>
          </div>
        </section>

        {/* ---------- Certificate + QR ---------- */}
        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto]">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
            <h2 className="flex items-center gap-2.5 font-display text-base font-bold sm:text-lg">
              <Fingerprint className="h-5 w-5 shrink-0 text-gold" />
              {dict.app.certTitle}
            </h2>
            <p className="mt-3 text-[13px] leading-7 text-muted-foreground sm:text-sm">
              {dict.app.certBody}
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-xs font-bold">
                <BadgeCheck className="h-4 w-4 text-primary" />
                {dict.app.certOwner}
              </li>
              <li className="flex items-center gap-2 text-xs font-bold">
                <BadgeCheck className="h-4 w-4 text-primary" />
                {dict.app.certValidity}
              </li>
            </ul>
            <p className="mt-4 text-[11px] leading-5 text-muted-foreground">{dict.app.versionNote}</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-card p-6 text-center shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-qr.png"
              alt={dict.app.qrTitle}
              width={150}
              height={150}
              className="h-[150px] w-[150px] rounded-xl border border-border/60 bg-white p-2"
            />
            <h3 className="mt-4 flex items-center gap-2 text-sm font-bold">
              <QrCode className="h-4 w-4 text-gold" />
              {dict.app.qrTitle}
            </h3>
            <p className="mt-1.5 max-w-[220px] text-xs leading-6 text-muted-foreground">
              {dict.app.qrBody}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
