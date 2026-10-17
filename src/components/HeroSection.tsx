import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import TerminalIntro from "./TerminalIntro";

export const HeroSection = () => {
  // Coordinated timeline animation variants with subtle cubic-bezier easing
  const easeTransition = [0.16, 1, 0.3, 1];

  const lineMaskVariants = {
    hidden: { y: "115%" },
    visible: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.85,
        ease: easeTransition,
        delay: 0.15 + i * 0.14,
      },
    }),
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: easeTransition,
        delay,
      },
    }),
  };

  return (
    <section
      id="hero"
      aria-label="Identity & Overview"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-10 px-6 max-w-7xl mx-auto w-full"
    >
      {/* ── Stage 1: Technical Dossier Header Metadata ── */}
      <motion.div
        custom={0.05}
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        className="w-full flex flex-wrap items-center justify-between gap-3 border-b-2 border-border/80 light:border-black pb-3 text-[11px] mono text-muted-foreground select-none"
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-foreground tracking-wider border-2 border-accent/80 light:border-black px-2 py-0.5 bg-card shadow-[2px_2px_0px_0px_#06b6d4] light:shadow-[2px_2px_0px_0px_#000]">
            DOSSIER // 2026.01
          </span>
          <span className="text-border">|</span>
          <span className="hidden sm:inline font-bold">RVCE // CSE (CYBERSECURITY)</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-emerald-500/80 bg-emerald-950/40 text-emerald-400 text-[10px] font-black tracking-wide shadow-[2px_2px_0px_0px_#10b981]">
            <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
            <span>PROFILE / ACTIVE</span>
          </div>
          <span className="hidden md:inline text-muted-foreground/80 font-mono">
            LOC: 12.92° N, 77.49° E
          </span>
        </div>
      </motion.div>

      {/* ── Main Asymmetric Editorial Grid ── */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto py-8">
        {/* Left Column: Typographic Centerpiece (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Identity Sub-label */}
          <motion.div
            custom={0.12}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-3 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-none bg-accent" />
            <span className="cyber-label text-accent font-semibold">
              TECHNICAL IDENTITY &bull; SYSTEMS RESEARCH
            </span>
          </motion.div>

          {/* ── Stage 2: Signature Line-by-Line Typographic Reveal ── */}
          <h1 className="heading-font text-5xl sm:text-7xl md:text-8xl lg:text-[5.8rem] xl:text-[6.6rem] font-black text-foreground tracking-[-0.04em] leading-[0.91] mb-5">
            <span className="block overflow-hidden py-1">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={lineMaskVariants}
                className="block text-foreground"
              >
                AVISHKAR
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={lineMaskVariants}
                className="block text-foreground/80 hover:text-foreground transition-colors"
              >
                MORE
              </motion.span>
            </span>
          </h1>

          {/* ── Stage 3: Professional Role & Editorial Summary ── */}
          <motion.div
            custom={0.42}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="space-y-3 max-w-xl"
          >
            <p className="mono text-xs sm:text-sm uppercase tracking-wider text-accent font-semibold">
              Cybersecurity &amp; Distributed Systems Engineer
            </p>

            <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed font-normal">
              3rd-year engineering student at <strong className="text-foreground font-semibold">RV College of Engineering</strong> with a verified <span className="mono text-accent font-semibold px-1 py-0.5 rounded bg-accent/10 border border-accent/20 text-xs">CGPA of 9.74</span>. Architecting graph-intelligence security platforms, real-time ML intrusion filters, and high-concurrency systems.
            </p>
          </motion.div>

          {/* ── Stage 4: Restrained Actions & Links ── */}
          <motion.div
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-3 pt-6"
          >
            <a href="#projects" className="btn-cyber-primary group">
              <span>Explore Archive</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-cyber-outline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>

            <div className="h-5 w-px bg-border/80 mx-1 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <a
                href="https://github.com/Avi007-debug"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 border-2 border-border/80 light:border-black text-foreground hover:bg-accent/10 hover:border-accent hover:shadow-[2px_2px_0px_0px_#06b6d4] transition-all bg-card"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/avishkarmore/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 border-2 border-border/80 light:border-black text-foreground hover:bg-accent/10 hover:border-accent hover:shadow-[2px_2px_0px_0px_#06b6d4] transition-all bg-card"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Direct Email"
                className="p-2.5 border-2 border-border/80 light:border-black text-foreground hover:bg-accent/10 hover:border-accent hover:shadow-[2px_2px_0px_0px_#06b6d4] transition-all bg-card"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Terminal Console Workstation (5 cols on desktop) */}
        <motion.div
          custom={0.35}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <TerminalIntro />
        </motion.div>
      </div>

      {/* ── Stage 5: Finishing Technical Details & Scroll Indicator ── */}
      <motion.div
        custom={0.65}
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        className="w-full mt-6 py-2.5 px-4 border-2 border-border/80 light:border-black bg-card/60 flex flex-wrap items-center justify-between gap-4 text-xs mono text-muted-foreground select-none shadow-[3px_3px_0px_0px_#06b6d4] light:shadow-[3px_3px_0px_0px_#000]"
      >
        <div className="flex items-center gap-6 font-bold">
          <span>
            CORE: <strong className="text-foreground">TEMPORAL GRAPHS / IDS / RAG</strong>
          </span>
          <span className="hidden sm:inline border-l-2 border-border/80 pl-4">
            RANK: <strong className="text-accent">TOP 1% JEE ADV / MHT-CET</strong>
          </span>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-accent hover:text-foreground font-black transition-colors"
        >
          <span>INDEX 02 // DOSSIER</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
