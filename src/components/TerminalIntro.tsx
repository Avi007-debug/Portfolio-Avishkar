import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "whoami", output: "Avishkar More" },
  { cmd: "cat role.txt", output: "Cybersecurity & Distributed Systems Engineer" },
  { cmd: "echo $ACADEMICS", output: "9.74 CGPA @ RV College of Engineering" },
  { cmd: "ls focus/", output: "HyperAD  SmartSecureIDS  CatchUpX  MasterAlgo" },
  { cmd: "./status.sh", output: "● ACTIVE — Open for 2026 Internships & Research" },
];

const TerminalIntro = () => {
  const [lines, setLines] = useState<{ text: string; isCommand: boolean; done: boolean }[]>([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState<"cmd" | "output">("cmd");

  useEffect(() => {
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
        }, 28 + Math.random() * 18);
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
      }, 160);
      return () => clearTimeout(timeout);
    }
  }, [currentCmd, currentChar, phase]);

  const isTyping = currentCmd < commands.length;

  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <div className="terminal-window rounded border border-border/80 overflow-hidden shadow-xl scanline-box">
        {/* Title bar */}
        <div className="terminal-titlebar flex items-center justify-between px-3.5 py-2.5 border-b border-border/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="mono text-[10px] text-muted-foreground/80 tracking-widest uppercase">
            avishkar@rvce: ~
          </span>
          <span className="mono text-[9px] text-accent/80 font-mono tracking-wider">
            [SYS_OK]
          </span>
        </div>

        {/* Terminal body */}
        <div className="terminal-body bg-[#0a0d16] p-4 md:p-5 mono text-xs md:text-sm space-y-2.5 min-h-[220px] max-h-[290px] overflow-y-auto">
          {lines.map((line, i) =>
            line ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={
                  line.isCommand
                    ? "text-cyan-400 font-semibold tracking-wide"
                    : "text-zinc-100 pl-3.5 border-l border-zinc-700/80 text-xs md:text-[13px] leading-relaxed font-mono"
                }
              >
                {line.text}
              </motion.div>
            ) : null
          )}
          {isTyping && (
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse rounded-none ml-1 align-middle" />
          )}
          {!isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400/80 text-xs pt-1"
            >
              ❯ <span className="animate-pulse">_</span>
            </motion.div>
          )}
        </div>

        {/* Status footer bar */}
        <div className="px-3.5 py-1.5 bg-black/40 border-t border-border/40 flex items-center justify-between mono text-[9px] text-muted-foreground/70">
          <span>UTF-8 // ZSH</span>
          <span>BUFFER: STABLE</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
