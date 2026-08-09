"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Instagram, ArrowUp, X } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-cream hover:text-gold"
          >
            <ArrowUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-72 rounded-2xl glass p-4 mb-1 shadow-luxury"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="font-display text-cream text-sm">Need help styling?</p>
              <button onClick={() => setChatOpen(false)} className="text-cream/60">
                <X size={16} />
              </button>
            </div>
            <p className="text-cream/60 text-xs mb-3">
              Our stylists reply within minutes. Ask us anything about fit, fabric, or delivery.
            </p>
            <button className="w-full rounded-full bg-gold text-plum-900 text-xs font-semibold py-2.5">
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>


      <button
        onClick={() => setChatOpen((c) => !c)}
        aria-label="Chat with us"
        className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle size={20} className="text-plum-900" />
      </button>
    </div>
  );
}
