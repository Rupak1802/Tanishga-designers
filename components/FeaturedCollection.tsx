"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useShop } from "@/lib/shop-context";
import { featured } from "@/lib/data";

export default function FeaturedCollection() {
  const { addToCart } = useShop();

  return (
    <section id="new-arrivals" className="bg-plum-900 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow text-rose-gold mb-3">New Arrivals</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl">Featured Editorial</h2>
        </div>
        <p className="text-cream/50 text-sm max-w-xs">
          Swipe through this season's headline pieces, shot editorial-style.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {featured.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="snap-start shrink-0 w-[85vw] md:w-[560px] relative rounded-3xl overflow-hidden group shadow-luxury cursor-pointer"
            onClick={() => {
              addToCart({
                id: item.name,
                name: item.name,
                price: item.price,
                mrp: item.price * 1.2,
                rating: 5,
                image: item.image,
                badge: item.tag,
              });
            }}
            role="button"
            aria-label={`Add ${item.name} to cart`}
          >
            <div className="relative h-[420px] md:h-[520px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="560px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="eyebrow text-gold mb-2">{item.tag}</p>
              <h3 className="font-display text-cream text-2xl md:text-3xl mb-4">{item.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-cream font-semibold">₹{item.price.toLocaleString("en-IN")}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      id: item.name,
                      name: item.name,
                      price: item.price,
                      mrp: item.price * 1.2,
                      rating: 5,
                      image: item.image,
                      badge: item.tag,
                    });
                  }}
                  className="flex items-center gap-2 rounded-full bg-cream/95 text-plum-900 text-xs font-semibold px-4 py-2.5 hover:bg-gold transition-colors"
                >
                  <ShoppingBag size={14} /> Quick Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
