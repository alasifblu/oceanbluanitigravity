"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/data";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 glass-panel border-b border-white/[0.08] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <div className="relative h-8 w-28 overflow-hidden rounded-md border border-[#0066FF]/40 shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-transform group-hover:scale-105">
            <img
              src="/assets/oceanblu-wordmark.jpeg"
              alt="OceanBlu"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden sm:inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.65rem] font-mono text-[#94A3B8] tracking-widest">
            TRUST BUILT GROW
          </span>
        </a>

        {/* Live System Status Pill */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[0.72rem] tracking-wider uppercase">Blu Box OS v1.0 • Air-Gap Active</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-[#94A3B8] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#terminal"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#D4FF00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#05070E] transition-all hover:bg-[#bce400] hover:shadow-[0_0_25px_rgba(212,255,0,0.35)]"
          >
            <span>Book Briefing</span>
            <ArrowRight className="size-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex xl:hidden size-9 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/[0.08] bg-[#05070E]/95 px-6 py-5 backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#94A3B8] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="size-4" />
                <span>100% Air-Gapped Sovereign Infrastructure</span>
              </div>
              <a
                href="#terminal"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#D4FF00] py-3 text-xs font-bold uppercase tracking-wider text-[#05070E]"
              >
                Book Sovereign Briefing
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}