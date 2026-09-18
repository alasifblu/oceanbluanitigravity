"use client";

import { STRATEGIC_RND } from "@/lib/data";
import { Train, Cpu, Users, ArrowUpRight, Compass, Sun, ShieldCheck } from "lucide-react";

export default function StrategicRnD() {
  const getIcon = (id: string) => {
    switch (id) {
      case "railway":
        return <Train className="size-5 text-[#0066FF]" />;
      case "solar":
        return <Sun className="size-5 text-[#D4FF00]" />;
      case "semiconductor":
        return <Cpu className="size-5 text-[#0066FF]" />;
      case "nsda":
        return <Users className="size-5 text-[#FF5500]" />;
      default:
        return <Compass className="size-5 text-white" />;
    }
  };

  const getMedia = (id: string) => {
    if (id === "railway") {
      return {
        image: "/assets/railway_command_center.jpg",
        tag: "National Rail Mission Control",
      };
    }
    if (id === "solar") {
      return {
        image: "/assets/blu_solar_system.jpg",
        tag: "Photovoltaic + Micro-Drip Cooling",
      };
    }
    return null;
  };

  return (
    <section id="rnd" className="relative py-24 md:py-32 bg-[#05070E] overflow-hidden">
      {/* Background Soft Radial Glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 size-[600px] rounded-full bg-[#0066FF]/10 blur-[130px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 px-3.5 py-1 text-xs text-[#0066FF] font-mono uppercase tracking-wider">
            <Compass className="size-3.5" />
            <span>Deep Tech & Sovereign Infrastructure</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Solving Foundational National Challenges.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Beyond commercial software, OceanBlu R&D develops sovereign deep-tech capabilities that modernize public logistics, clean energy infrastructure, sovereign compute, and national workforce mobility.
          </p>
        </div>

        {/* 4 Strategic Pillars Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {STRATEGIC_RND.map((item) => {
            const media = getMedia(item.id);
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0A0E1A]/90 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-[#10172A] hover:shadow-[0_0_35px_rgba(0,102,255,0.2)]"
              >
                {/* Optional Media Banner */}
                {media && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-white/10 bg-black/40">
                    <img
                      src={media.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[0.68rem] text-white backdrop-blur-md">
                      ● {media.tag}
                    </div>
                  </div>
                )}

                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-[#05070E]">
                        {getIcon(item.id)}
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[0.65rem] text-[#94A3B8]">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#0066FF] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
                    <span className="text-[#D4FF00] font-semibold">{item.status}</span>
                    <div className="flex items-center gap-1 text-[#94A3B8] group-hover:text-white transition-colors">
                      <span>Explore DPP</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}