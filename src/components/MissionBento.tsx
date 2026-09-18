"use client";

import { ShieldCheck, Cpu, Database, Zap, Layers, Sparkles, Check } from "lucide-react";

export default function MissionBento() {
  return (
    <section className="relative py-20 md:py-28 bg-[#05070E] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 size-[500px] rounded-full bg-[#0066FF]/10 blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Tag & Main Display Statement */}
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066FF] font-semibold">
            ● SOVEREIGN ENTERPRISE METHOD
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.2]">
            An autonomous intelligence architecture dedicated to building <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#0066FF]">private, faster, and deterministic</span> enterprises.
          </h2>
        </div>

        {/* 4-Card Asymmetric Bento Row (Direct Pinterest Reference) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Capability Pill Tags + Sector Count */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A0E1A]/90 p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-[#10172A]">
            <div>
              <div className="flex flex-wrap gap-2">
                {['Air-Gapped', 'Deterministic', '200B LLM', 'Turnkey', 'Local RAG'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[0.68rem] text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-5">
              <span className="font-mono text-xs uppercase text-[#94A3B8]">Operating Suites</span>
              <div className="mt-1 text-4xl font-extrabold text-white tracking-tight">21+</div>
              <p className="mt-1 text-xs text-[#94A3B8]">Pre-calibrated industry verticals</p>
            </div>
          </div>

          {/* Card 2: Solid Vibrant Lime Card (Signature High-Contrast Focal Point) */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#D4FF00] p-7 text-[#05070E] shadow-[0_0_45px_rgba(212,255,0,0.35)] transition-all duration-300 hover:scale-[1.02]">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#05070E]/75">
                  Data Sovereignty
                </span>
                <ShieldCheck className="size-5 text-[#05070E]" />
              </div>
              <div className="mt-3 text-5xl font-black tracking-tight text-[#05070E]">
                100%
              </div>
            </div>
            <div className="mt-10 border-t border-[#05070E]/20 pt-5">
              <p className="text-xs font-bold leading-relaxed text-[#05070E]">
                Zero bytes egress to public clouds. Your documents, customer records, and IP remain strictly behind your physical perimeter.
              </p>
            </div>
          </div>

          {/* Card 3: Deep Cobalt Elevation Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#0066FF]/40 bg-gradient-to-b from-[#131B2E] to-[#0A0E1A] p-7 backdrop-blur-xl shadow-[0_0_35px_rgba(0,102,255,0.2)] transition-all duration-300 hover:border-[#0066FF]">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase text-[#0066FF]">
                  Workflow Automation
                </span>
                <Sparkles className="size-4 text-[#D4FF00]" />
              </div>
              <div className="mt-3 text-5xl font-black tracking-tight text-white">
                70–80%
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-5">
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Autonomous cognitive labor executed without human staff triage across paperwork, CAD verification, and dispatch.
              </p>
            </div>
          </div>

          {/* Card 4: Minimalist Dark Asset Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A0E1A]/90 p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-[#10172A]">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-[#94A3B8]">
                  Recurring Token Fees
                </span>
                <Zap className="size-4 text-[#0066FF]" />
              </div>
              <div className="mt-3 text-5xl font-black tracking-tight text-white">
                zsh
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-5">
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                A fixed enterprise hardware asset. Run infinite inference loops 24/7/365 with zero monthly API billing surprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}