import React from "react";

const MARQUEE_ITEMS = [
  "TEMPORAL ATTACK PATHS",
  "ACTIVE DIRECTORY REASONING",
  "KERNEL-LEVEL PACKET INTRUSION",
  "HIGH-CONCURRENCY POSIX C",
  "RVCE // CGPA 9.74",
  "TOP 1% STANDINGS",
  "RAG & MULTI-AGENT PIPELINES",
  "DISTRIBUTED CONSENSUS SYSTEMS",
];

export const CyberMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden border-y-2 border-border/80 light:border-black bg-black text-cyan-400 py-2 select-none font-mono text-xs uppercase tracking-widest shadow-[0_4px_0_0_rgba(6,182,212,0.15)] my-6">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] gap-8">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 flex-shrink-0">
            <span className="font-black text-zinc-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 inline-block" />
              {item}
            </span>
            <span className="text-cyan-500/70 font-bold">///</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberMarquee;
