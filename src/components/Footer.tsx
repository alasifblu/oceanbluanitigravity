"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070E] py-16 text-xs text-[#94A3B8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand & Mission */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-wider">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#0066FF] text-white font-mono text-xs">
                OB
              </span>
              <span>OCEAN<span className="text-[#0066FF]">BLU</span></span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-[#94A3B8]">
              We technologically transform large traditional businesses and automate 70–80% of their workflow and R&D with sovereign, on-premise AI appliances.
            </p>
            <div className="font-mono text-[0.7rem] text-[#64748B]">
              Dhaka, Bangladesh • Global Sovereign Enterprise Deployments
            </div>
          </div>

          {/* Technology & Systems */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Technology
            </span>
            <a href="#blu-box" className="hover:text-white transition-colors">Blu Box™ OS 1.0</a>
            <a href="#sectors" className="hover:text-white transition-colors">21-Sector Operating Suites</a>
            <a href="#dilemma" className="hover:text-white transition-colors">The Deployment Dilemma</a>
            <a href="#security" className="hover:text-white transition-colors">Air-Gap Architecture</a>
          </div>

          {/* Strategic R&D & Inquiries */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Strategic & Contact
            </span>
            <a href="#rnd" className="hover:text-white transition-colors">Bangladesh Railway DPP</a>
            <a href="#rnd" className="hover:text-white transition-colors">Semiconductor Feasibility</a>
            <a href="#concord" className="hover:text-white transition-colors">Concord Incubator</a>
            <a href="mailto:official@oceanblu.digital" className="text-[#D4FF00] hover:underline font-mono">
              official@oceanblu.digital
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4 font-mono text-[0.7rem]">
          <div>
            © 2026 OceanBlu Ltd. All rights reserved. Sovereign Enterprise AI Infrastructure.
          </div>
          <div className="flex items-center gap-6">
            <span>NDAs Standard</span>
            <span>Zero Cloud Egress</span>
            <span className="text-[#0066FF]">oceanblu.digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}