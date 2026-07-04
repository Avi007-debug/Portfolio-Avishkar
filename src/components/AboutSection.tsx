import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Shield, Terminal, ShieldAlert, Cpu, Lock, Key, Server } from "lucide-react";

const securityMetrics = [
  { label: "Active Directory Audit", value: "HyperAD" },
  { label: "IDS ML Classifier", value: "SmartSecure" },
  { label: "Threat Detection Rate", value: "Real-time" },
  { label: "Identity Graph Nodes", value: "Temporal" },
];

const cyberSkills = [
  { category: "Network Security", level: "Active Monitoring" },
  { category: "Active Directory", level: "Attack Path Analysis" },
  { category: "Intrusion Detection", level: "Scapy Sniffing & ML" },
  { category: "Security Analytics", level: "Threat Intel Platforms" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="flex flex-col gap-2 mb-12">
      <h2 className="section-heading mb-1">
        <span className="gradient-text">&gt;_ Security</span> Profile
      </h2>
      <p className="text-xs text-accent mono uppercase tracking-widest">// decrypting candidate payload...</p>
    </div>

    <div className="grid lg:grid-cols-12 gap-12 items-start">
      {/* ── Left Column: Narrative (7 cols) ── */}
      <div className="lg:col-span-7 space-y-6">
        <div className="glass-card p-6 border-l-4 border-accent relative overflow-hidden">
          <div className="absolute top-2 right-2 opacity-5">
            <Shield className="w-24 h-24 text-accent" />
          </div>
          <h3 className="mono text-xs text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" /> Identity & Objective
          </h3>
          <p className="text-secondary-foreground leading-relaxed text-sm md:text-base">
            I'm a 2nd-year CSE (Cybersecurity) student at RV College of Engineering with a strong focus on building <strong className="text-accent font-semibold">secure, intelligent, and distributed full-stack systems</strong>.
          </p>
          <p className="text-secondary-foreground leading-relaxed mt-4 text-sm md:text-base">
            My work sits at the intersection of <strong className="text-accent font-semibold">Cybersecurity, Artificial Intelligence (AI/ML), and Cloud Architecture</strong>. I specialize in developing graph-based threat analysis engines, real-time ML pipelines, and serverless full-stack web applications.
          </p>
        </div>

        {/* Security Metrics Widget */}
        <div className="grid grid-cols-2 gap-4">
          {securityMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 border border-border/40 hover:border-accent/30 transition-all cursor-default"
            >
              <p className="text-[10px] text-muted-foreground uppercase mono tracking-wider">{metric.label}</p>
              <p className="text-lg font-bold text-foreground heading-font mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Right Column: Terminal Scan / Specs (5 cols) ── */}
      <div className="lg:col-span-5 space-y-6">
        {/* Terminal Scan Widget */}
        <div className="terminal-window rounded-xl overflow-hidden border border-white/5 shadow-xl">
          <div className="terminal-titlebar flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-black/40">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] text-white/40 mono ml-2">sys_monitor.sh</span>
            <span className="ml-auto text-[10px] text-green-400/80 font-semibold mono">SECURE</span>
          </div>

          <div className="p-5 mono text-xs space-y-3 bg-black/80 text-green-400">
            <div className="flex justify-between">
              <span>[SEC_CLEARENCE]</span>
              <span className="text-white">LEVEL_3_CORE</span>
            </div>
            <div className="flex justify-between">
              <span>[CORE_FIREWALL]</span>
              <span className="text-white">ACTIVE (STACK_SHIELD)</span>
            </div>
            <div className="flex justify-between">
              <span>[INTEGRITY_CHECK]</span>
              <span className="text-white">9.70 CGPA (VERIFIED)</span>
            </div>
            <div className="border-t border-white/10 my-2 pt-2 text-[10px] text-muted-foreground uppercase">
              // Threat Specialization Map
            </div>
            <div className="space-y-1.5 text-white/80">
              {cyberSkills.map((skill, idx) => (
                <div key={idx} className="flex justify-between text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Key className="w-3 h-3 text-accent" />
                    {skill.category}
                  </span>
                  <span className="text-accent font-semibold">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;