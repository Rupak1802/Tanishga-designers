"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, X } from "lucide-react";
import { useShop } from "@/lib/shop-context";
import { bestSellers } from "@/lib/data";

export default function WishlistSection() {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const items = bestSellers.filter((p) => wishlist.includes(p.id));

  if (items.length === 0) return null;

  return (
    <section id="wishlist" className="bg-cream-gradient py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="eyebrow text-rose-deep mb-3 flex items-center gap-2">
          <Heart size={13} className="fill-rose-deep text-rose-deep" /> Saved For Later
        </p>
        <h2 className="font-display text-plum-900 text-3xl md:text-4xl mb-10">Your Wishlist</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <AnimatePresence>
            {items.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative rounded-2xl bg-white/70 glass-light overflow-hidden shadow-luxury cursor-pointer"
                onClick={() => addToCart(p)}
                role="button"
                aria-label={`Add ${p.name} to cart`}
              >
                <div className="relative aspect-[4/5]">
                  <Image src={p.image} alt={p.name} fill sizes="240px" className="object-cover" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(p.id);
                    }}
                    aria-label="Remove from wishlist"
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/85 flex items-center justify-center"
                  >
                    <X size={12} className="text-plum-900" />
                  </button>
                </div>
                <div className="p-3">
                  <p className="font-display text-plum-900 text-sm truncate mb-1">{p.name}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-plum-900 font-semibold text-sm">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p);
                      }}
                      aria-label="Add to cart"
                      className="w-7 h-7 rounded-full bg-gold flex items-center justify-center"
                    >
                      <ShoppingBag size={12} className="text-plum-900" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
