import React, { useState, useEffect, useRef } from "react";

interface CyberScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnMount?: boolean;
}

const CYBER_GLYPHS = "!<>-_\\/[]{}—=+*^?#01X_";

export const CyberScrambleText: React.FC<CyberScrambleTextProps> = ({
  text,
  className = "",
  scrambleOnMount = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);

  const startScramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
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
        clearInterval(interval);
        setDisplayText(text);
        isScrambling.current = false;
      }

      iteration += 1 / 2;
    }, 30);
  };

  useEffect(() => {
    if (scrambleOnMount) {
      startScramble();
    }
  }, [scrambleOnMount]);

  return (
    <span
      onMouseEnter={startScramble}
      className={`cursor-pointer inline-block transition-colors ${className}`}
      title="Interactive Cyber Scramble"
    >
      {displayText}
    </span>
  );
};

export default CyberScrambleText;
