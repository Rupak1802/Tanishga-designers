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

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-luxury hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 32 32" width="20" height="20" fill="#fff">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.29.63 4.44 1.72 6.28L4 29l7.94-1.67A11.9 11.9 0 0 0 16 27c6.628 0 12-5.373 12-12S22.629 3 16.001 3zm6.94 17.03c-.29.82-1.71 1.57-2.36 1.66-.6.09-1.36.13-2.19-.14-.5-.16-1.15-.38-1.98-.75-3.49-1.5-5.77-4.98-5.94-5.21-.17-.23-1.42-1.89-1.42-3.6 0-1.71.9-2.55 1.22-2.9.32-.35.7-.44.93-.44.23 0 .47 0 .67.01.21.01.5-.08.79.6.29.7.98 2.4 1.07 2.57.09.18.15.39.03.62-.12.23-.18.37-.35.57-.17.2-.36.44-.51.59-.17.17-.35.35-.15.68.2.33.9 1.49 1.94 2.42 1.34 1.2 2.47 1.57 2.83 1.75.36.18.57.15.79-.09.22-.24.94-1.09 1.19-1.47.25-.38.5-.32.83-.19.33.13 2.1 1 2.46 1.18.36.18.6.27.69.42.09.15.09.85-.2 1.67z" />
        </svg>
      </a>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-luxury hover:scale-110 transition-transform"
      >
        <Instagram size={18} color="#fff" />
      </a>

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
