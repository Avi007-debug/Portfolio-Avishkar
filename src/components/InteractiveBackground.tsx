import { useEffect, useRef, useCallback } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const spacing = 48; // slightly wider spacing for clean look and performance
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y; // Keep strictly in viewport space
    const radius = 220; // larger interactive radius

    ctx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.classList.contains("light");

    // Offset grid by scroll for parallax
    const scrollOffset = scrollRef.current * 0.04;

    for (let x = 0; x < w; x += spacing) {
      for (let y = 0; y < h + spacing; y += spacing) {
        const drawY = ((y + scrollOffset) % (h + spacing));
        const dx = mx - x;
        const dy = my - drawY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let size = 1.2;
        // Higher base opacity for dark mode so they are visible
        let opacity = isLight ? 0.10 : 0.22;

        if (dist < radius) {
          const factor = 1 - dist / radius;
          size = 1.2 + factor * 2.8;
          opacity = (isLight ? 0.10 : 0.22) + factor * 0.45;

          // Constellation: draw web lines connecting the grid nodes to the mouse cursor
          ctx.beginPath();
          ctx.moveTo(x, drawY);
          ctx.lineTo(mx, my);
          const lineOpacity = factor * (isLight ? 0.12 : 0.24);
          ctx.strokeStyle = isLight
            ? `rgba(99, 102, 241, ${lineOpacity})`
            : `rgba(0, 240, 255, ${lineOpacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Dot color based on current theme
        ctx.beginPath();
        ctx.arc(x, drawY, size, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? `rgba(99, 102, 241, ${opacity})` // Indigo in light mode
          : `rgba(0, 240, 255, ${opacity})`; // Cyan in dark mode
        ctx.fill();
      }
    }

    // Radial gradient glow around mouse
    if (mx > 0 && my > 0) {
      const glowY = my;
      const gradient = ctx.createRadialGradient(mx, glowY, 0, mx, glowY, 300);
      gradient.addColorStop(
        0,
        isLight ? "rgba(99, 102, 241, 0.06)" : "rgba(0, 240, 255, 0.12)"
      );
      gradient.addColorStop(
        0.5,
        isLight ? "rgba(6, 182, 212, 0.02)" : "rgba(139, 92, 246, 0.04)"
      );
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(mx - 300, glowY - 300, 600, 600);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
};

export default InteractiveBackground;
