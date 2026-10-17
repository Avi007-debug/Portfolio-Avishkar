import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "whoami", output: "Avishkar More" },
  { cmd: "cat role.txt", output: "Cybersecurity & Distributed Systems Engineer" },
  { cmd: "echo $ACADEMICS", output: "9.74 CGPA @ RV College of Engineering" },
  { cmd: "ls focus/", output: "HyperAD  SmartSecureIDS  CatchUpX  MasterAlgo" },
  { cmd: "./status.sh", output: "● ACTIVE — Open for 2026 Internships & Research" },
];

export const TerminalIntro: React.FC = () => {
  const [lines, setLines] = useState<{ text: string; isCommand: boolean; done: boolean }[]>([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState<"cmd" | "output">("cmd");
  const [isInteractive, setIsInteractive] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-typing initial sequence
  useEffect(() => {
    if (isInteractive) return;
    if (currentCmd >= commands.length) return;

    const { cmd, output } = commands[currentCmd];

    if (phase === "cmd") {
      if (currentChar <= cmd.length) {
        const timeout = setTimeout(() => {
          setLines((prev) => {
            const updated = [...prev];
            const idx = currentCmd * 2;
            updated[idx] = { text: `❯ ${cmd.slice(0, currentChar)}`, isCommand: true, done: false };
            return updated;
          });
          setCurrentChar((c) => c + 1);
        }, 26 + Math.random() * 16);
        return () => clearTimeout(timeout);
      } else {
        setLines((prev) => {
          const updated = [...prev];
          updated[currentCmd * 2] = { text: `❯ ${cmd}`, isCommand: true, done: true };
          return updated;
        });
        setPhase("output");
        setCurrentChar(0);
      }
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => {
          const updated = [...prev];
          updated[currentCmd * 2 + 1] = { text: output, isCommand: false, done: true };
          return updated;
        });
        setCurrentCmd((c) => c + 1);
        setPhase("cmd");
        setCurrentChar(0);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentCmd, currentChar, phase, isInteractive]);

  // Execute a command manually on chip click
  const runManualCommand = (targetCmd: string) => {
    setIsInteractive(true);
    if (targetCmd === "clear") {
      setLines([]);
      return;
    }

    const matched = commands.find((c) => c.cmd === targetCmd);
    if (!matched) return;

    // Append command and output directly with animation
    setLines((prev) => [
      ...prev,
      { text: `❯ ${matched.cmd}`, isCommand: true, done: true },
      { text: matched.output, isCommand: false, done: true },
    ]);

    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const isTyping = !isInteractive && currentCmd < commands.length;

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <div className="terminal-window border-2 border-accent light:border-black rounded-none overflow-hidden shadow-[6px_6px_0px_0px_#06b6d4] light:shadow-[6px_6px_0px_0px_#000000] scanline-box">
        {/* Brutalist Title bar */}
        <div className="terminal-titlebar flex items-center justify-between px-3.5 py-2 border-b-2 border-border/80 light:border-black bg-[#0d1220]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-none border border-red-400" />
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-none border border-amber-300" />
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-none border border-emerald-300" />
          </div>
          <span className="mono text-[10px] text-zinc-300 tracking-widest uppercase font-bold">
            AVISHKAR@RVCE: ~ (INTERACTIVE CLI)
          </span>
          <span className="mono text-[9px] text-cyan-400 font-bold border border-cyan-500/40 px-1 bg-cyan-950/40">
            [SYS_OK]
          </span>
        </div>

        {/* Terminal body */}
        <div className="terminal-body bg-[#05070d] p-4 md:p-5 mono text-xs md:text-sm space-y-2.5 min-h-[220px] max-h-[270px] overflow-y-auto">
          {lines.map((line, i) =>
            line ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={
                  line.isCommand
                    ? "text-cyan-400 font-bold tracking-wide"
                    : "text-zinc-100 pl-3.5 border-l-2 border-cyan-500/40 text-xs md:text-[13px] leading-relaxed font-mono"
                }
              >
                {line.text}
              </motion.div>
            ) : null
          )}
          {isTyping && (
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse rounded-none ml-1 align-middle" />
          )}
          {!isTyping && (
            <div className="text-cyan-400 text-xs pt-1 font-bold flex items-center gap-1">
              <span>❯</span>
              <span className="animate-pulse">_</span>
              <span className="text-[10px] text-zinc-500 font-normal ml-2">
                (click any chip below to execute)
              </span>
            </div>
          )}
          <div ref={terminalEndRef} />
        </div>

        {/* Interactive Command Chips Bar */}
        <div className="p-2 bg-[#080c16] border-t border-zinc-800/80 flex items-center gap-1.5 overflow-x-auto text-[10px] mono">
          <span className="text-zinc-500 font-bold px-1 hidden sm:inline">CLI:</span>
          {commands.map((c) => (
            <button
              key={c.cmd}
              type="button"
              onClick={() => runManualCommand(c.cmd)}
              className="px-2 py-0.5 border border-zinc-700 bg-zinc-900/90 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:border-cyan-300 font-bold rounded-none whitespace-nowrap transition-colors cursor-pointer"
            >
              {c.cmd}
            </button>
          ))}
          <button
            type="button"
            onClick={() => runManualCommand("clear")}
            className="px-2 py-0.5 border border-red-500/50 bg-red-950/30 text-red-400 hover:bg-red-500 hover:text-white font-bold rounded-none whitespace-nowrap transition-colors ml-auto cursor-pointer"
          >
            clear
          </button>
        </div>

        {/* Brutalist Console Status Bar */}
        <div className="px-3.5 py-1.5 bg-[#0a0f1d] border-t-2 border-border/60 light:border-black flex items-center justify-between mono text-[10px] text-zinc-400">
          <span className="text-zinc-400">UTF-8 // ZSH INTERACTIVE</span>
          <span className="text-emerald-400 font-bold tracking-wider">[STATUS: ONLINE]</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
