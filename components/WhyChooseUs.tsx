"use client";

import { motion } from "framer-motion";
import { Gem, TrendingUp, Wallet, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const icons = [Gem, TrendingUp, Wallet, Truck, RotateCcw, ShieldCheck];

export default function WhyChooseUs() {
  return (
    <section className="bg-plum-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="eyebrow text-rose-gold mb-3">The Tanishga Designer Promise</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl">Why Choose Tanishga Designer</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-7 text-center"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5"
                >
                  <Icon size={24} className="text-gold" />
                </motion.div>
                <h3 className="font-display text-cream text-lg mb-2">{item.title}</h3>
                <p className="text-cream/55 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
