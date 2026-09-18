"use client";

import { AGITATION_COMPARISON } from "@/lib/data";
import { AlertTriangle, Wrench, ShieldCheck, Check } from "lucide-react";

export default function AgitationGrid() {
  return (
    <section id="dilemma" className="relative py-24 md:py-32 bg-[#05070E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-400 font-mono uppercase tracking-wider">
            <AlertTriangle className="size-3.5" />
            <span>The Hidden Operational Bleed</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Why 94% of Enterprise AI Deployments Fail in Production.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Building autonomous business workflows using public cloud APIs or brittle developer scripts creates an unmanageable matrix of runaway token bills, silent system crashes, and severe IP exposure liabilities.
          </p>
        </div>

        {/* 3-Column Agitation Comparison Bento Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {AGITATION_COMPARISON.map((col, idx) => {
            const isSovereign = col.highlighted;

            return (
              <div
                key={col.category}
                className={`relative flex flex-col justify-between rounded-2xl p-7 md:p-8 backdrop-blur-xl transition-all duration-300 ${
                  isSovereign
                    ? "border-2 border-[#D4FF00]/50 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] shadow-[0_0_50px_-10px_rgba(212,255,0,0.2)]"
                    : "border border-white/10 bg-[#0A0E1A]/60 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-5">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {col.category}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#94A3B8]">{col.subtitle}</p>
                    </div>
                    <span className={`rounded-full border px-2.5 py-1 text-[0.68rem] font-mono font-bold uppercase ${col.badgeColor}`}>
                      {col.badge}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <div className="mt-6 flex flex-col gap-6">
                    {col.points.map((point) => (
                      <div key={point.title} className="flex items-start gap-3">
                        <div
                          className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full ${
                            isSovereign
                              ? "bg-[#D4FF00] text-[#05070E]"
                              : idx === 0
                              ? "bg-red-500/20 text-red-400"
                              : "bg-amber-500/20 text-amber-400"
                          }`}
                        >
                          {isSovereign ? (
                            <Check className="size-3 stroke-[3]" />
                          ) : idx === 0 ? (
                            <AlertTriangle className="size-3" />
                          ) : (
                            <Wrench className="size-3" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white tracking-tight">
                            {point.title}
                          </h4>
                          <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                            {point.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Callout */}
                {isSovereign && (
                  <div className="mt-8 rounded-xl border border-[#D4FF00]/30 bg-[#D4FF00]/5 p-3.5 text-center">
                    <p className="font-mono text-xs font-semibold text-[#D4FF00]">
                      Fixed Hardware Asset • Unlimited 24/7 Operations
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}