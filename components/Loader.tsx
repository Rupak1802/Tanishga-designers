"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Butterfly from "./Butterfly";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [hide, setHide] = useState(false);
  const leftCurtain = useRef<HTMLDivElement>(null);
  const rightCurtain = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftCurtain.current || !rightCurtain.current || !logoRef.current || !barRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setHide(true);
        onDone();
      },
    });

    tl.set([leftCurtain.current, rightCurtain.current], { x: 0 })
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.85, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
      .fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.1, ease: "power2.inOut" },
        "-=0.2"
      )
      .to(logoRef.current, { opacity: 0, y: -10, duration: 0.4, ease: "power1.in" }, "+=0.15")
      .to(
        leftCurtain.current,
        { xPercent: -100, duration: 1.1, ease: "power4.inOut" },
        "-=0.1"
      )
      .to(
        rightCurtain.current,
        { xPercent: 100, duration: 1.1, ease: "power4.inOut" },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, [onDone]);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div
        ref={leftCurtain}
        className="absolute inset-y-0 left-0 w-1/2 bg-plum-gradient flex items-center justify-end pointer-events-auto"
      />
      <div
        ref={rightCurtain}
        className="absolute inset-y-0 right-0 w-1/2 bg-plum-gradient pointer-events-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div ref={logoRef} className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Charminar Traders" width={64} height={64} className="rounded-full" />
            <Butterfly size={40} color="#F7EEDD" />
          </div>
          <p className="eyebrow text-cream/70">Loading Elegance</p>
        </div>
        <div className="w-40 h-[2px] bg-cream/15 overflow-hidden rounded-full">
          <div ref={barRef} className="h-full bg-gold origin-left" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </div>
  );
}
