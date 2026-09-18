"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, ShieldCheck, Cpu, Zap, Activity, CheckCircle2, Database, Sparkles } from "lucide-react";

export default function Hero() {
  const bottomCards = [
    {
      id: "tags",
      type: "tags",
      tags: ["Air-Gapped", "Deterministic", "200B LLM", "Local RAG"],
      statLabel: "Operating Sectors",
      statValue: "21+",
      sub: "Pre-calibrated industry verticals",
      bg: "bg-white text-[#05070E]",
    },
    {
      id: "team",
      type: "team",
      image: "/assets/unicef-team.jfif",
      title: "Executive Core",
      badge1: { label: "Automation", val: "78%" },
      badge2: { label: "Cloud Egress", val: "$0.00" },
      bg: "bg-[#0A1024] text-white",
    },
    {
      id: "expertise",
      type: "quote",
      text: "Expertise that Combines On-Premise Hardware, Data, and Sovereign AI",
      bg: "bg-[#0A0E1A] text-white border border-white/10",
    },
    {
      id: "stats",
      type: "finance",
      title: "Monthly Token Egress",
      amount: "$0.00",
      limit: "/ $10,000 Saved",
      items: [
        { name: "Zero Cloud API Egress", val: "$0.00" },
        { name: "Unlimited Local RAG", val: "Included" },
        { name: "Private 4.2TB Vault", val: "Active" },
      ],
      bg: "bg-white text-[#05070E]",
    },
    {
      id: "status",
      type: "pills",
      pills: [
        { label: "Blu Box Node", status: "Active", color: "bg-emerald-500" },
        { label: "Air-Gap Core", status: "100%", color: "bg-[#0066FF]" },
        { label: "Deterministic OS", status: "Verified", color: "bg-[#D4FF00]" },
      ],
      bg: "bg-white/10 backdrop-blur-md text-white border border-white/15",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1466E8] via-[#0E54C8] to-[#083B9C] text-white pt-28 pb-14 sm:pt-32 sm:pb-16 rounded-b-[36px] sm:rounded-b-[48px] shadow-[0_20px_60px_-15px_rgba(20,102,232,0.4)]">
      {/* Radiant ambient glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.18)_0%,transparent_60%)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Main Hero 2-Column Row */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Subheadline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md mb-6">
              <span className="size-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
              <span className="tracking-wide">Sovereign Enterprise AI & Hardware Infrastructure</span>
            </div>

            {/* H1 Headline matching Aeline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-white leading-[1.08] text-balance">
              Building the future with sovereign AI and strategy
            </h1>

            {/* H2 Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl text-pretty font-normal">
              We help enterprises unlock deterministic growth and efficiency through on-premise hardware and autonomous intelligence—automating 70–80% of workflow with zero cloud data egress.
            </p>

            {/* Action CTA & Rating */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D4FF00] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#05070E] transition-all duration-200 hover:bg-[#bce400] hover:scale-105 shadow-[0_4px_25px_rgba(212,255,0,0.4)]"
              >
                <span>GET STARTED</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-[#05070E] text-white">
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Trust & Rating Badges matching Aeline */}
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-white">
                  Rated 4.9/5 across 4,900+ enterprise queries
                </span>
                <div className="flex items-center gap-1 text-[#D4FF00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Fashion Tech Executive Visual matching Aeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 sm:w-88 lg:w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 group">
              <img
                src="/assets/oceanblu_hero_founder.jpg"
                alt="OceanBlu Visionary Leadership"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083B9C]/70 via-transparent to-transparent"></div>

              {/* Floating Status Pill over image */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between rounded-xl bg-black/60 backdrop-blur-md p-3 border border-white/15">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-mono text-xs font-bold text-white">Blu Box™ OS v1.0</span>
                </div>
                <span className="font-mono text-[0.7rem] text-[#D4FF00]">100% Air-Gapped</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM FLOATING BENTO CARDS ROW (Exact match to Aeline bottom deck) */}
        <div className="mt-14 pt-4 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-stretch gap-4 min-w-max lg:grid lg:grid-cols-5 lg:min-w-0">
            {/* Card 1: Pill tags + Sector count */}
            <div className="w-60 lg:w-auto flex flex-col justify-between rounded-2xl bg-white p-5 text-[#05070E] shadow-lg transition-transform hover:-translate-y-1 duration-200">
              <div className="flex flex-wrap gap-1.5">
                {['Turnkey', 'Air-Gapped', 'Deterministic', 'Local RAG'].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[0.65rem] font-semibold text-[#475569]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-100 pt-3">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Sector Suites</span>
                <div className="text-3xl font-black text-[#05070E] tracking-tight">21+</div>
              </div>
            </div>

            {/* Card 2: Executive Photo with Floating Metrics */}
            <div className="w-60 lg:w-auto relative rounded-2xl overflow-hidden bg-[#0A1024] p-4 text-white shadow-lg group">
              <img
                src="/assets/unicef-team.jfif"
                alt="Executive Team"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1024] via-[#0A1024]/40 to-transparent"></div>
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
                <span className="font-mono text-[0.68rem] text-[#D4FF00] font-bold uppercase tracking-wider">
                  FOUNDRY TALENT
                </span>
                <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md rounded-xl p-2 border border-white/10 text-xs">
                  <div className="flex-1">
                    <div className="text-[0.65rem] text-slate-400">Automation</div>
                    <div className="font-bold text-[#D4FF00]">78%</div>
                  </div>
                  <div className="h-6 w-px bg-white/20"></div>
                  <div className="flex-1">
                    <div className="text-[0.65rem] text-slate-400">Egress</div>
                    <div className="font-bold text-emerald-400">$0.00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Dark Card with Lime Dot */}
            <div className="w-60 lg:w-auto flex flex-col justify-between rounded-2xl bg-[#070C1A] border border-white/10 p-5 text-white shadow-lg transition-transform hover:-translate-y-1 duration-200">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#D4FF00]"></span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-400">OceanBlu Thesis</span>
              </div>
              <p className="mt-4 text-xs font-bold leading-snug text-white">
                Expertise that Combines Strategy, On-Premise Data, and Artificial Intelligence.
              </p>
              <div className="mt-4 text-[0.68rem] text-slate-400 font-mono">
                Dhaka • Global Scale
              </div>
            </div>

            {/* Card 4: Light Stat Card ($0.00 Token Egress) */}
            <div className="w-60 lg:w-auto flex flex-col justify-between rounded-2xl bg-white p-5 text-[#05070E] shadow-lg transition-transform hover:-translate-y-1 duration-200">
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">Token Cost</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#05070E]">$0.00</span>
                  <span className="text-[0.65rem] text-slate-400">/ $10,000 saved</span>
                </div>
                {/* Visual Progress Bar */}
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-full bg-[#0066FF] rounded-full"></div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1 text-[0.65rem] text-slate-500 border-t border-slate-100 pt-2 font-mono">
                <div className="flex justify-between">
                  <span>Cloud API Leak</span>
                  <span className="font-bold text-emerald-600">0 KB/s</span>
                </div>
                <div className="flex justify-between">
                  <span>Inference Limit</span>
                  <span className="font-bold text-[#0066FF]">Unlimited</span>
                </div>
              </div>
            </div>

            {/* Card 5: Real-time Status Pills Card */}
            <div className="w-60 lg:w-auto flex flex-col justify-between rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-5 text-white shadow-lg transition-transform hover:-translate-y-1 duration-200">
              <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#D4FF00] font-bold">
                SYSTEM TELEMETRY
              </span>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-lg bg-black/30 px-2.5 py-1.5 text-xs font-mono">
                  <span className="text-slate-300">Blu Box Core</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-black/30 px-2.5 py-1.5 text-xs font-mono">
                  <span className="text-slate-300">Air-Gap</span>
                  <span className="text-[#D4FF00] font-bold">100%</span>
                </div>
              </div>
              <div className="mt-3 text-[0.65rem] text-white/70 font-mono">
                Zero Public Cloud Dependency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}