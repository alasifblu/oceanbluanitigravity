"use client";

import { ShieldCheck, Lock, FileKey, Terminal } from "lucide-react";

export default function SecurityCompliance() {
  const securityCards = [
    {
      icon: <Lock className="size-6 text-[#0066FF]" />,
      title: "Physical Air-Gap Architecture",
      desc: "Hardware-level perimeter isolation. Inference memory runs strictly within your corporate facility with zero external telemetric pinging or cloud transit.",
    },
    {
      icon: <FileKey className="size-6 text-[#D4FF00]" />,
      title: "Binding NDA & IP Sovereignty",
      desc: "Your proprietary records, financial ledgers, and trade secrets never train external models. Everything remains legally and cryptographically your exclusive property.",
    },
    {
      icon: <ShieldCheck className="size-6 text-emerald-400" />,
      title: "Role-Based Agent Permissions",
      desc: "Fine-grained access control prevents unauthorized agent cross-talk. Human resource agents cannot inspect financial ledgers; marketing bots cannot query databases.",
    },
    {
      icon: <Terminal className="size-6 text-[#FF5500]" />,
      title: "Cryptographic Audit Trails",
      desc: "Every automated agent action, generated contract clause, and webhook call is written to an immutable, timestamped local system ledger for institutional compliance.",
    },
  ];

  return (
    <section id="security" className="relative py-24 md:py-32 border-b border-white/10 bg-[#05070E]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 font-mono uppercase tracking-wider">
            <ShieldCheck className="size-3.5" />
            <span>Institutional Governance</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Data Sovereignty by Default. <br />
            <span className="italic font-serif text-[#0066FF] font-normal">Never Compromised.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Enterprises and state institutions cannot gamble with data privacy. OceanBlu delivers the cryptographic certainty, physical air-gaps, and auditability required by sovereign standards.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-[#0A0E1A]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-[#10172A]"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#05070E] border border-white/10">
                {card.icon}
              </div>
              <h3 className="mt-5 text-base font-bold text-white tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}