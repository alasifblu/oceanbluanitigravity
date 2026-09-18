"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Building2,
  UtensilsCrossed,
  Stethoscope,
  GraduationCap,
  Train,
  Sun,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Cpu,
  Zap,
} from "lucide-react";

export default function SectorSuites() {
  const tabs = [
    {
      id: "blubox",
      name: "Blu Box™ Appliance",
      badge: "Hardware",
      icon: <Box className="size-4" />,
      title: "Blu Box™ On-Premise Sovereign Hardware Core",
      subtitle: "Air-Gapped Mil-Spec Appliance with 200B Parameter Local Engine",
      image: "/assets/blubox_hardware_unit.jpg",
      tag: "Air-Gapped Physical Chassis",
      bottleneck: "Cloud AI services leak confidential enterprise trade secrets, client records, and legal files through external API egress.",
      solution: "Physical hardware appliance installed in your server room. Executes deep reasoning, document synthesis, and automated actions with 0 KB/s cloud egress.",
      flagship: "Blu Box Sovereign 1.0 Hardware Server",
      metrics: "0.00 KB/s Cloud Data Egress • < 0.40 ms PCIe Latency • 4.2 TB Local RAG",
    },
    {
      id: "real-estate",
      name: "NAAAS Real Estate",
      badge: "Sector 01",
      icon: <Building2 className="size-4" />,
      title: "NAAAS Urban & Real Estate Operating System",
      subtitle: "Autonomous Deed Audit, 3D CAD Blueprint Parsing & Tenant Engine",
      image: "/assets/naaas_realestate_os.jpg",
      tag: "3D CAD & GIS Telemetry",
      bottleneck: "Property valuation, multi-party leasing deeds, lead screening, and CAD inspections consume weeks of manual triage.",
      solution: "Autonomous Real Estate OS. Evaluates CAD blueprints, verifies deed compliance, handles tenant inquiries via WhatsApp, and drafts binding contracts in seconds.",
      flagship: "NAAAS Urban & Property Ecosystem (Web, Native Mobile, & Enterprise Engine)",
      metrics: "85% Faster Contract Turnaround • 40% Reduction in Tenant Onboarding Time",
    },
    {
      id: "hospitality",
      name: "Hospitality & POS",
      badge: "Sector 02",
      icon: <UtensilsCrossed className="size-4" />,
      title: "GastroFlow & WhatsApp Conversational POS",
      subtitle: "Direct Table Ordering, Real-Time KDS Sync & Customer Retention",
      image: "/assets/restaurant_pos_system.jpg",
      tag: "WhatsApp Autonomous AI",
      bottleneck: "Front-desk staff turnover, exorbitant delivery aggregator fees (up to 30%), and slow customer table service bleed restaurant margins.",
      solution: "Omnichannel Restaurant POS & WhatsApp Booking Agents. Takes orders, handles table reservations, dispatches kitchen tickets, and drives automated repeat sales.",
      flagship: "GastroFlow Autonomous POS & WhatsApp Booking Bot",
      metrics: "0% Third-Party Aggregator Commission • 24/7 Automated Table Reservation",
    },
    {
      id: "healthcare",
      name: "Clinical Healthcare",
      badge: "Sector 03",
      icon: <Stethoscope className="size-4" />,
      title: "Sovereign Health AI & Clinical Diagnostic Hub",
      subtitle: "Offline Radiology Telemetry, Patient Triage & HIPAA-Grade Privacy",
      image: "/assets/healthcare_diagnostic_hub.jpg",
      tag: "Offline Diagnostic Hub",
      bottleneck: "Clinicians spend up to 40% of their workday typing notes, filling diagnostic charts, and manually booking patient procedures.",
      solution: "Local Clinical Suite. Summarizes patient charts, prepares diagnostic summaries, and schedules appointments under strict, HIPAA-grade local privacy.",
      flagship: "Dental & Clinical Assistant On-Premise Appliance",
      metrics: "40% Reduction in Clinical Administrative Burden • 100% Offline Patient Privacy",
    },
    {
      id: "education",
      name: "Higher Education LMS",
      badge: "Sector 04",
      icon: <GraduationCap className="size-4" />,
      title: "Autonomous University LMS & Student Gateway",
      subtitle: "Neural Knowledge Graph, Course Syllabus Synthesis & Multilingual AI",
      image: "/assets/education_neural_lms.jpg",
      tag: "Neural Knowledge Graph",
      bottleneck: "Skyrocketing student acquisition budgets, manual admission triage, and outdated, fragmented student portals.",
      solution: "Campus Intelligence OS. Automates student admission inquiries, cuts recruitment marketing spend by 40%, and delivers personalized 24/7 AI tutoring.",
      flagship: "Autonomous University LMS & Admission Gateway",
      metrics: "40% Lower Student Acquisition Cost • 24/7 Interactive Student Guidance",
    },
    {
      id: "rnd-solar",
      name: "National R&D & Solar",
      badge: "National Tech",
      icon: <Sun className="size-4" />,
      title: "National Railway DPP & Blu Solar Infrastructure",
      subtitle: "Predictive Train Telemetry & Smart Photovoltaic Micro-Drip Cooling",
      image: "/assets/blu_solar_system.jpg",
      tag: "Clean Energy & Deep Tech",
      bottleneck: "Transit congestion, locomotive telemetry blindness, and high urban rooftop energy costs with heat-degraded solar panel efficiency.",
      solution: "Dual national deployment: Bangladesh Railway algorithmic dispatch and Blu Solar smart rooftop photovoltaic array with automated IoT micro-drip cooling.",
      flagship: "Bangladesh Railway DPP + Blu Solar Micro-Drip Grid",
      metrics: "21.8% Peak Solar Efficiency • Automated Telemetry & Track Maintenance",
    },
  ];

  const [activeTabId, setActiveTabId] = useState("blubox");
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#05070E] text-white overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-[#0066FF]/10 blur-[140px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">
            • SERVICES & SOVEREIGN PLATFORMS
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Autonomous Intelligence Engineered for Critical Industries.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Switch between platforms to inspect the hardware, operating software, and national infrastructure deployed by OceanBlu.
          </p>
        </div>

        {/* HORIZONTAL NON-OVERLAPPING TABS BAR */}
        <div className="mt-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max p-1.5 rounded-2xl bg-[#0A0F1D] border border-white/10">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-xl bg-[#0066FF] shadow-[0_0_20px_rgba(0,102,255,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE PLATFORM SHOWCASE BENTO (ANIMATED WITH FRAMER MOTION) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-8 rounded-3xl border border-white/15 bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_-10px_rgba(0,102,255,0.25)]"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: High-Res Photorealistic Preview */}
              <div className="lg:col-span-7 relative group">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-black">
                  <img
                    src={activeTab.image}
                    alt={activeTab.title}
                    className="w-full h-[280px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="rounded-md border border-[#0066FF]/40 bg-black/70 px-2.5 py-1 font-mono text-[0.68rem] font-bold text-[#0066FF] backdrop-blur-md">
                      {activeTab.badge}
                    </span>
                    <span className="rounded-md border border-emerald-500/30 bg-black/70 px-2.5 py-1 font-mono text-[0.68rem] text-emerald-400 backdrop-blur-md">
                      ● {activeTab.tag}
                    </span>
                  </div>

                  {/* Bottom System Bar */}
                  <div className="absolute bottom-4 inset-x-4 rounded-xl border border-white/10 bg-black/80 p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white truncate">{activeTab.flagship}</span>
                      <span className="font-mono text-[0.68rem] text-[#D4FF00] shrink-0 ml-2">Sovereign Node</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Specifications, Bottleneck vs Autonomous Solution & Metrics */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#0066FF]">
                    <span className="font-bold">SYSTEM SPECIFICATION</span>
                    <span>•</span>
                    <span className="text-slate-400">{activeTab.badge}</span>
                  </div>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeTab.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#D4FF00] font-mono">
                    {activeTab.subtitle}
                  </p>
                </div>

                {/* Before vs After Cards */}
                <div className="grid gap-3">
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5">
                    <span className="font-mono text-[0.65rem] uppercase font-bold text-red-400">
                      Legacy Operational Bottleneck
                    </span>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      {activeTab.bottleneck}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5">
                    <span className="font-mono text-[0.65rem] uppercase font-bold text-emerald-400">
                      Autonomous Sovereign Execution
                    </span>
                    <p className="mt-1 text-xs text-white leading-relaxed">
                      {activeTab.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Metrics Card & CTA */}
                <div className="rounded-xl border border-[#D4FF00]/20 bg-[#D4FF00]/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[0.65rem] uppercase text-slate-400">
                      Verified Production Outcome
                    </span>
                    <div className="font-mono text-sm sm:text-base font-bold text-[#D4FF00] leading-snug">
                      {activeTab.metrics}
                    </div>
                  </div>

                  <a
                    href="#terminal"
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#D4FF00] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#05070E] transition-all hover:bg-[#bce400] hover:scale-105"
                  >
                    <span>Deploy</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}