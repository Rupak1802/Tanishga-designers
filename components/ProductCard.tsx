"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star, Eye, ShoppingBag } from "lucide-react";
import { useShop } from "@/lib/shop-context";
import type { Product } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished, addRecentlyViewed } = useShop();
  const wished = isWished(product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative rounded-2xl bg-white/70 glass-light overflow-hidden shadow-luxury cursor-pointer"
      onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
      role="button"
      aria-label={`Chat on WhatsApp about ${product.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
        />
        <span className="absolute top-3 left-3 bg-plum-900 text-cream text-[10px] font-semibold px-3 py-1 rounded-full">
          {product.badge}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Add to wishlist"
          aria-pressed={wished}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart size={14} className={wished ? "fill-rose-deep text-rose-deep" : "text-plum-900"} />
        </button>
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addRecentlyViewed(product);
            }}
            className="flex-1 flex items-center justify-center gap-1.5 bg-plum-900 text-cream text-xs font-semibold py-2.5"
          >
            <Eye size={13} /> Quick View
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex-1 flex items-center justify-center gap-1.5 bg-gold text-plum-900 text-xs font-semibold py-2.5"
          >
            <ShoppingBag size={13} /> Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-plum-900 text-base mb-1 truncate">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="fill-gold text-gold" />
          <span className="text-xs text-plum-700/70">{product.rating}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-plum-900">₹{product.price.toLocaleString("en-IN")}</span>
          <span className="text-xs text-plum-700/50 line-through">₹{product.mrp.toLocaleString("en-IN")}</span>
          <span className="text-xs text-rose-deep font-semibold">{discount}% off</span>
        </div>
      </div>
    </motion.div>
  );
}
