import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code, Server, Brain, Shield, Cloud, Terminal } from "lucide-react";

interface TechCategory {
  name: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  angle: number;
}

const categories: TechCategory[] = [
  {
    name: "Languages",
    tag: "CORE RUNTIMES",
    icon: Code,
    items: ["Python", "TypeScript", "JavaScript", "C (POSIX)", "C++", "SQL"],
    angle: 0,
  },
  {
    name: "Frameworks & APIs",
    tag: "SERVICES",
    icon: Server,
    items: ["React 18", "Next.js", "FastAPI", "Node.js / Express", "Flask", "Flutter"],
    angle: 60,
  },
  {
    name: "AI & Computer Vision",
    tag: "INFERENCE & RAG",
    icon: Brain,
    items: ["RAG Pipelines", "Groq LLM API", "OpenCV", "DeepFace", "Scikit-Learn", "SHAP"],
    angle: 120,
  },
  {
    name: "Cybersecurity",
    tag: "THREAT DEFENSE",
    icon: Shield,
    items: ["Temporal Hypergraphs", "Active Directory", "Scapy Packet Sniffing", "Intrusion Detection", "PostgreSQL RLS"],
    angle: 180,
  },
  {
    name: "Database & Cloud",
    tag: "DATA & ORCHESTRATION",
    icon: Cloud,
    items: ["PostgreSQL (Triggers)", "Supabase", "Docker ECR", "AWS App Runner", "AWS Lambda", "SQLAlchemy"],
    angle: 240,
  },
  {
    name: "Systems & Low-Level",
    tag: "IPC & KERNEL",
    icon: Terminal,
    items: ["POSIX pthreads", "IPC Memory Tracing", "Linux (ZSH)", "UNIX Sockets", "Arduino / ESP"],
    angle: 300,
  },
];

// Orbit geometry constants
const SIZE = 640;
const CX = SIZE / 2; // 320
const CY = SIZE / 2; // 320
const RADIUS = 230;
const NODE = 118;
const CENTER_R = 72;

function tooltipClass(angle: number): string {
  if (angle === 0) return "left-full ml-3 top-1/2 -translate-y-1/2";
  if (angle > 0 && angle <= 135) return "top-full mt-3 left-1/2 -translate-x-1/2";
  if (angle === 180) return "right-full mr-3 top-1/2 -translate-y-1/2";
  return "bottom-full mb-3 left-1/2 -translate-x-1/2";
}

export const TechStackVisualization = () => (
  <SectionWrapper id="skills" index="06" tag="GRAPH CAPABILITIES ARCHITECTURE">
    <div className="mb-10 text-center md:text-left">
      <h2 className="editorial-heading">
        Technical Capabilities &amp; System Graph
      </h2>
      <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
        Interactive topological network map depicting full-stack engineering and security vectors
      </p>
    </div>

    {/* ── Orbital Graph Visualization — Desktop ── */}
    <div className="hidden lg:flex justify-center my-8">
      <div className="relative select-none" style={{ width: SIZE, height: SIZE }}>
        {/* SVG layer: ring guides + spoke lines */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
        >
          {/* Outer radar orbit guide ring */}
          <circle
            cx={CX}
            cy={CY}
            r={RADIUS + 6}
            stroke="currentColor"
            className="text-border/60"
            strokeWidth="1"
            fill="none"
          />
          {/* Inner guide ring */}
          <circle
            cx={CX}
            cy={CY}
            r={RADIUS * 0.55}
            stroke="currentColor"
            className="text-border/40"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Spoke lines */}
          {categories.map((cat) => {
            const rad = (cat.angle * Math.PI) / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            const x1 = CX + (CENTER_R + 8) * cos;
            const y1 = CY + (CENTER_R + 8) * sin;
            const x2 = CX + (RADIUS - NODE / 2 - 8) * cos;
            const y2 = CY + (RADIUS - NODE / 2 - 8) * sin;
            return (
              <line
                key={cat.name}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                className="text-accent/40"
                strokeWidth="1.2"
                strokeDasharray="4 3"
              />
            );
          })}
        </svg>

        {/* Center Cyber Core Node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-10"
          style={{
            width: CENTER_R * 2,
            height: CENTER_R * 2,
            left: CX - CENTER_R,
            top: CY - CENTER_R,
          }}
        >
          <div className="w-full h-full border-2 border-accent light:border-black shadow-[4px_4px_0px_0px_#06b6d4] light:shadow-[4px_4px_0px_0px_#000000] flex flex-col items-center justify-center bg-card rounded-none">
            <div className="w-2 h-2 bg-accent animate-ping mb-1" />
            <p className="text-[11px] mono text-accent font-black tracking-wider leading-tight">
              CYBER CORE
            </p>
            <p className="text-[10px] mono text-muted-foreground leading-tight uppercase font-bold">
              CAPABILITIES
            </p>
          </div>
        </motion.div>

        {/* Orbit Category Nodes */}
        {categories.map((cat, i) => {
          const rad = (cat.angle * Math.PI) / 180;
          const nodeLeft = CX + RADIUS * Math.cos(rad) - NODE / 2;
          const nodeTop = CY + RADIUS * Math.sin(rad) - NODE / 2;

          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="absolute group"
              style={{ left: nodeLeft, top: nodeTop, width: NODE, height: NODE }}
            >
              <div className="w-full h-full border-2 border-border/80 light:border-black p-3 flex flex-col items-center justify-center gap-1.5 cursor-pointer shadow-[3px_3px_0px_0px_#06b6d4] light:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all bg-card rounded-none">
                <cat.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-xs font-black text-foreground text-center leading-tight uppercase font-sans">
                  {cat.name}
                </span>
                <span className="text-[9px] mono text-muted-foreground font-bold">
                  {cat.items.length} TECHNOLOGIES
                </span>
              </div>

              {/* Detailed Hover Inspection Card */}
              <div
                className={`absolute ${tooltipClass(
                  cat.angle
                )} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 w-48`}
              >
                <div className="border-2 border-accent light:border-black p-3.5 shadow-[5px_5px_0px_0px_#06b6d4] light:shadow-[5px_5px_0px_0px_#000000] bg-card rounded-none">
                  <div className="cyber-label text-[9px] text-accent font-bold mb-1.5 pb-1 border-b border-border/60">
                    {cat.tag}
                  </div>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="text-[11px] mono text-foreground py-0.5 flex items-center gap-1.5 font-medium"
                      >
                        <span className="w-1.5 h-1.5 bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* ── Grid Fallback — Mobile & Tablet ── */}
    <div className="lg:hidden grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="dossier-card p-5"
        >
          <div className="flex items-center gap-2 mb-2 border-b border-border/40 pb-2">
            <cat.icon className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-bold text-foreground">{cat.name}</h3>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {cat.items.map((item) => (
              <span key={item} className="tech-tag text-[10px]">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechStackVisualization;
