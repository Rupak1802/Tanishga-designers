"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/data";

const posts = [
  "/saree.png",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=500",
  "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=500",
  "/kurthi.png",
  "/ethnic_wear.png",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500",
];

export default function InstagramSection() {
  return (
    <section className="bg-plum-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-12">
        <p className="eyebrow text-rose-gold mb-3 flex items-center justify-center gap-2">
          <Instagram size={14} /> Follow Along
        </p>
        <h2 className="font-display text-cream text-4xl md:text-5xl">@tanishga__designer</h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 max-w-6xl mx-auto px-2">
        {posts.map((src, i) => (
          <motion.a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className="relative aspect-square overflow-hidden group cursor-pointer"
            aria-label="Open Tanishga Designer on Instagram"
          >
            <Image src={src} alt="Instagram post" fill sizes="200px" className="object-cover" />
            <div className="absolute inset-0 bg-plum-950/0 group-hover:bg-plum-950/60 transition-colors duration-300 flex items-center justify-center">
              <Heart
                size={20}
                className="text-cream opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
