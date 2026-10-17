import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github, FileText, Copy, Check, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "avimore088@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <SectionWrapper id="contact" index="08" tag="DIRECT COMMUNICATION">
      <div className="max-w-4xl mx-auto py-8">
        <div className="border-b border-border/60 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>COMMUNICATION CHANNEL // OPEN</span>
          </div>

          <h2 className="heading-font text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tight leading-[1.05] mb-4">
            Let's build secure, intelligent systems together.
          </h2>

          <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
            Currently open to software engineering internships, cybersecurity research collaborations, and distributed systems design roles. Direct responses typically within 24 hours.
          </p>
        </div>

        {/* Prominent Email Dispatcher Box */}
        <div className="dossier-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 bg-secondary/20">
          <div className="space-y-1">
            <span className="cyber-label text-accent font-semibold">
              OFFICIAL INBOX // PRIMARY DISPATCH
            </span>
            <p className="mono text-lg sm:text-2xl font-bold text-foreground">
              {email}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              className="btn-cyber-outline text-xs py-2.5 px-4"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="btn-cyber-primary text-xs py-2.5 px-5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Launch Mail</span>
            </a>
          </div>
        </div>

        {/* Secondary Channels Grid */}
        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href="https://www.linkedin.com/in/avishkarmore/"
            target="_blank"
            rel="noreferrer"
            className="dossier-card p-5 group flex items-center justify-between hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-secondary text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">LinkedIn</p>
                <p className="mono text-[10px] text-muted-foreground">/in/avishkarmore</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://github.com/Avi007-debug"
            target="_blank"
            rel="noreferrer"
            className="dossier-card p-5 group flex items-center justify-between hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-secondary text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">GitHub</p>
                <p className="mono text-[10px] text-muted-foreground">@Avi007-debug</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="dossier-card p-5 group flex items-center justify-between hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-secondary text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Curriculum Vitae</p>
                <p className="mono text-[10px] text-muted-foreground">PDF Document</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;