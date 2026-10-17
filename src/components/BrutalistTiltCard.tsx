import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BrutalistTiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const BrutalistTiltCard: React.FC<BrutalistTiltCardProps> = ({
  children,
  className = "",
  style = {},
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice.current) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x / rect.width - 0.5;
    const dy = y / rect.height - 0.5;

    // Subtle 4 degree tilt max to avoid excessive distortion or layout jump
    setRotateX(-dy * 5);
    setRotateY(dx * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{
        perspective: 900,
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
      className={`transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BrutalistTiltCard;
