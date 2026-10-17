import SectionWrapper from "./SectionWrapper";
import { Shield, Network, Terminal, Cpu, Key, Lock, CheckCircle2 } from "lucide-react";

const technicalFocusAreas = [
  {
    icon: Shield,
    title: "Graph Intelligence & AD Defense",
    detail: "Modeling enterprise identity relationships as temporal hypergraphs in HyperAD to detect multi-hop privilege escalation attack paths before exploitation.",
  },
  {
    icon: Network,
    title: "Packet Inspection & ML IDS",
    detail: "High-velocity Scapy packet capture, bidirectional flow aggregation, and multi-stage ML threat classifiers with SHAP interpretability in SmartSecure.",
  },
  {
    icon: Terminal,
    title: "Low-Level IPC & Execution Sandboxes",
    detail: "Safely spawning and tracing 100 compiled C executables via Node.js IPC, parsing memory stdout into GPU-accelerated visualizations in Master Algorithm.",
  },
  {
    icon: Cpu,
    title: "Multi-Tenant Cloud & AI Workflows",
    detail: "Sub-second Groq inference engines with strict JSON enforcement, PostgreSQL Row-Level Security, and Docker microservices on AWS App Runner in CatchUpX.",
  },
];

const consoleSpecs = [
  { key: "[CANDIDATE_ID]", val: "AVISHKAR MORE", status: "VERIFIED" },
  { key: "[INSTITUTION]", val: "RV College of Engineering", status: "ACTIVE" },
  { key: "[ACADEMIC_INDEX]", val: "9.74 CGPA (Top of Batch)", status: "RANK_1" },
  { key: "[SPECIALIZATION]", val: "CSE (Cyber Security) • 3rd Year", status: "CORE" },
  { key: "[EXAM_RANKING]", val: "JEE Adv AIR 15,207 • 99.002%ile MHT-CET", status: "TOP_1%" },
  { key: "[CORE_DIRECTIVES]", val: "Active Directory • Network IDS • IPC", status: "ARMED" },
  { key: "[LEADERSHIP_ROLE]", val: "GDG RVCE Lead • Heapify Co-Founder", status: "500+ ENG" },
];

const cyberSpecializationMap = [
  { label: "Temporal Hypergraphs", metric: "Active Directory Defense", tag: "AI+SEC" },
  { label: "Intrusion Detection", metric: "Scapy Flow Aggregation", tag: "KERNEL" },
  { label: "IPC Memory Sandbox", metric: "Pure C Executable Tracing", tag: "POSIX" },
  { label: "RAG & Vector Pipelines", metric: "50k+ Clinical Embeddings", tag: "INFERENCE" },
];

export const AboutSection = () => {
  return (
    <SectionWrapper id="about" index="02" tag="ENGINEERING DOSSIER">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="editorial-heading">
          Technical Profile &amp; Core Systems
        </h2>
        <p className="mono text-xs text-muted-foreground uppercase tracking-wider">
          Systematic overview of architecture, academic rigor, and research vectors
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* ── Left Column: Narrative & Focus Pillars (7 cols) ── */}
        <div className="lg:col-span-7 space-y-6">
          <div className="dossier-card p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="cyber-label text-accent font-semibold flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" />
                EXECUTIVE SUMMARY // PROFILE SPEC
              </span>
              <span className="mono text-[10px] text-emerald-400 font-medium">
                ● STATUS: VERIFIED
              </span>
            </div>

            <p className="text-foreground/95 text-base sm:text-lg font-medium leading-relaxed">
              I am an engineer focused on defensive cybersecurity, distributed systems architecture, and intelligent automated workflows.
            </p>

            <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed">
              Currently pursuing a B.E. in Computer Science (Cyber Security) at RV College of Engineering with an academic standing of <strong className="text-foreground font-semibold">9.74 CGPA</strong>. My projects span from temporal hypergraph analytics for enterprise Active Directory defense to kernel-adjacent network packet sniffing and inter-process C sandbox execution.
            </p>

            <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed">
              Beyond individual engineering, I serve as Development Lead at <strong className="text-foreground">GDG RVCE</strong> (coordinating hackathon operations for 800+ developers) and Co-Founder of <strong className="text-foreground">Heapify Global Community</strong> (500+ active members), architecting web infrastructure and leading technical workshops.
            </p>
          </div>

          {/* 4 Technical Focus Pillars */}
          <div className="grid sm:grid-cols-2 gap-4">
            {technicalFocusAreas.map((area) => (
              <div
                key={area.title}
                className="dossier-card p-5 group transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 bg-secondary text-accent border border-accent/40 group-hover:bg-accent group-hover:text-black transition-colors">
                    <area.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm uppercase">
                    {area.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column: High-Tech Dossier Console Inspector (5 cols) ── */}
        <div className="lg:col-span-5 space-y-4">
          <div className="terminal-window border-2 border-accent light:border-black rounded-none overflow-hidden shadow-[6px_6px_0px_0px_#06b6d4] light:shadow-[6px_6px_0px_0px_#000000] scanline-box">
            {/* Console Titlebar */}
            <div className="terminal-titlebar flex items-center justify-between px-4 py-2.5 bg-[#0f131e] border-b-2 border-border/80 light:border-black">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-red-500 border border-red-400" />
                <span className="w-2.5 h-2.5 bg-amber-400 border border-amber-300" />
                <span className="w-2.5 h-2.5 bg-emerald-400 border border-emerald-300" />
              </div>
              <span className="mono text-[10px] text-zinc-300 tracking-wider uppercase font-black">
                DOSSIER_TELEMETRY.SYS
              </span>
              <span className="mono text-[9px] text-emerald-400 font-bold border border-emerald-500/40 px-1 bg-emerald-950/40">
                [SECURE]
              </span>
            </div>

            {/* Console Body */}
            <div className="p-5 mono text-xs space-y-3 bg-[#05070d] text-zinc-100">
              <div className="text-[10px] text-cyan-400 uppercase tracking-widest border-b border-zinc-800 pb-2 font-bold">
                // SYSTEM TELEMETRY &bull; CREDENTIAL AUDIT
              </div>

              {consoleSpecs.map((spec) => (
                <div key={spec.key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 text-[11px] border-b border-zinc-900/80">
                  <span className="text-cyan-400 font-bold">{spec.key}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-100 font-bold">{spec.val}</span>
                    <span className="px-1.5 py-0.5 text-[9px] bg-zinc-900 text-emerald-400 border border-emerald-500/40 font-bold">
                      {spec.status}
                    </span>
                  </div>
                </div>
              ))}

              <div className="border-t border-zinc-800 my-2 pt-2.5 text-[10px] text-zinc-400 uppercase tracking-wider font-bold">
                // ACTIVE DEFENSE SPECIALIZATION MAP
              </div>

              <div className="space-y-2">
                {cyberSpecializationMap.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-[11px] bg-zinc-900/80 p-2 border border-zinc-800">
                    <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
                      <Key className="w-3.5 h-3.5 text-cyan-400" />
                      {item.label}
                    </span>
                    <span className="text-cyan-400 font-mono text-[10px] font-bold">
                      {item.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Console Footer */}
            <div className="px-4 py-2 bg-[#06080e] border-t border-zinc-800 flex items-center justify-between mono text-[9px] text-zinc-400">
              <span>INTEGRITY_HASH: 0x9F74RVCE</span>
              <span className="text-emerald-400">● 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Quick Metrics Callout Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="dossier-card p-4">
              <p className="cyber-label text-[9px] mb-1">BATCH ACADEMIC RANK</p>
              <p className="text-2xl font-bold text-accent heading-font">
                9.74 <span className="text-xs font-mono font-normal text-muted-foreground">/ 10</span>
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Top of RVCE CSE</p>
            </div>

            <div className="dossier-card p-4">
              <p className="cyber-label text-[9px] mb-1">ENGINEERING PROJECTS</p>
              <p className="text-2xl font-bold text-foreground heading-font">
                15+
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Production &amp; Research</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;