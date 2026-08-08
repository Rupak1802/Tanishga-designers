"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, User, Menu, X, Moon, Sun, Mic } from "lucide-react";
import { useShop } from "@/lib/shop-context";

const links = [
  "Home",
  "Collections",
  "New Arrivals",
  "Offers",
  "Categories",
  "About",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const recognitionRef = useRef<any>(null);

  const { cartCount, wishlist, setCartOpen, theme, toggleTheme } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    setVoiceSupported(true);
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
  }, []);

  const startVoiceSearch = () => {
    if (!recognitionRef.current) return;
    setSearchOpen(true);
    setListening(true);
    try {
      recognitionRef.current.start();
    } catch {
      setListening(false);
    }
  };

  return (
    <header
      className={`relative z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? "glass shadow-luxury py-2" : "py-3"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="Tanishga Designer" width={38} height={38} className="rounded-full" />
          <span className="font-display text-cream text-lg tracking-wide hidden sm:inline">
            Tanishga<span className="text-rose-gold"> Designer</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="relative text-cream/80 text-sm font-medium group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="text-cream/85 hover:text-gold transition-colors"
          >
            <Search size={19} />
          </button>
          {voiceSupported && (
            <button
              aria-label="Voice search"
              onClick={startVoiceSearch}
              className={`hidden sm:block transition-colors ${
                listening ? "text-gold animate-pulse" : "text-cream/85 hover:text-gold"
              }`}
            >
              <Mic size={19} />
            </button>
          )}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="hidden sm:block text-cream/85 hover:text-gold transition-colors"
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a href="#wishlist" aria-label="Wishlist" className="relative text-cream/85 hover:text-gold transition-colors">
            <Heart size={19} className={wishlist.length ? "fill-rose-gold text-rose-gold" : ""} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-rose-gold text-plum-900 rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                {wishlist.length}
              </span>
            )}
          </a>
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Cart"
            className="relative text-cream/85 hover:text-gold transition-colors"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-gold text-plum-900 rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>
          <a href="#profile" aria-label="Profile" className="hidden sm:block text-cream/85 hover:text-gold transition-colors">
            <User size={19} />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden text-cream/85"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto max-w-2xl mt-3 px-5"
          >
            <div className="glass rounded-full px-5 py-3 flex items-center gap-3">
              <Search size={16} className="text-cream/70" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={listening ? "Listening…" : "Search sarees, kurtis, lehengas…"}
                className="bg-transparent outline-none text-cream placeholder:text-cream/40 w-full text-sm"
              />
              <span className="eyebrow text-gold/80 hidden sm:inline">AI Search</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-plum-950/98 z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-10">
              <Image src="/logo.png" alt="Tanishga Designer" width={36} height={36} className="rounded-full" />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream">
                <X size={26} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-3xl text-cream"
                >
                  {l}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
