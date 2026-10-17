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
    <footer className="border-t-2 border-border/80 light:border-black py-12 px-6 bg-background select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram & Meta */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="flex items-center gap-2.5 group select-none"
            aria-label="Back to top"
          >
            <div className="border-2 border-accent/80 p-1 bg-black shadow-[2px_2px_0px_0px_#06b6d4]">
              <AmLogo className="h-5 w-auto" />
            </div>
            <span className="font-black text-sm tracking-tight text-foreground uppercase">
              Avishkar More
            </span>
          </a>
          <div className="text-[11px] mono text-muted-foreground font-bold">
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
              className="p-2 border-2 border-border/80 light:border-black bg-card shadow-[2px_2px_0px_0px_#06b6d4] light:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-foreground"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Right: Back to top & Copyright */}
        <div className="flex items-center gap-4 text-xs mono text-muted-foreground font-bold">
          <span>&copy; {new Date().getFullYear()} AVISHKAR MORE</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 border-2 border-border/80 light:border-black bg-card shadow-[2px_2px_0px_0px_#06b6d4] light:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 text-foreground transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;