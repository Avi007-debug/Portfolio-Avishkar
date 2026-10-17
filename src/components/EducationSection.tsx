import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, BookOpen, Award, CheckCircle } from "lucide-react";
import CyberScrambleText from "./CyberScrambleText";

export const EducationSection = () => (
  <SectionWrapper id="education" index="03" tag="ACADEMIC RIGOR & CREDENTIALS">
    <div className="mb-10">
      <h2 className="editorial-heading">
        <CyberScrambleText text="Academic Trajectory & Examination Ranks" />
      </h2>
      <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
        Verified institutional credentials, engineering specialization, and standardized percentiles
      </p>
    </div>

    <div className="space-y-6">
      {/* RVCE — Primary Degree */}
      <div className="dossier-card p-6 md:p-8 border-l-4 border-l-accent">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="p-1.5 rounded bg-accent/10 text-accent">
                <GraduationCap className="w-4 h-4" />
              </span>
              <h3 className="heading-font text-xl md:text-2xl font-bold text-foreground">
                RV College of Engineering (RVCE)
              </h3>
              <span className="mono text-[10px] font-semibold px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 uppercase">
                3rd Year Undergraduate
              </span>
            </div>

            <p className="text-foreground/90 font-medium text-sm md:text-base">
              Bachelor of Engineering in Computer Science and Engineering (Cyber Security)
            </p>

            <p className="mono text-xs text-muted-foreground">
              2024 &ndash; 2028 &bull; Bangalore, India
            </p>

            <div className="pt-2 text-xs text-secondary-foreground leading-relaxed max-w-2xl">
              Specializing in active directory defense, network threat analysis, kernel packet sniffing, distributed systems, and modern AI/ML inference pipelines.
            </div>
          </div>

          <div className="p-4 border-2 border-accent light:border-black bg-card shadow-[4px_4px_0px_0px_#06b6d4] light:shadow-[4px_4px_0px_0px_#000000] text-center min-w-[140px] self-start">
            <p className="cyber-label text-[9px] mb-0.5 text-accent font-black">CURRENT CGPA</p>
            <p className="text-3xl font-black text-accent heading-font">9.74</p>
            <p className="mono text-[10px] text-muted-foreground mt-0.5 font-bold">RANK 1 / BATCH TOP</p>
          </div>
        </div>
      </div>

      {/* Grid: Pre-University + School */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* GT School & Junior College */}
        <div className="dossier-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                <h3 className="heading-font font-bold text-foreground text-base">
                  GT School &amp; Junior College
                </h3>
              </div>
              <span className="mono text-xs font-bold text-foreground">
                89% (HSC)
              </span>
            </div>

            <p className="mono text-xs text-muted-foreground mb-3">
              Science (PCM + Computer Science) &bull; 2022 &ndash; 2024 &bull; Pune
            </p>

            <div className="space-y-2 pt-1">
              <p className="cyber-label text-[10px]">STANDARDIZED EXAM RESULTS</p>
              {[
                { exam: "JEE Advanced 2024", rank: "AIR 15,207 (Top 1%)" },
                { exam: "MHT-CET 2024", rank: "99.002 Percentile" },
                { exam: "COMEDK UGET 2024", rank: "AIR 779" },
              ].map((res) => (
                <div key={res.exam} className="flex items-center justify-between text-xs mono">
                  <span className="text-secondary-foreground">{res.exam}</span>
                  <span className="text-accent font-semibold">{res.rank}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-border/30 text-[10px] mono text-muted-foreground">
            STATE BOARD // HIGHER SECONDARY
          </div>
        </div>

        {/* Pawar Public School */}
        <div className="dossier-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <h3 className="heading-font font-bold text-foreground text-base">
                  Pawar Public School
                </h3>
              </div>
              <span className="mono text-xs font-bold text-accent">
                97.6% (CBSE)
              </span>
            </div>

            <p className="mono text-xs text-muted-foreground mb-3">
              10th CBSE Board &bull; 2020 &ndash; 2022 &bull; Pune, Maharashtra
            </p>

            <p className="text-xs text-secondary-foreground leading-relaxed pt-1">
              Foundation in analytical mathematics, science, and computer applications with institutional academic honors.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-border/30 text-[10px] mono text-muted-foreground">
            CENTRAL BOARD // SECONDARY EDUCATION
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;