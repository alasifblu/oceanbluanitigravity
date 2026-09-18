"use client";

import { useState } from "react";
import { SECTOR_SUITES } from "@/lib/data";
import { Layers, Building2, UtensilsCrossed, Stethoscope, GraduationCap, Truck, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function SectorSuites() {
  const [activeTab, setActiveTab] = useState(SECTOR_SUITES[0].id);

  const activeSector = SECTOR_SUITES.find((s) => s.id === activeTab) || SECTOR_SUITES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "real-estate":
        return <Building2 className="size-5" />;
      case "hospitality":
        return <UtensilsCrossed className="size-5" />;
      case "healthcare":
        return <Stethoscope className="size-5" />;
      case "education":
        return <GraduationCap className="size-5" />;
      case "logistics":
        return <Truck className="size-5" />;
      default:
        return <Layers className="size-5" />;
    }
  };

  const sectorAngles = [
    { id: "real-estate", angle: -24, label: "Real Estate & NAAAS" },
    { id: "hospitality", angle: -12, label: "Hospitality & POS" },
    { id: "healthcare", angle: 0, label: "Healthcare & Dental" },
    { id: "education", angle: 12, label: "Education LMS" },
    { id: "logistics", angle: 24, label: "Fleet Logistics" },
  ];

  return (
    <section id="sectors" className="relative py-24 md:py-32 border-b border-white/10 bg-[#05070E] overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-[#0066FF]/10 blur-[140px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/10 px-3.5 py-1 text-xs text-[#D4FF00] font-mono uppercase tracking-wider">
            <Layers className="size-3.5" />
            <span>OceanBlu Tech • 21 Operating Suites</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Pre-Trained Intelligence for Your Exact Sector.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Select an industry sector from the dial below to inspect how OceanBlu Tech eliminates structural enterprise friction.
          </p>
        </div>

        {/* RADIAL FAN ARTIFACT (Direct from Pinterest Reference website design for tech.jpg) */}
        <div className="mt-16 relative flex flex-col items-center justify-center pt-8">
          {/* Semicircular Dial Tick Marks */}
          <div className="hidden md:block absolute top-12 w-[680px] h-[340px] rounded-t-full border-t border-dashed border-white/20 pointer-events-none"></div>

          {/* Fanned Cards Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 z-10">
            {SECTOR_SUITES.map((sector, idx) => {
              const isActive = sector.id === activeTab;
              const angle = sectorAngles[idx]?.angle || 0;

              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(sector.id)}
                  style={{
                    transform: `rotate(${angle}deg)`,
                  }}
                  className={`group relative flex flex-col items-center justify-center rounded-2xl p-4 w-40 sm:w-44 h-48 sm:h-52 backdrop-blur-xl transition-all duration-300 transform hover:rotate-0 hover:scale-110 hover:z-20 cursor-pointer ${
                    isActive
                      ? "border-2 border-[#0066FF] bg-gradient-to-b from-[#131B2E] to-[#0A0E1A] shadow-[0_0_35px_rgba(0,102,255,0.4)] z-10 !rotate-0 !scale-105"
                      : "border border-white/10 bg-[#0A0E1A]/80 hover:border-white/30"
                  }`}
                >
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl mb-3 transition-colors ${
                      isActive ? "bg-[#0066FF] text-white" : "bg-white/5 text-[#94A3B8] group-hover:text-white"
                    }`}
                  >
                    {getIcon(sector.id)}
                  </div>

                  <span className="font-mono text-[0.65rem] uppercase text-[#0066FF] font-bold">
                    {sector.code}
                  </span>

                  <h4 className="mt-1 text-xs sm:text-sm font-bold text-center text-white leading-tight px-1">
                    {sector.title.split(",")[0]}
                  </h4>

                  <span
                    className={`mt-3 text-[0.68rem] font-mono font-semibold ${
                      isActive ? "text-[#D4FF00]" : "text-[#94A3B8]"
                    }`}
                  >
                    {isActive ? "● Active Suite" : "Inspect ->"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sector Detail Bento Showcase */}
        <div className="mt-12 rounded-3xl border border-white/15 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-8 md:p-12 backdrop-blur-2xl shadow-[0_0_50px_-15px_rgba(0,102,255,0.25)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Sector Specs */}
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
                {/* Before */}
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <span className="font-mono text-[0.68rem] uppercase font-bold text-red-400">
                    Legacy Human Bottleneck
                  </span>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    {activeSector.bottleneck}
                  </p>
                </div>

                {/* After */}
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
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-[#05070E] p-4 text-xs">
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
                <span>Deploy {activeSector.title.split(",")[0]} Suite</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Bottom Metrics Row (from Pinterest reference website design for tech.jpg) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">85%</div>
            <p className="mt-1 text-xs text-[#94A3B8]">Faster Contract Turnaround</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#D4FF00] font-mono">0%</div>
            <p className="mt-1 text-xs text-[#94A3B8]">Third-Party Aggregator Commission</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">40%</div>
            <p className="mt-1 text-xs text-[#94A3B8]">Lower Student Acquisition Cost</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0066FF] font-mono">24%</div>
            <p className="mt-1 text-xs text-[#94A3B8]">Logistics Fleet Fuel Reduction</p>
          </div>
        </div>
      </div>
    </section>
  );
}