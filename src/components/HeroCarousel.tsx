"use client";

import { Cpu, ShieldCheck, Database, CheckCircle2, Zap, Layers, Activity } from "lucide-react";

export default function HeroCarousel() {
  const cards = [
    {
      id: "card-legal",
      tag: "Agent 02 • Legal",
      title: "48-Page Lease Deed",
      detail: "0 compliance breaches",
      metric: "Executed in 410ms",
      color: "#D4FF00",
      icon: <Activity className="size-4 text-[#D4FF00]" />,
      tilt: "-rotate-2 hover:rotate-0",
    },
    {
      id: "card-roi",
      tag: "Financial Sovereignty",
      title: "$0.00 Token Egress",
      detail: "Unlimited local queries",
      metric: "Fixed Enterprise Asset",
      color: "#0066FF",
      icon: <Zap className="size-4 text-[#0066FF]" />,
      tilt: "rotate-1 hover:rotate-0",
    },
    {
      id: "card-blubox",
      tag: "The Flagship Unit",
      title: "Blu Box™ Neural Core",
      detail: "200B Params Supported",
      metric: "100% Air-Gapped Local LAN",
      color: "#FF5500",
      isCore: true,
      icon: <Cpu className="size-4 text-[#FF5500]" />,
      tilt: "-rotate-1 hover:rotate-0",
    },
    {
      id: "card-naaas",
      tag: "Sector 01 • Real Estate",
      title: "NAAAS Urban OS",
      detail: "1,200 tickets auto-resolved",
      metric: "40% Faster Onboarding",
      color: "#D4FF00",
      icon: <CheckCircle2 className="size-4 text-[#D4FF00]" />,
      tilt: "rotate-2 hover:rotate-0",
    },
    {
      id: "card-rag",
      tag: "Local Deterministic RAG",
      title: "4.2 TB Private Vault",
      detail: "Zero Hallucination Routing",
      metric: "Latency: < 0.4ms",
      color: "#0066FF",
      icon: <Database className="size-4 text-[#0066FF]" />,
      tilt: "-rotate-2 hover:rotate-0",
    },
    {
      id: "card-sectors",
      tag: "OceanBlu Tech",
      title: "21 Sector Suites",
      detail: "Health, Education, Dining",
      metric: "70–80% Labor Automated",
      color: "#F8FAFC",
      icon: <Layers className="size-4 text-white" />,
      tilt: "rotate-1 hover:rotate-0",
    },
  ];

  return (
    <div className="mt-14 w-full overflow-x-auto pb-6 pt-2 no-scrollbar perspective-container">
      <div className="flex items-center justify-center gap-4 min-w-max px-4">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className={`group relative w-64 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 transform ${card.tilt} hover:scale-105 ${
                card.isCore
                  ? "border-2 border-[#0066FF] bg-gradient-to-b from-[#131B2E] to-[#0A0E1A] shadow-[0_0_40px_-10px_rgba(0,102,255,0.4)]"
                  : "border border-white/10 bg-[#0A0E1A]/80 hover:border-white/25 hover:bg-[#10172A]"
              }`}
            >
              {/* Top Tag & Icon */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  {card.icon}
                  <span className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-white">
                    {card.tag}
                  </span>
                </div>
                <span
                  className="size-1.5 rounded-full animate-ping"
                  style={{ backgroundColor: card.color }}
                ></span>
              </div>

              {/* Main Content */}
              <div className="pt-3">
                <h4 className="text-base font-bold text-white tracking-tight">
                  {card.title}
                </h4>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  {card.detail}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#05070E] px-2.5 py-1 font-mono text-[0.68rem] text-white">
                  <span style={{ color: card.color }}>●</span>
                  <span>{card.metric}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}