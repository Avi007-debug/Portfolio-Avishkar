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
    const spacing = 52;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const radius = 180;

    ctx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.classList.contains("light");
    const scrollOffset = scrollRef.current * 0.03;

    for (let x = 0; x < w; x += spacing) {
      for (let y = 0; y < h + spacing; y += spacing) {
        const drawY = ((y + scrollOffset) % (h + spacing));
        const dx = mx - x;
        const dy = my - drawY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let size = 0.9;
        let opacity = isLight ? 0.08 : 0.14;

        if (dist < radius) {
          const factor = 1 - dist / radius;
          size = 0.9 + factor * 2;
          opacity = (isLight ? 0.08 : 0.14) + factor * 0.35;

          // Technical constellation lines
          ctx.beginPath();
          ctx.moveTo(x, drawY);
          ctx.lineTo(mx, my);
          const lineOpacity = factor * (isLight ? 0.10 : 0.18);
          ctx.strokeStyle = isLight
            ? `rgba(15, 118, 110, ${lineOpacity})`
            : `rgba(7, 188, 214, ${lineOpacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(x, drawY, size, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? `rgba(15, 23, 42, ${opacity})`
          : `rgba(7, 188, 214, ${opacity})`;
        ctx.fill();
      }
    }

    // Subtle restrained mouse illumination
    if (mx > 0 && my > 0) {
      const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
      gradient.addColorStop(
        0,
        isLight ? "rgba(15, 118, 110, 0.03)" : "rgba(7, 188, 214, 0.05)"
      );
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(mx - 220, my - 220, 440, 440);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf: number;
    let isActive = true;

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

    const onVisibilityChange = () => {
      isActive = !document.hidden;
    };

    const loop = () => {
      if (isActive) {
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};

export default InteractiveBackground;
