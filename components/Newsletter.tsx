"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Butterfly from "./Butterfly";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative bg-plum-gradient py-24 md:py-28 overflow-hidden">
      <div className="absolute -top-10 right-10 opacity-30">
        <Butterfly size={90} color="#F0CBD8" />
      </div>
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <p className="eyebrow text-gold mb-3">Join the Inner Circle</p>
        <h2 className="font-display text-cream text-3xl md:text-4xl mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="text-cream/60 text-sm mb-8">
          Subscribe for early access to new drops, festive edits, and members-only offers.
        </p>

        {sent ? (
          <p className="text-gold font-display text-lg">You're on the list — welcome to Sasti.in ✦</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-full glass px-6 py-3.5 text-cream placeholder:text-cream/40 outline-none focus:shadow-glow transition-shadow"
            />
            <button
              type="submit"
              className="relative overflow-hidden rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-plum-900 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Subscribe <Send size={14} />
              </span>
              <span className="absolute inset-0 bg-blush scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full origin-center" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
