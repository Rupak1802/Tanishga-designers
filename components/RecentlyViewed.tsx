"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useShop } from "@/lib/shop-context";
import { WHATSAPP_URL } from "@/lib/data";

export default function RecentlyViewed() {
  const { recentlyViewed } = useShop();

  return (
    <AnimatePresence>
      {recentlyViewed.length > 0 && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-plum-900 pb-8"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-4">
            <p className="eyebrow text-rose-gold mb-5">Recently Viewed</p>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {recentlyViewed.map((p) => (
                <div
                  key={p.id}
                  className="shrink-0 w-32 group cursor-pointer"
                  onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
                  role="button"
                  aria-label={`Chat on WhatsApp about ${p.name}`}
                >
                  <div className="relative w-32 h-40 rounded-xl overflow-hidden mb-2">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-400 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-cream/80 text-xs truncate">{p.name}</p>
                  <p className="text-gold text-xs font-semibold">₹{p.price.toLocaleString("en-IN")}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
