"use client";

import { BLU_BOX_PILLARS, BLU_BOX_MODELS } from "@/lib/data";
import { Cpu, Zap, ShieldCheck, Box, Server, Sparkles, CheckCircle2 } from "lucide-react";

export default function BluBoxShowcase() {
  return (
    <section id="blu-box" className="relative py-24 md:py-32 bg-[#05070E] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 size-[600px] rounded-full bg-[#0066FF]/10 blur-[130px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 px-3 py-1 text-xs text-[#0066FF] font-mono uppercase tracking-wider">
            <Box className="size-3.5" />
            <span>On-Premise Neural Hardware & Agent OS</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            A System Intelligent Entity. <br />
            <span className="italic font-serif text-[#0066FF] font-normal">Engineered for Your Enterprise.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Blu Box is not just a server; it is an autonomous corporate intelligence officer. It ingests your company’s standard operating procedures, learns your institutional knowledge, and executes complex cognitive labor independently.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BLU_BOX_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0A0E1A]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#0066FF]/40 hover:bg-[#10172A] hover:shadow-[0_0_30px_rgba(0,102,255,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between  pb-4">
                  <span className="font-mono text-2xl font-black text-[#0066FF]">
                    {pillar.step}
                  </span>
                  <Sparkles className="size-4 text-[#D4FF00] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-1 font-mono text-[0.68rem] text-[#D4FF00]">
                  {pillar.specs}
                </p>
                <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Factors Subsection */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066FF]">
              CHASSIS CONFIGURATIONS
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Tailored to Your Institutional Scale
            </h3>
            <p className="mt-2 text-sm text-[#94A3B8]">
              From high-growth commercial firms to air-gapped defense infrastructure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {BLU_BOX_MODELS.map((model) => {
              const isHighlight = model.badge;
              return (
                <div
                  key={model.name}
                  className={`relative flex flex-col justify-between rounded-2xl p-7 md:p-8 backdrop-blur-xl transition-all duration-300 ${
                    isHighlight
                      ? "border-2 border-[#0066FF] bg-gradient-to-b from-[#10172A] to-[#0A0E1A] shadow-[0_0_40px_-10px_rgba(0,102,255,0.3)]"
                      : "border border-white/10 bg-[#0A0E1A]/60 hover:border-white/20"
                  }`}
                >
                  {isHighlight && (
                    <span className="absolute -top-3 right-6 rounded-full bg-[#0066FF] px-3 py-0.5 font-mono text-[0.65rem] font-bold uppercase text-white shadow-[0_0_15px_rgba(0,102,255,0.8)]">
                      {model.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
                      <Server className="size-4 text-[#0066FF]" />
                      <span>{model.tier}</span>
                    </div>

                    <h4 className="mt-2 text-xl font-bold text-white">{model.name}</h4>
                    <p className="mt-1 font-mono text-xs font-semibold text-[#D4FF00]">
                      {model.capacity}
                    </p>
                    <p className="mt-3 text-xs text-[#94A3B8]  pb-4">
                      Target: {model.target}
                    </p>

                    {/* Features List */}
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {model.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                          <CheckCircle2 className="size-3.5 text-[#0066FF] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <a
                      href="#terminal"
                      className="block w-full text-center rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-white transition-all hover:border-[#0066FF] hover:bg-[#0066FF]/10"
                    >
                      Inquire About {model.name}
                    </a>
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