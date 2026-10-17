import SectionWrapper from "./SectionWrapper";
import { Shield, Brain, Server, Terminal, Wrench } from "lucide-react";

interface CapabilityCategory {
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  capabilities: { name: string; context: string }[];
}

const capabilityMatrix: CapabilityCategory[] = [
  {
    title: "Cybersecurity & Systems Defense",
    tag: "PRIMARY VECTOR",
    icon: Shield,
    capabilities: [
      { name: "Active Directory Security", context: "Temporal Hypergraph Attack Path Analysis (HyperAD)" },
      { name: "Intrusion Detection (IDS/IPS)", context: "Kernel-level Scapy packet capture & ML classifiers (SmartSecure)" },
      { name: "Model Interpretability", context: "SHAP Explainability for real-time security alerts" },
      { name: "Network Protocol Analysis", context: "Wireshark, Nmap, bidirectional CICIDS flow aggregation" },
      { name: "Database-Level Security", context: "Row-Level Security (RLS) policies & security_barrier views" },
    ],
  },
  {
    title: "AI / Machine Learning & Computer Vision",
    tag: "INFERENCE & RAG",
    icon: Brain,
    capabilities: [
      { name: "Retrieval-Augmented Generation", context: "MedAssist clinical vector pipelines (50k+ embeddings)" },
      { name: "High-Speed LLM Inference", context: "Groq API sub-second response times with JSON schema enforcement" },
      { name: "Computer Vision & Biometrics", context: "DeepFace facial geometry & OpenCV real-time video analytics" },
      { name: "Vegetation & Remote Sensing", context: "Deterministic HSV segmentation for Canopy Health Index" },
      { name: "Ensemble Machine Learning", context: "Random Forest & Gradient Boosting for anomaly classification" },
    ],
  },
  {
    title: "Distributed Backend & Architecture",
    tag: "SERVICES & APIs",
    icon: Server,
    capabilities: [
      { name: "FastAPI & Python Microservices", context: "Containerized REST APIs with SlowAPI rate limiting" },
      { name: "Node.js & Express IPC", context: "Spawning C binaries with regex sanitization & stdout piping" },
      { name: "Relational Data Modeling", context: "PostgreSQL 19+ table schemas with custom triggers & SQLAlchemy" },
      { name: "Real-Time Concurrency", context: "Supabase real-time subscriptions, WebSockets & Socket.IO" },
      { name: "Cloud & Microservices", context: "Docker, AWS App Runner, ECR, AWS Lambda & Vercel" },
    ],
  },
  {
    title: "Core Languages & Low-Level Foundations",
    tag: "RUNTIMES & MEMORY",
    icon: Terminal,
    capabilities: [
      { name: "C / C++ (POSIX Systems)", context: "pthreads, shared memory, IPC semaphores & UNIX socket programming" },
      { name: "Python", context: "FastAPI, Flask, Scapy, NumPy, Scikit-learn, OpenCV" },
      { name: "TypeScript & JavaScript", context: "Next.js, React 18, Node.js, strict typing & state management" },
      { name: "SQL & Relational Logic", context: "PostgreSQL triggers, schema constraints, RLS policies" },
      { name: "Dart & Flutter", context: "Cross-platform mobile with native C++/Swift bridges (TrustCircle)" },
    ],
  },
  {
    title: "Software Engineering & Infrastructure",
    tag: "TOOLING & LIFECYCLE",
    icon: Wrench,
    capabilities: [
      { name: "Linux Administration", context: "UNIX systems, shell scripting (zsh/bash), process management" },
      { name: "CI/CD & DevOps", context: "GitHub Actions, automated testing, container deployment" },
      { name: "Cryptographic Operations", context: "AES-256 chat payload encryption, JWT authentication flows" },
      { name: "Hardware Edge Computing", context: "Arduino & ESP microcontroller firmware with sensor relays" },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" index="06" tag="CAPABILITIES MATRIX">
      <div className="mb-10">
        <h2 className="editorial-heading">
          Technical Capabilities Matrix
        </h2>
        <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
          Structured inventory of engineering specializations, verifiable architectures, and runtimes
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilityMatrix.map((group) => (
          <div
            key={group.title}
            className="dossier-card p-6 flex flex-col justify-between group hover:border-accent/40 transition-colors"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <group.icon className="w-4 h-4 text-accent" />
                  <h3 className="heading-font font-bold text-foreground text-sm">
                    {group.title}
                  </h3>
                </div>
                <span className="mono text-[9px] text-muted-foreground uppercase font-semibold">
                  {group.tag}
                </span>
              </div>

              {/* Capability List */}
              <ul className="space-y-3">
                {group.capabilities.map((cap) => (
                  <li key={cap.name} className="text-xs">
                    <div className="font-semibold text-foreground/90 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-none bg-accent" />
                      {cap.name}
                    </div>
                    <p className="mono text-[11px] text-muted-foreground pl-2.5 mt-0.5 leading-snug">
                      {cap.context}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-border/30 flex items-center justify-between text-[10px] mono text-muted-foreground/60">
              <span>STATUS: VERIFIED</span>
              <span>INDEX: // 2026</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;