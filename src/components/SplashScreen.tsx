import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AmLogo from "./AmLogo";

interface SplashScreenProps {
  onComplete?: () => void;
}

const BOOT_STAGES = [
  { step: "01/05", tag: "KERNEL_INIT", text: "MOUNTING SECURE DISTRIBUTED RUNTIME & CRYPTO HANDSHAKE" },
  { step: "02/05", tag: "GRAPH_ENGINE", text: "LOADING ACTIVE DIRECTORY ATTACK-PATH ANALYSIS MODULES" },
  { step: "03/05", tag: "CREDENTIALS", text: "VERIFYING ACADEMICS: RVCE // CSE-CYBER // CGPA: 9.74 (TOP 1%)" },
  { step: "04/05", tag: "INTRUSION_FILTER", text: "COMPILING KERNEL PACKET FILTERS & REAL-TIME ML SCANNERS" },
  { step: "05/05", tag: "ACCESS_GRANTED", text: "SYSTEM NOMINAL // TECHNICAL DOSSIER DEPLOYED SUCCESSFULLY" },
];

const TOTAL_BLOCKS = 24;

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Deliberate, paced brutalist progression (~3.2 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDismissed(true);
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        // Smooth, controlled increments of 1-3% every 65ms
        const increment = Math.floor(Math.random() * 3) + 2;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 65);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentStageIndex = Math.min(
    Math.floor((progress / 100) * BOOT_STAGES.length),
    BOOT_STAGES.length - 1
  );
  const currentStage = BOOT_STAGES[currentStageIndex];
  const activeBlocksCount = Math.floor((progress / 100) * TOTAL_BLOCKS);

  const handleSkip = () => {
    setProgress(100);
    setIsDismissed(true);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-4 sm:p-8 bg-[#05070c] text-zinc-100 select-none overflow-hidden font-mono"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        >
          {/* Top Brutalist Caution / Marquee Header Bar */}
          <div className="w-full max-w-3xl flex items-center justify-between border-2 border-zinc-800 bg-black p-2 sm:px-4 shadow-[4px_4px_0px_0px_#06b6d4]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-cyan-400 animate-pulse" />
              <span className="text-xs font-black tracking-widest text-cyan-400 uppercase">
                BOOTLOADER // SYS_INIT.EXE
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-zinc-400">
              <span className="hidden sm:inline border border-zinc-700 px-2 py-0.5 bg-zinc-900">
                CLEARANCE: L4_CONFIDENTIAL
              </span>
              <span className="border border-cyan-500/40 text-cyan-400 px-2 py-0.5 bg-cyan-950/40 font-bold">
                RVCE // NODE_01
              </span>
            </div>
          </div>

          {/* Central Brutalist Window Box */}
          <div className="my-auto w-full max-w-xl">
            <div className="border-2 sm:border-[3px] border-cyan-400 bg-black text-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_#06b6d4] relative">
              {/* Window Top Stencil Bar */}
              <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  {/* Brutalist Hard-Framed Logo */}
                  <div className="border-2 border-cyan-400 bg-zinc-950 p-2 shadow-[3px_3px_0px_0px_#ffffff]">
                    <AmLogo className="h-7 w-auto" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight uppercase font-sans">
                      AVISHKAR MORE
                    </h2>
                    <span className="text-[10px] tracking-wider text-cyan-400 font-bold uppercase block">
                      SYSTEMS ARCHITECT &bull; CYBERSECURITY
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 hidden sm:flex">
                  <div className="w-3.5 h-3.5 border border-zinc-600 bg-zinc-900 flex items-center justify-center text-[9px] text-zinc-400">_</div>
                  <div className="w-3.5 h-3.5 border border-zinc-600 bg-zinc-900 flex items-center justify-center text-[9px] text-zinc-400">□</div>
                  <div className="w-3.5 h-3.5 border border-red-500/80 bg-red-950 flex items-center justify-center text-[9px] text-red-400 font-bold">×</div>
                </div>
              </div>

              {/* Hardware / Academic Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] mb-6">
                <div className="border border-zinc-800 bg-zinc-950 p-2">
                  <span className="text-zinc-500 block text-[9px]">INSTITUTE</span>
                  <span className="font-bold text-zinc-200">RVCE BLR</span>
                </div>
                <div className="border border-zinc-800 bg-zinc-950 p-2">
                  <span className="text-zinc-500 block text-[9px]">ACCREDITATION</span>
                  <span className="font-bold text-cyan-400">CGPA 9.74</span>
                </div>
                <div className="border border-zinc-800 bg-zinc-950 p-2">
                  <span className="text-zinc-500 block text-[9px]">ENGINEERING</span>
                  <span className="font-bold text-zinc-200">CSE CYBER</span>
                </div>
                <div className="border border-zinc-800 bg-zinc-950 p-2">
                  <span className="text-zinc-500 block text-[9px]">STANDINGS</span>
                  <span className="font-bold text-emerald-400">TOP 1% JEE</span>
                </div>
              </div>

              {/* Active Stage Telemetry Log Box */}
              <div className="border-2 border-zinc-800 bg-[#090d16] p-3 mb-5">
                <div className="flex items-center justify-between text-[10px] text-cyan-400 font-bold mb-1">
                  <span>&gt;&gt; STAGE {currentStage.step} [{currentStage.tag}]</span>
                  <span className="text-zinc-400">{progress}%</span>
                </div>
                <p className="text-xs text-zinc-200 font-mono tracking-tight leading-relaxed">
                  {currentStage.text}
                </p>
              </div>

              {/* Segmented Chunky Brutalist Progress Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-zinc-400 uppercase tracking-widest text-[10px]">
                    INITIALIZATION PROGRESS
                  </span>
                  <span className="text-cyan-400 text-sm font-black">
                    [{progress.toString().padStart(3, "0")}%]
                  </span>
                </div>

                {/* Chunky Brutalist Block Track */}
                <div className="border-2 border-zinc-800 bg-zinc-950 p-1 flex gap-1 h-6 items-center">
                  {Array.from({ length: TOTAL_BLOCKS }).map((_, idx) => {
                    const isFilled = idx < activeBlocksCount;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 h-full transition-all duration-75 ${
                          isFilled
                            ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                            : "bg-zinc-900 border border-zinc-800/80"
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                  <span>ALLOC: {activeBlocksCount}/{TOTAL_BLOCKS} BLOCKS</span>
                  <span>LATENCY: 14MS</span>
                  <span className={progress === 100 ? "text-emerald-400 font-bold" : "text-cyan-400"}>
                    {progress === 100 ? "STATUS: READY" : "STATUS: MOUNTING..."}
                  </span>
                </div>
              </div>

              {/* Brutalist Action Button */}
              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
                <span className="text-[10px] text-zinc-500 uppercase">
                  PRESS [SPACE] OR CLICK TO ENTER
                </span>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="border-2 border-cyan-400 bg-cyan-400 text-black font-black uppercase text-xs px-4 py-2 shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#ffffff] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>ENTER DOSSIER</span>
                  <span>&gt;&gt;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Industrial Stencil Strip */}
          <div className="w-full max-w-3xl flex items-center justify-between text-[10px] text-zinc-500 border-t border-zinc-800 pt-2 uppercase">
            <span>AVISHKAR MORE &bull; CYBERSECURITY DOSSIER</span>
            <span className="text-zinc-600 hidden sm:inline">SHA256: 9e8a7f4b2c1d0e5a</span>
            <span>SYSTEM READY</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
