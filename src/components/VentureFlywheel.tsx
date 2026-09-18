"use client";

import { VENTURE_FLYWHEEL } from "@/lib/data";
import { Rocket, Sun, Sparkles, Check, ArrowRight } from "lucide-react";

export default function VentureFlywheel() {
  const { concord, solar } = VENTURE_FLYWHEEL;

  return (
    <section id="concord" className="relative py-24 md:py-32 border-b border-white/10 bg-[#05070E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-400 font-mono uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>The Innovation Flywheel</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Talent Incubation & Sustainable Compute.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Our ecosystem feeds itself: elite engineering talent is incubated through Concord, while industrial hardware is sustained by decentralized Blu Solar energy infrastructure.
          </p>
        </div>

        {/* 2-Column Bento Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Concord Card */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-8 md:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Rocket className="size-6" />
                </div>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs font-bold text-purple-300">
                  {concord.model}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">{concord.title}</h3>
              <p className="mt-1 font-mono text-xs text-[#94A3B8]">{concord.subtitle}</p>

              <p className="mt-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {concord.desc}
              </p>

              {/* Clubs Grid */}
              <div className="mt-6">
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-[#F8FAFC]">
                  Dedicated Incubation Labs:
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {concord.clubs.map((club) => (
                    <span
                      key={club}
                      className="rounded-lg border border-white/10 bg-[#05070E] px-3 py-1.5 text-xs text-[#94A3B8]"
                    >
                      {club}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="#terminal"
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300"
              >
                <span>Explore Concord Incubation Program</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Blu Solar Card */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-8 md:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,85,0,0.1)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30">
                  <Sun className="size-6" />
                </div>
                <span className="rounded-full border border-[#FF5500]/30 bg-[#FF5500]/10 px-3 py-1 font-mono text-xs font-bold text-[#FF5500]">
                  {solar.model}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">{solar.title}</h3>
              <p className="mt-1 font-mono text-xs text-[#94A3B8]">{solar.subtitle}</p>

              <p className="mt-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {solar.desc}
              </p>

              {/* Features List */}
              <ul className="mt-6 flex flex-col gap-2.5">
                {solar.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                    <Check className="size-4 text-[#FF5500] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="#terminal"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5500] hover:text-[#ff7733]"
              >
                <span>Request Blu Solar Technical Audit</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}