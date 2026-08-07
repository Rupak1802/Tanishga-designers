"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s };
}

export default function OfferBanner() {
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 6);
  const [time, setTime] = useState(() => getRemaining(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="relative z-40 bg-gradient-to-r from-plum-700 via-plum-600 to-plum-700 overflow-hidden">
      <div className="marquee-track py-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 px-6 shrink-0">
            <Sparkles size={13} className="text-gold shrink-0" />
            <span className="text-cream text-xs font-medium tracking-wide whitespace-nowrap">
              FLASH SALE — Up to 40% off ends in {mounted ? `${pad(time.h)}:${pad(time.m)}:${pad(time.s)}` : "06:00:00"}
            </span>
            <span className="text-cream/40 mx-2">·</span>
            <span className="text-cream text-xs font-medium tracking-wide whitespace-nowrap">
              Free shipping on orders above ₹999
            </span>
            <span className="text-cream/40 mx-2">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
