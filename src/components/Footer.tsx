import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";
import AmLogo from "./AmLogo";

const links = [
  { icon: Github, href: "https://github.com/Avi007-debug", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/avishkarmore/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:avimore088@gmail.com", label: "Email" },
  { icon: FileText, href: "https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing", label: "Resume" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 py-12 px-6 bg-background select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram & Meta */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="flex items-center gap-2.5 group select-none"
            aria-label="Back to top"
          >
            <AmLogo className="h-6 w-auto" />
            <span className="font-bold text-sm tracking-tight text-foreground">
              Avishkar More
            </span>
          </a>
          <div className="text-[11px] mono text-muted-foreground">
            <span>AVISHKAR MORE</span> &bull; <span>CYBERSECURITY &amp; SYSTEMS</span>
          </div>
        </div>

        {/* Middle: Social Links */}
        <div className="flex items-center gap-2">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded border border-border/80 text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        {/* Right: Back to top & Copyright */}
        <div className="flex items-center gap-4 text-xs mono text-muted-foreground/80">
          <span>&copy; {new Date().getFullYear()} AVISHKAR MORE</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-1.5 rounded border border-border/60 hover:text-foreground hover:border-accent/40 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;