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
    <section id="sectors" className="relative py-24 md:py-32 bg-[#05070E] overflow-hidden">
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
        {(() => {
          const sectorVisuals: Record<string, { image: string; tag: string; caption: string }> = {
            "real-estate": {
              image: "/assets/naaas_realestate_os.jpg",
              tag: "3D CAD & Urban GIS",
              caption: "NAAAS Urban OS: Autonomous deed compliance & spatial asset analytics",
            },
            "hospitality": {
              image: "/assets/restaurant_pos_system.jpg",
              tag: "WhatsApp Conversational AI",
              caption: "Direct POS & KDS terminal with autonomous table ordering bot",
            },
            "healthcare": {
              image: "/assets/healthcare_diagnostic_hub.jpg",
              tag: "Air-Gapped Clinical Hub",
              caption: "Zero-egress EHR, 3D anatomical triage & localized radiology inference",
            },
            "education": {
              image: "/assets/education_neural_lms.jpg",
              tag: "Neural Knowledge LMS",
              caption: "Autonomous syllabus synthesis, multilingual translator & learner graph",
            },
            "logistics": {
              image: "/assets/railway_command_center.jpg",
              tag: "National Rail Command OS",
              caption: "Mission telemetry, locomotive health monitoring & route optimization",
            },
          };

          const visual = sectorVisuals[activeSector.id] || sectorVisuals["real-estate"];

          return (
            <div className="mt-12 rounded-3xl border border-white/15 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-6 md:p-10 backdrop-blur-2xl shadow-[0_0_50px_-15px_rgba(0,102,255,0.25)]">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Visual System UI Preview */}
                <div className="lg:col-span-7 relative group">
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_0_35px_rgba(0,102,255,0.3)] bg-[#05070E]">
                    <img
                      src={visual.image}
                      alt={activeSector.title}
                      className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070E]/80 via-transparent to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="rounded-md border border-[#0066FF]/40 bg-black/60 px-2.5 py-1 font-mono text-[0.68rem] font-bold text-[#0066FF] backdrop-blur-md">
                        {activeSector.code}
                      </span>
                      <span className="rounded-md border border-emerald-500/30 bg-black/60 px-2.5 py-1 font-mono text-[0.68rem] text-emerald-400 backdrop-blur-md">
                        ● {visual.tag}
                      </span>
                    </div>

                    {/* Bottom Caption Bar */}
                    <div className="absolute bottom-3 inset-x-3 rounded-xl border border-white/10 bg-black/75 p-3 backdrop-blur-md">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white truncate">{visual.caption}</span>
                        <span className="font-mono text-[0.68rem] text-[#D4FF00] shrink-0 ml-2">Verified OS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sector Specs & Outcomes */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#0066FF]">
                      <span className="font-bold">ENTERPRISE SPECIFICATION</span>
                      <span>•</span>
                      <span className="text-[#94A3B8]">{activeSector.flagship}</span>
                    </div>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activeSector.title}
                    </h3>
                  </div>

                  {/* Before vs After Grid */}
                  <div className="grid gap-3">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5">
                      <span className="font-mono text-[0.65rem] uppercase font-bold text-red-400">
                        Legacy Human Bottleneck
                      </span>
                      <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                        {activeSector.bottleneck}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5">
                      <span className="font-mono text-[0.65rem] uppercase font-bold text-emerald-400">
                        Autonomous Blu OS Execution
                      </span>
                      <p className="mt-1 text-xs text-[#F8FAFC] leading-relaxed">
                        {activeSector.solution}
                      </p>
                    </div>
                  </div>

                  {/* Verified Metric Card */}
                  <div className="rounded-xl border border-[#D4FF00]/20 bg-[#D4FF00]/5 p-4 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[0.65rem] uppercase text-[#94A3B8]">Verified Production ROI</span>
                      <div className="font-mono text-xl font-black text-[#D4FF00]">{activeSector.metrics}</div>
                    </div>
                    <a
                      href="#terminal"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#D4FF00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#05070E] transition-all hover:bg-[#bce400]"
                    >
                      <span>Deploy</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

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