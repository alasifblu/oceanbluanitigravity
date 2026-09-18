"use client";

import { ArrowRight, ShieldCheck, Cpu, Zap, Lock, Database } from "lucide-react";
import TelemetryBubbles from "./TelemetryBubbles";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-grid-pattern">
      {/* Radial Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow"></div>
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-[#0066FF]/15 blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: High-Voltage Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 px-3.5 py-1.5 text-xs text-[#0066FF] backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
              <span className="font-mono uppercase tracking-wider font-semibold text-[0.72rem]">
                Enterprise Intelligence Infrastructure • Air-Gapped & Deterministic
              </span>
            </div>

            {/* H1 Headline with Editorial Accent */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Autonomous Intelligence for the Enterprise. <br />
              <span className="italic font-serif text-[#0066FF] font-normal">Delivered in a Box.</span>
            </h1>

            {/* H2 Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              Transform traditional enterprise operations with an on-premise AI appliance that thinks, decides, drafts, and executes autonomously. Plug into your local network, train on your private operational data, and automate 70–80% of your workflow—without a single byte leaving your premises.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#terminal"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4FF00] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#05070E] transition-all hover:bg-[#bce400] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)]"
              >
                <span>Deploy Blu Box in Your Enterprise</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#sectors"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Explore Sector Suites
              </a>
            </div>

            {/* Micro Feature Proof Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2 font-mono">
                <ShieldCheck className="size-4 text-[#D4FF00]" />
                <span>Zero Cloud Egress</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Cpu className="size-4 text-[#0066FF]" />
                <span>Up to 200B Params</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Zap className="size-4 text-[#FF5500]" />
                <span>Plug, Train & Relax</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Hardware Representation & Live Telemetry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* The Blu Box Visual Showcase Chassis */}
            <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-6 shadow-[0_0_60px_-15px_rgba(0,102,255,0.4)] backdrop-blur-xl mb-6">
              {/* Chassis Top Bar with Indicators */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                    BLU BOX™ UNIT // CHASSIS 01
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[0.68rem] text-[#0066FF]">
                  <Lock className="size-3" />
                  <span>AIR-GAPPED</span>
                </div>
              </div>

              {/* Chassis Front Face Graphic */}
              <div className="my-5 rounded-xl border border-white/5 bg-[#05070E] p-4 flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-[#0066FF]/20 blur-2xl"></div>
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] text-[#94A3B8]">NEURAL ACCELERATOR</span>
                  <span className="font-mono text-[0.7rem] text-[#D4FF00]">100% OPERATIONAL</span>
                </div>

                {/* Heat Fin Illumination Bars */}
                <div className="grid grid-cols-6 gap-1.5 py-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-12 rounded bg-gradient-to-t from-[#0066FF]/40 to-[#0066FF] animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[0.7rem] font-mono text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    <Database className="size-3 text-[#0066FF]" />
                    <span>LOCAL RAG: 4.2 TB</span>
                  </div>
                  <span className="text-white font-medium">LATENCY: &lt; 0.4ms</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="text-center text-[0.72rem] font-mono text-[#94A3B8]">
                Proprietary Agent OS • Decoupled Swappable Model Architecture
              </div>
            </div>

            {/* Floating Live Telemetry Cards */}
            <TelemetryBubbles />
          </div>
        </div>

        {/* Institutional Trust Banner */}
        <div className="mt-20 border-y border-white/10 py-6 text-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-[#94A3B8]">
            ENGINEERED FOR REAL ESTATE CONGLOMERATES • HEALTHCARE NETWORKS • HIGHER EDUCATION • LOGISTICS • STRATEGIC INSTITUTIONS
          </p>
        </div>
      </div>
    </section>
  );
}