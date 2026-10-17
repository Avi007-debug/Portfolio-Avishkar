import React, { useState, useEffect, useRef } from "react";

interface CyberScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnMount?: boolean;
  maxScrambles?: number;
}

// Fixed-aspect cyber glyphs to prevent text width oscillation and jitter
const CYBER_GLYPHS = "0123456789ABCDEF!#*+/?<>_X";

export const CyberScrambleText: React.FC<CyberScrambleTextProps> = ({
  text,
  className = "",
  scrambleOnMount = false,
  maxScrambles = 2,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);
  // Strictly limit scrambles to max 2 times per page refresh
  const scrambleCount = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = () => {
    if (scrambleCount.current >= maxScrambles) return;
    if (isScrambling.current) return;
    isScrambling.current = true;
    scrambleCount.current += 1;

    let iteration = 0;
    const maxIterations = text.length;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        if (timerRef.current) clearInterval(timerRef.current);
        setDisplayText(text);
        isScrambling.current = false;
      }

      iteration += 1 / 2;
    }, 28);
  };

  useEffect(() => {
    if (scrambleOnMount) {
      startScramble();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [scrambleOnMount]);

  const canScramble = scrambleCount.current < maxScrambles;

  return (
    <span
      onMouseEnter={canScramble ? startScramble : undefined}
      className={`inline-block tabular-nums select-none transition-colors ${
        canScramble ? "cursor-pointer" : ""
      } ${className}`}
      title={canScramble ? "Cyber Decryption (2x max per refresh)" : undefined}
    >
      {displayText}
    </span>
  );
};

export default CyberScrambleText;

