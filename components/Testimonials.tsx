"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="bg-cream-gradient py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14 text-center">
        <p className="eyebrow text-rose-deep mb-3">In Their Words</p>
        <h2 className="font-display text-plum-900 text-4xl md:text-5xl">Loved by Our Customers</h2>
      </div>

      <div className="relative">
        <div ref={trackRef} className="flex gap-6 w-max px-6">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[300px] shrink-0 rounded-2xl bg-white/70 glass-light p-6 shadow-luxury"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src={t.image} alt={t.name} width={44} height={44} className="rounded-full object-cover" />
                <div>
                  <p className="font-display text-plum-900 text-sm">{t.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={11}
                        className={s < Math.round(t.rating) ? "fill-gold text-gold" : "text-plum-900/20"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-plum-700/75 text-sm leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
