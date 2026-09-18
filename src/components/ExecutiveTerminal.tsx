"use client";

import { useState } from "react";
import { Terminal, Send, CheckCircle2, Mail, ShieldAlert } from "lucide-react";

export default function ExecutiveTerminal() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    sector: "Real Estate & NAAAS",
    bottleneck: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate terminal submission
    setSubmitted(true);
  };

  return (
    <section id="terminal" className="relative py-24 md:py-32 border-b border-white/10 bg-[#05070E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Briefing Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/10 px-3.5 py-1 text-xs text-[#D4FF00] font-mono uppercase tracking-wider">
              <Terminal className="size-3.5" />
              <span>Initialize Enterprise Transformation</span>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Automate 80% of Your Enterprise Operations?
            </h2>

            <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
              Schedule a confidential 30-minute sovereign briefing with OceanBlu’s executive engineering team. We will analyze your organization’s operational bottlenecks and deliver a deterministic Blu Box deployment blueprint.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-l-2 border-[#0066FF] pl-4 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldAlert className="size-4 text-[#D4FF00]" />
                <span>NDA & Physical Data Sovereignty Signed by Default</span>
              </div>
              <p>
                Strict enterprise SLA agreements. We deploy on-premise without touching your existing legacy ERP during evaluation.
              </p>
            </div>

            {/* Direct Official Email Callout */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0A0E1A] p-4 text-xs font-mono text-[#F8FAFC]">
              <Mail className="size-4 text-[#0066FF] shrink-0" />
              <div>
                <span className="text-[#94A3B8]">Direct Executive Routing: </span>
                <a href="mailto:official@oceanblu.digital" className="text-[#D4FF00] hover:underline font-bold">
                  official@oceanblu.digital
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Console */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_-15px_rgba(0,102,255,0.25)]">
              {/* Terminal Top Window Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-500/80"></div>
                  <div className="size-3 rounded-full bg-yellow-500/80"></div>
                  <div className="size-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span>OCEANBLU-CLI // DEPLOYMENT_REQUEST</span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="size-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Transmission Logged</h3>
                  <p className="text-xs text-[#94A3B8] max-w-sm">
                    Our executive engineering team has received your enterprise parameters. An encrypted briefing invite will be dispatched within 12 hours to your corporate address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block font-mono text-[0.7rem] uppercase text-[#94A3B8] mb-1">
                      Executive Name & Corporate Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asif Sikhon, Chief Executive Officer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070E] px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-[#0066FF] focus:outline-none"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[0.7rem] uppercase text-[#94A3B8] mb-1">
                        Enterprise / Organization
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. NAAAS Real Estate Group"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070E] px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-[#0066FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[0.7rem] uppercase text-[#94A3B8] mb-1">
                        Corporate Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#05070E] px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-[#0066FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[0.7rem] uppercase text-[#94A3B8] mb-1">
                      Primary Industry Sector
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070E] px-3.5 py-2.5 text-xs text-white focus:border-[#0066FF] focus:outline-none"
                    >
                      <option value="Real Estate & NAAAS">Real Estate, Property & Construction</option>
                      <option value="Hospitality">Hospitality, Dining & WhatsApp POS</option>
                      <option value="Healthcare">Clinical Healthcare & Dental Diagnostics</option>
                      <option value="Higher Education">Higher Education & Campus LMS</option>
                      <option value="Logistics">Supply Chain, Retail & Fleet Logistics</option>
                      <option value="Defense & Gov">Government, Banking & Air-Gapped Infrastructure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[0.7rem] uppercase text-[#94A3B8] mb-1">
                      Primary Operational Bottleneck to Automate
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe the manual paperwork, system hangs, or token costs you need eliminated..."
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#05070E] px-3.5 py-2 text-xs text-white placeholder-white/20 focus:border-[#0066FF] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#D4FF00] py-3.5 text-xs font-bold uppercase tracking-wider text-[#05070E] transition-all hover:bg-[#bce400] hover:shadow-[0_0_25px_rgba(212,255,0,0.3)]"
                  >
                    <span>Request Deployment Briefing</span>
                    <Send className="size-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}