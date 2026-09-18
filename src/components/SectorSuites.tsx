"use client";

import { useState } from "react";
import { SECTOR_SUITES } from "@/lib/data";
import { Layers, Building2, UtensilsCrossed, Stethoscope, GraduationCap, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SectorSuites() {
  const [activeTab, setActiveTab] = useState(SECTOR_SUITES[0].id);

  const activeSector = SECTOR_SUITES.find((s) => s.id === activeTab) || SECTOR_SUITES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "real-estate":
        return <Building2 className="size-4" />;
      case "hospitality":
        return <UtensilsCrossed className="size-4" />;
      case "healthcare":
        return <Stethoscope className="size-4" />;
      case "education":
        return <GraduationCap className="size-4" />;
      case "logistics":
        return <Truck className="size-4" />;
      default:
        return <Layers className="size-4" />;
    }
  };

  return (
    <section id="sectors" className="relative py-24 md:py-32 border-b border-white/10 bg-[#05070E]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/10 px-3 py-1 text-xs text-[#D4FF00] font-mono uppercase tracking-wider">
            <Layers className="size-3.5" />
            <span>OceanBlu Tech • 21 Vertical Operating Suites</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Pre-Trained Intelligence for Your Exact Industry.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We don’t build generic chatbots. We deploy deep domain operating suites pre-calibrated to eliminate the specific structural bottlenecks of 21 core economic sectors.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {SECTOR_SUITES.map((sector) => {
            const isActive = sector.id === activeTab;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveTab(sector.id)}
                className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.5)]"
                    : "border border-white/10 bg-[#0A0E1A] text-[#94A3B8] hover:border-white/20 hover:text-white"
                }`}
              >
                {getIcon(sector.id)}
                <span>{sector.title.split(",")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Detailed Bento Card */}
        <div className="mt-8 rounded-3xl border border-white/15 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-8 md:p-12 backdrop-blur-2xl shadow-[0_0_50px_-15px_rgba(0,102,255,0.2)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Sector Details */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-3 font-mono text-xs text-[#0066FF]">
                <span className="rounded border border-[#0066FF]/30 bg-[#0066FF]/10 px-2.5 py-0.5 font-bold">
                  {activeSector.code}
                </span>
                <span>ENTERPRISE SPECIFICATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {activeSector.title}
              </h3>

              {/* Before vs After Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {/* Before: Manual Friction */}
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <span className="font-mono text-[0.68rem] uppercase font-bold text-red-400">
                    Legacy Human Bottleneck
                  </span>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    {activeSector.bottleneck}
                  </p>
                </div>

                {/* After: Blu Solution */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <span className="font-mono text-[0.68rem] uppercase font-bold text-emerald-400">
                    Autonomous Blu OS Execution
                  </span>
                  <p className="mt-2 text-xs text-[#F8FAFC] leading-relaxed">
                    {activeSector.solution}
                  </p>
                </div>
              </div>

              {/* Flagship Product Callout */}
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#05070E] p-4 text-xs">
                <CheckCircle2 className="size-4 text-[#D4FF00] shrink-0" />
                <div>
                  <span className="text-[#94A3B8]">Flagship Platform: </span>
                  <span className="font-semibold text-white">{activeSector.flagship}</span>
                </div>
              </div>
            </div>

            {/* Right: Verified Outcome Metrics Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#05070E]/80 p-8 text-center relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 size-40 rounded-full bg-[#D4FF00]/10 blur-3xl"></div>
              
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
                VERIFIED OUTCOME
              </span>
              
              <p className="mt-4 font-mono text-xl sm:text-2xl font-bold text-[#D4FF00] leading-tight">
                {activeSector.metrics}
              </p>

              <p className="mt-4 text-xs text-[#94A3B8] max-w-xs leading-relaxed">
                Measured across production enterprise deployments with zero cloud API token exposure.
              </p>

              <a
                href="#terminal"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/20"
              >
                <span>Request {activeSector.title.split(",")[0]} Demo</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}