"use client";

import { motion } from "framer-motion";
import { Clock, Lightbulb, ShieldCheck, Zap, ArrowUpRight, Cpu } from "lucide-react";

export default function MissionBento() {
  const logos = [
    { name: "Bangladesh Railway", code: "BR-DPP" },
    { name: "NAAAS Urban OS", code: "NAAAS-CORE" },
    { name: "NSDA Bangladesh", code: "NSDA-CERT" },
    { name: "a2i Smart Innovation", code: "a2i-GOV" },
    { name: "UNICEF Technovation", code: "UNICEF-TECH" },
    { name: "ISO/IEC 27001", code: "SEC-COMPLIANT" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#FFFFFF] text-[#05070E]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header with Aeline Inline Badge Icons */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Label */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#64748B]">
              • ABOUT US
            </span>
          </div>

          {/* Right Display Statement with Structured, Non-Overlapping Typography */}
          <div className="lg:col-span-9 flex flex-col gap-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#05070E] leading-[1.15]">
              Engineering Sovereign Autonomy for Critical Enterprise Industries.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Traditional conglomerates, healthcare networks, and public logistics operators cannot surrender proprietary records to foreign cloud LLMs. OceanBlu architects deterministic on-premise compute that keeps your institutional intelligence completely private, air-gapped, and permanently owned.
            </p>
          </div>
        </div>

        {/* 4-CARD BENTO ROW (Exact Aeline Layout) */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Pill Cloud & Sectors Metric */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#F8FAFC] border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex flex-wrap gap-2">
                {["Sovereign", "Deterministic", "Air-Gapped", "On-Premise", "200B LLM"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-[#475569] shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 pt-4 border-t border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Operating Suites
              </span>
              <div className="mt-1 text-4xl font-black text-[#05070E]">21+</div>
              <p className="mt-1 text-xs text-[#64748B]">Pre-calibrated industry solutions</p>
            </div>
          </div>

          {/* Card 2: Solid Chartreuse Lime Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#D4FF00] p-7 text-[#05070E] shadow-md hover:scale-[1.02] transition-transform">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#05070E]/75">
                Commitment to measurable
              </span>
              <div className="mt-3 text-5xl font-black tracking-tight text-[#05070E]">
                100%
              </div>
            </div>
            <div className="mt-10 pt-4 border-t border-[#05070E]/20">
              <p className="text-xs font-bold leading-relaxed text-[#05070E]">
                Collaborating with leading AI and on-premise hardware technology providers. Zero bytes egress to third-party public clouds.
              </p>
            </div>
          </div>

          {/* Card 3: Deep Tech Image Card (Blu Solar / Clean Climate Tech) */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0A0E1A] p-7 text-white shadow-md flex flex-col justify-between min-h-[260px] group">
            <img
              src="/assets/blu_solar_system.jpg"
              alt="Blu Solar Climate Tech"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/40 to-transparent"></div>
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D4FF00] font-bold">
                CLIMATE & HARDWARE
              </span>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/20">
              <div className="text-3xl font-black text-white">120+</div>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Microservices executed locally on sovereign air-gapped appliances.
              </p>
            </div>
          </div>

          {/* Card 4: Light Data Points Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#F8FAFC] border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Data Points Analyzed
              </span>
              <div className="mt-2 text-4xl font-black text-[#05070E]">520k+</div>
            </div>
            <div className="mt-10 pt-4 border-t border-slate-200">
              <p className="text-xs text-[#64748B] leading-relaxed">
                Analyzed monthly on-premise to automate 70–80% of repetitive enterprise paperwork and dispatch labor.
              </p>
            </div>
          </div>
        </div>

        {/* ECOSYSTEM / PARTNER LOGO BAR (Exact Aeline Logo Strip) */}
        <div className="mt-20 pt-10 border-t border-slate-200">
          <p className="text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#94A3B8] mb-8">
            TRUSTED ARCHITECTURES & NATIONAL PARTNERSHIPS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {logos.map((logo) => (
              <div key={logo.code} className="flex items-center gap-2 group cursor-default">
                <span className="size-2 rounded-full bg-[#0066FF] group-hover:bg-[#D4FF00] transition-colors"></span>
                <span className="font-mono text-xs font-bold tracking-wider text-[#475569] group-hover:text-[#05070E]">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}