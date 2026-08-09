"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { categories } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".cat-card");
    if (!cards) return;
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
      }
    );
  }, []);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotY = ((x / rect.width) - 0.5) * 14;
    const rotX = ((y / rect.height) - 0.5) * -14;
    gsap.to(card, { rotateY: rotY, rotateX: rotX, duration: 0.4, ease: "power2.out" });
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
  };

  return (
    <section id="collections" className="relative bg-cream-gradient py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow text-rose-deep mb-3">Shop by Category</p>
          <h2 className="font-display text-plum-900 text-4xl md:text-5xl">Our Collections</h2>
          <p className="mt-4 text-plum-700/70 text-sm md:text-base">
            A curated selection of premium dry fruits, dates, honey, and saffron.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 [perspective:1200px]"
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="cat-card group relative aspect-square rounded-full overflow-hidden shadow-luxury cursor-pointer [transform-style:preserve-3d]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 translate-y-2 group-hover:-translate-y-1 transition-transform duration-400 z-10">
                <span className="text-cream font-display text-xl md:text-2xl drop-shadow-lg font-bold text-center">{cat.name}</span>
                <span className="block h-1 w-8 bg-gold mt-2 group-hover:w-14 transition-all duration-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
