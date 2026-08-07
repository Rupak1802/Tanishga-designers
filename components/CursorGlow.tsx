"use client";

import { useEffect, useRef } from "react";
import { useShop } from "@/lib/shop-context";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useShop();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;
    let isAnimating = false;

    const loop = () => {
      const dx = tx - x;
      const dy = ty - y;
      
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        x += dx * 0.12;
        y += dy * 0.12;
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        raf = requestAnimationFrame(loop);
      } else {
        isAnimating = false;
      }
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!isAnimating) {
        isAnimating = true;
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-glow hidden md:block"
      style={{
        background:
          theme === "dark"
            ? "radial-gradient(circle, rgba(217,169,160,0.16) 0%, rgba(201,163,92,0.08) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(46,10,33,0.10) 0%, rgba(201,163,92,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
