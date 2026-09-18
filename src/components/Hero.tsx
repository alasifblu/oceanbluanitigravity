"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Cpu, Zap, Activity, CheckCircle2, Database, Sparkles, Server, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F56D2] via-[#0A3FA8] to-[#062873] text-white pt-28 pb-16 sm:pt-36 sm:pb-20 rounded-b-[36px] sm:rounded-b-[48px] shadow-[0_25px_70px_-15px_rgba(15,86,210,0.45)]">
      {/* Radiant ambient lighting overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_65%_20%,rgba(255,255,255,0.2)_0%,transparent_65%)]"></div>
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-[#0066FF]/20 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Main Hero 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: High-Gravity Positioning & Reality-Based Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Category Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-mono text-white backdrop-blur-md mb-6 shadow-xs">
              <span className="size-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
              <span className="tracking-widest uppercase text-[0.7rem] font-bold">
                Sovereign AI Infrastructure • On-Premise Hardware Appliance
              </span>
            </div>

            {/* H1 Headline: Category-Defining, No Fluff */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.8rem] font-black tracking-tight text-white leading-[1.12] text-balance">
              The Sovereign Operating Entity. <br />
              <span className="text-[#D4FF00]">
                Automating 80% of Enterprise Labor Behind Your Own Firewall.
              </span>
            </h1>

            {/* Subheadline: Grounded, Realistic, Explicit Mechanics */}
            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              Large organizations lose up to 80% of weekly payroll hours to manual document reconciliation, multi-party deed audits, CAD zoning checks, and fragmented SaaS coordination. OceanBlu drops an air-gapped hardware appliance directly into your server rack—ingesting private institutional records and running deterministic workflows with zero cloud data egress.
            </p>

            {/* Dual Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#D4FF00] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#05070E] transition-all duration-200 hover:bg-[#bce400] hover:scale-105 shadow-[0_4px_30px_rgba(212,255,0,0.35)]"
              >
                <span>Deploy Blu Box Appliance</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-[#05070E] text-white">
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              <a
                href="#breakdown"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40"
              >
                <span>Inspect Labor Math</span>
                <span className="font-mono text-xs text-[#D4FF00]">↓</span>
              </a>
            </div>

            {/* Verifiable Technical Telemetry (Replaces fake 4.9 star agency badges) */}
            <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-white/80 border-t border-white/15 pt-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-400" />
                <span>0 KB/s Cloud Data Egress</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="size-4 text-[#D4FF00]" />
                <span>Up to 200B Parameter Weights</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="size-4 text-white" />
                <span>Physical Mil-Spec Chassis</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Proprietary Hardware Appliance Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/25 group bg-[#070E22]">
              <img
                src="/assets/blubox_hardware_unit.jpg"
                alt="Blu Box Physical On-Premise Appliance"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061845] via-transparent to-transparent"></div>

              {/* Live Air-Gap Hardware Node Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/75 px-3.5 py-1 backdrop-blur-md">
                <span className="size-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-emerald-400 font-bold">
                  Node Status: Online • 100% Air-Gapped
                </span>
              </div>

              {/* Hardware Telemetry HUD Card */}
              <div className="absolute bottom-4 inset-x-4 rounded-2xl bg-black/80 backdrop-blur-md p-4 border border-white/15 flex flex-col gap-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Blu Box™ Neural Core v1.0</span>
                  <span className="text-[#D4FF00] font-bold">0 Cloud Egress</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-[0.68rem] text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[0.62rem]">LOCAL VAULT</span>
                    <span className="font-bold text-white">4.2 TB RAG</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[0.62rem]">INFERENCE</span>
                    <span className="font-bold text-emerald-400">&lt; 0.40 ms</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[0.62rem]">CHASSIS</span>
                    <span className="font-bold text-white">Brushed Alloy</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION BREAKDOWN: THE REALITY OF "80% WORKFLOW AUTOMATION" */}
        <div id="breakdown" className="mt-16 pt-8 border-t border-white/15">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D4FF00]">
              ● THE OPERATIONAL REALITY
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why 80% Workflow Automation is an Exact Science, Not Clickbait.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
              When an enterprise analyzes where staff hours actually evaporate every month, the data is unambiguous:
            </p>
          </div>

          {/* 3 Spacious, Structured Executive Cards (Zero overlapping, high legibility) */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: The Exact Labor Breakdown */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 text-[#05070E] shadow-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                  COGNITIVE LABOR AUDIT
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#05070E] tracking-tight">
                  Where Your Organization's Payroll Evaporates
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  In enterprises with 50+ staff, human talent is consumed by repetitive administrative triage rather than growth:
                </p>

                {/* Labor Percentages Stack */}
                <div className="mt-5 flex flex-col gap-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Document & Deed Processing</span>
                      <span className="text-[#0066FF] font-mono">40%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-[#0066FF] rounded-full w-[40%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Cross-Dept Triage & Ticket Routing</span>
                      <span className="text-[#0066FF] font-mono">25%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-[#0066FF] rounded-full w-[25%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Bylaw & Compliance Verification</span>
                      <span className="text-[#0066FF] font-mono">15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-[#0066FF] rounded-full w-[15%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500 font-semibold">Total Repetitive Hours:</span>
                <span className="font-bold text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-md">80% Automated</span>
              </div>
            </div>

            {/* Card 2: The OceanBlu Operating Mechanism */}
            <div className="rounded-2xl bg-[#080D1D] border border-white/15 p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
                  HOW BLU BOX OPERATES
                </span>
                <h3 className="mt-2 text-lg font-bold text-white tracking-tight">
                  Deterministic Ingestion, Zero Babysitting
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Unlike brittle cloud chatbots that hallucinate, Blu Box operates on strict deterministic rules and localized vector embeddings:
                </p>

                <ul className="mt-4 flex flex-col gap-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#D4FF00] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Reads 500-page deeds in 410ms:</strong> Audits zoning bylaws and drafting leases with zero compliance drift.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#D4FF00] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Autonomous WhatsApp Triage:</strong> Takes reservations, dispatches kitchen orders, and handles customer inquiries 24/7.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#D4FF00] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Human-in-the-Loop Signoff:</strong> Routine tasks execute instantly; only the final 20% exceptions escalate to human leadership.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">Human Leadership Role:</span>
                <span className="font-bold text-[#D4FF00]">20% High-Value Strategy</span>
              </div>
            </div>

            {/* Card 3: Economic Math: Fixed Asset vs Cloud Egress */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 text-[#05070E] shadow-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600">
                  ECONOMIC SOVEREIGNTY
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#05070E] tracking-tight">
                  Fixed Capital Asset vs. Infinite SaaS Tax
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Public cloud AI meters every query, multiplying your operational cost as transaction volume expands:
                </p>

                {/* Side-by-Side Economics */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-red-50 p-3 border border-red-200">
                    <span className="font-mono text-[0.65rem] font-bold text-red-600 uppercase">Public Cloud SaaS</span>
                    <div className="mt-1 font-mono text-base font-black text-red-700">$5k–$20k/mo</div>
                    <p className="mt-1 text-[0.65rem] text-red-600 leading-tight">Per-seat licenses + token egress spikes + data leaks.</p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-3 border border-emerald-200">
                    <span className="font-mono text-[0.65rem] font-bold text-emerald-700 uppercase">Blu Box Appliance</span>
                    <div className="mt-1 font-mono text-base font-black text-emerald-800">$0.00 / Query</div>
                    <p className="mt-1 text-[0.65rem] text-emerald-700 leading-tight">Fixed capital asset. Run infinite local inference loops 24/7.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500 font-semibold">Data Egress Risk:</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Zero Cloud Exposure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}