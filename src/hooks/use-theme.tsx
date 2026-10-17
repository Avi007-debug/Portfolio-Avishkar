import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import ThemeGlitchWipe from "@/components/ThemeGlitchWipe";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
  isGlitching: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggle: () => {},
  isGlitching: false,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio-theme") as Theme;
      if (stored) return stored;
      return "dark";
    }
    return "dark";
  });
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Listen to system preference changes if no manual override is saved
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("portfolio-theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setTheme((t) => (t === "dark" ? "light" : "dark"));
    }, 40);
    setTimeout(() => {
      setIsGlitching(false);
    }, 260);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle, isGlitching }}>
      <ThemeGlitchWipe active={isGlitching} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
