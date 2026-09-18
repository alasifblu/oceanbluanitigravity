"use client";

import { ArrowRight, ShieldCheck, Cpu, Zap, Lock, Database } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-grid-pattern">
      {/* Radial Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow"></div>
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-[#0066FF]/18 blur-[130px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Category Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 px-4 py-1.5 text-xs text-[#0066FF] backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
          <span className="font-mono uppercase tracking-wider font-semibold text-[0.72rem]">
            Enterprise Intelligence Infrastructure • Air-Gapped & Deterministic
          </span>
        </div>

        {/* H1 Headline with Editorial Accent */}
        <h1 className="mt-7 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]">
          Autonomous Intelligence for the Enterprise. <br />
          <span className="italic font-serif text-[#0066FF] font-normal">Delivered in a Box.</span>
        </h1>

        {/* H2 Subheadline */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#94A3B8] leading-relaxed text-pretty">
          Transform traditional enterprise operations with an on-premise AI appliance that thinks, decides, drafts, and executes autonomously. Plug into your local network, train on your private operational data, and automate 70–80% of your workflow—without a single byte leaving your premises.
        </p>

        {/* Dual Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#terminal"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4FF00] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#05070E] transition-all hover:bg-[#bce400] hover:shadow-[0_0_35px_rgba(212,255,0,0.4)]"
          >
            <span>Deploy Blu Box in Your Enterprise</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#sectors"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Explore 21-Sector Suites
          </a>
        </div>

        {/* Micro Feature Proof Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#D4FF00]" />
            <span>Zero Cloud Egress</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="size-4 text-[#0066FF]" />
            <span>Up to 200B Params</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-[#FF5500]" />
            <span>Plug, Train & Relax</span>
          </div>
        </div>

        {/* SIGNATURE HORIZONTAL 3D PERSPECTIVE CAROUSEL RIBBON (from Pinterest reference) */}
        <HeroCarousel />

        {/* Institutional Trust Ticker */}
        <div className="mt-16 w-full border-y border-white/10 py-5 text-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-[#94A3B8]">
            ENGINEERED FOR REAL ESTATE CONGLOMERATES • HEALTHCARE NETWORKS • HIGHER EDUCATION • LOGISTICS • STRATEGIC INSTITUTIONS
          </p>
        </div>
      </div>
    </section>
  );
}