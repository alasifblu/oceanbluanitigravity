"use client";

import { STRATEGIC_RND } from "@/lib/data";
import { Train, Cpu, Users, ArrowUpRight, Compass } from "lucide-react";

export default function StrategicRnD() {
  const getIcon = (id: string) => {
    switch (id) {
      case "railway":
        return <Train className="size-6 text-[#0066FF]" />;
      case "semiconductor":
        return <Cpu className="size-6 text-[#D4FF00]" />;
      case "nsda":
        return <Users className="size-6 text-[#FF5500]" />;
      default:
        return <Compass className="size-6 text-white" />;
    }
  };

  return (
    <section id="rnd" className="relative py-24 md:py-32 bg-[#05070E]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 px-3 py-1 text-xs text-[#0066FF] font-mono uppercase tracking-wider">
            <Compass className="size-3.5" />
            <span>Deep Tech & Sovereign Infrastructure</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Solving Foundational National Challenges.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Beyond commercial software, OceanBlu R&D develops foundational deep-tech capabilities that modernize public logistics, sovereign compute, and workforce economic mobility.
          </p>
        </div>

        {/* 3 Strategic Pillars Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {STRATEGIC_RND.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0A0E1A]/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-[#10172A] hover:shadow-[0_0_35px_rgba(0,102,255,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between  pb-5">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-[#05070E]">
                    {getIcon(item.id)}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[0.65rem] text-[#94A3B8]">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#0066FF] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
                <span className="text-[#D4FF00]">{item.status}</span>
                <ArrowUpRight className="size-4 text-[#94A3B8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}