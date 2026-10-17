import SectionWrapper from "./SectionWrapper";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    id: "453503E9...",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=453503E952833C909828DD47F8E97D716421243610E7589BE4142463219C071A",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    id: "152541BD...",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=152541BD0FE6C77F29396920020B963C42EFDC97C5B73D72535B32417D39DC41",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle University",
    id: "084C104E...",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=084C104EBF0BF50B96CD0A951E0CF91BA75630D6CE283BC9E823E4298DCA54D9",
  },
  {
    title: "Oracle Data Platform 2025 Foundations Associate",
    issuer: "Oracle University",
    id: "084C104F...",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=084C104EBF0BF50B96CD0A951E0CF91BFD7ED4F1A22F0A56000F90E3347DC655",
  },
];

export const CertificationsSection = () => (
  <SectionWrapper id="certifications" index="07" tag="INDUSTRY CREDENTIALS">
    <div className="mb-8">
      <h2 className="editorial-heading">
        Verified Certifications &amp; Accreditations
      </h2>
      <p className="mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
        Official cloud computing, artificial intelligence, and data platform credentials
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {certs.map((cert) => (
        <a
          key={cert.title}
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          className="dossier-card p-5 flex items-center justify-between gap-4 group transition-colors hover:border-accent/60 select-none"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2 bg-secondary text-accent border border-accent/50 group-hover:bg-accent group-hover:text-black transition-colors flex-shrink-0 mt-0.5">
              <BadgeCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                {cert.title}
              </p>
              <div className="flex items-center gap-2 text-[11px] mono text-muted-foreground mt-1">
                <span>{cert.issuer}</span>
                <span>&bull;</span>
                <span className="text-accent/80 font-mono">VERIFIED BADGE</span>
              </div>
            </div>
          </div>

          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
        </a>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;