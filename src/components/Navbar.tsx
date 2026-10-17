import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, FileText, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import AmLogo from "./AmLogo";

const navItems = [
  { label: "Dossier", href: "#about" },
  { label: "Academics", href: "#education" },
  { label: "Timeline", href: "#experience" },
  { label: "Archive", href: "#projects" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/95 border-b-2 border-border/90 shadow-[0px_4px_0px_0px_rgba(6,182,212,0.2)]"
          : "bg-background/80 border-b-2 border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group select-none"
          aria-label="Avishkar More Identity"
        >
          <div className="border-2 border-accent/80 p-1 bg-black shadow-[2px_2px_0px_0px_#06b6d4]">
            <AmLogo className="h-6 w-auto" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-tight text-foreground leading-none uppercase">
              Avishkar More
            </span>
            <span className="mono text-[9px] text-accent font-bold tracking-wider">
              DOSSIER // RVCE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`mono text-xs uppercase tracking-wider transition-colors duration-150 relative py-1 px-1 font-bold ${
                  isActive
                    ? "text-accent border-b-2 border-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Actions: Theme Toggle + Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 border-2 border-border/80 text-muted-foreground hover:text-foreground hover:border-accent hover:shadow-[2px_2px_0px_0px_#06b6d4] transition-all bg-card"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-zinc-900" />}
          </button>

          <a
            href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-cyber-primary text-xs py-1.5 px-3.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 border-2 border-border/80 text-muted-foreground hover:text-foreground bg-card"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-zinc-900" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border-2 border-border/80 text-foreground bg-card"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border/80 px-6 py-5 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-2.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`mono text-xs uppercase tracking-wider py-1.5 flex items-center justify-between ${
                    activeSection === item.href.slice(1)
                      ? "text-accent font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="mono text-[10px] text-muted-foreground/60">&rarr;</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-border/60">
              <a
                href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-cyber-primary text-xs w-full py-2.5 justify-center"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
