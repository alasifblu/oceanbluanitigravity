"use client";

import { TELEMETRY_FEED } from "@/lib/data";
import { Activity, CheckCircle2, Cpu } from "lucide-react";

export default function TelemetryBubbles() {
  return (
    <div className="flex flex-col gap-3.5 w-full max-w-md">
      {TELEMETRY_FEED.map((item, idx) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0E1A]/80 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#10172A]/90 hover:shadow-[0_0_25px_rgba(0,102,255,0.15)]"
          style={{ animationDelay: `${idx * 150}ms` }}
        >
          {/* Top Bar with Agent & Status */}
          <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              {idx === 0 && <Activity className="size-3.5 text-[#D4FF00]" />}
              {idx === 1 && <Cpu className="size-3.5 text-[#0066FF]" />}
              {idx === 2 && <CheckCircle2 className="size-3.5 text-[#FF5500]" />}
              <span className="font-mono text-xs font-semibold text-white tracking-wide">
                {item.agent}
              </span>
            </div>
            <span
              className="rounded border px-1.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase"
              style={{
                borderColor: `${item.tagColor}40`,
                color: item.tagColor,
                backgroundColor: `${item.tagColor}15`,
              }}
            >
              {item.status}
            </span>
          </div>

          {/* Action & Metric */}
          <div className="pt-2">
            <p className="text-xs text-[#94A3B8]">{item.action}</p>
            <p className="mt-1 font-mono text-[0.7rem] text-white font-medium">
              {item.metric}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}