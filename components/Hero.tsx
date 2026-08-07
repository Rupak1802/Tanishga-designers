"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { Gem, ShoppingBag, Heart, Flower2, Sparkles as SparklesIcon } from "lucide-react";
import Butterfly from "./Butterfly";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const floatIcons = [
  { Icon: Gem, top: "14%", left: "6%", delay: 0, color: "#C9A35C" },
  { Icon: ShoppingBag, top: "68%", left: "10%", delay: 0.6, color: "#F0CBD8" },
  { Icon: Heart, top: "22%", left: "88%", delay: 0.3, color: "#D9A9A0" },
  { Icon: Flower2, top: "78%", left: "82%", delay: 0.9, color: "#F0CBD8" },
  { Icon: SparklesIcon, top: "48%", left: "92%", delay: 1.2, color: "#C9A35C" },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const rotX = useTransform(sy, [-40, 40], [6, -6]);
  const rotY = useTransform(sx, [-40, 40], [-6, 6]);

  useEffect(() => {
    if (!headingRef.current) return;
    const words = headingRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 80);
    my.set((e.clientY / innerHeight - 0.5) * 80);
  };

  const heading = "Where Elegance Meets Every Outfit.".split(" ");

  return (
    <section
      id="home"
      onMouseMove={onMouseMove}
      className="relative min-h-screen bg-plum-gradient overflow-hidden flex items-center pt-36 pb-16"
    >
      {/* ambient background particles / floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatIcons.map(({ Icon, top, left, delay, color }, i) => (
          <motion.div
            key={i}
            className="absolute animate-float"
            style={{ top, left, animationDelay: `${delay}s` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: delay + 0.5 }}
          >
            <Icon size={28} color={color} strokeWidth={1.2} />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(46,10,33,0.6)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Left side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <Butterfly size={22} color="#C9A35C" />
            <span className="eyebrow text-gold">Sasti.in · Drip Without the Drop</span>
          </motion.div>

          <h1
            ref={headingRef}
            className="font-display text-cream text-[2.6rem] sm:text-6xl lg:text-[3.6rem] leading-[1.08] tracking-tight"
          >
            {heading.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3">
                <span className="word inline-block">{w}</span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-6 text-cream/70 text-base md:text-lg max-w-md font-body"
          >
            Discover premium collections designed exclusively for women who love
            elegance, comfort, and confidence — priced with honesty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#best-sellers"
              className="group relative overflow-hidden rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-plum-900 tracking-wide transition-transform active:scale-95"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
            </a>
            <a
              href="#collections"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Explore Collections
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-12 flex items-center gap-6 text-cream/50 text-xs"
          >
            <span>25K+ Happy Customers</span>
            <span className="w-1 h-1 rounded-full bg-cream/30" />
            <span>4.8★ Average Rating</span>
          </motion.div>
        </div>

        {/* Right side: 3D scene */}
        <motion.div
          style={{ rotateX: rotX, rotateY: rotY }}
          className="relative h-[420px] lg:h-[560px] [perspective:1000px]"
        >
          <HeroScene />
        </motion.div>
      </div>

      <motion.a
        href="#collections"
        aria-label="Scroll to collections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Butterfly size={26} color="#F0CBD8" />
        </motion.div>
      </motion.a>
    </section>
  );
}
