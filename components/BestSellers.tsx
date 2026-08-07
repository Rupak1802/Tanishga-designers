"use client";

import { motion } from "framer-motion";
import { bestSellers } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section id="best-sellers" className="bg-cream-gradient py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow text-rose-deep mb-3">Loved By Thousands</p>
          <h2 className="font-display text-plum-900 text-4xl md:text-5xl">Best Sellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {bestSellers.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#collections"
            className="inline-block rounded-full border border-plum-900/20 px-8 py-3.5 text-sm font-semibold text-plum-900 hover:bg-plum-900 hover:text-cream transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
