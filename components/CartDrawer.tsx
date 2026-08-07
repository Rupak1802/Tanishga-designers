"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useShop } from "@/lib/shop-context";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, cartTotal, cartCount } =
    useShop();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[70] bg-plum-950/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] z-[71] bg-plum-900 shadow-luxury flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-cream/10">
              <h3 className="font-display text-cream text-xl flex items-center gap-2">
                <ShoppingBag size={18} className="text-gold" /> Your Bag
                <span className="text-cream/40 text-sm font-body">({cartCount})</span>
              </h3>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                className="text-cream/70 hover:text-gold"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-20">
                  <ShoppingBag size={40} className="text-cream/20" />
                  <p className="text-cream/50 text-sm">Your bag is feeling a little light.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-2 rounded-full bg-gold text-plum-900 text-xs font-semibold px-6 py-2.5"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((line) => (
                  <motion.div
                    key={line.product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    className="flex gap-4"
                  >
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden shrink-0">
                      <Image src={line.product.image} alt={line.product.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-display text-cream text-sm leading-snug">{line.product.name}</p>
                        <button
                          onClick={() => removeFromCart(line.product.id)}
                          aria-label="Remove item"
                          className="text-cream/40 hover:text-rose-deep shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-gold text-sm font-semibold mt-1">
                        ₹{line.product.price.toLocaleString("en-IN")}
                      </p>
                      <div className="mt-auto flex items-center gap-3">
                        <button
                          onClick={() => updateQty(line.product.id, line.qty - 1)}
                          aria-label="Decrease quantity"
                          className="w-6 h-6 rounded-full glass flex items-center justify-center text-cream"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-cream text-sm w-4 text-center">{line.qty}</span>
                        <button
                          onClick={() => updateQty(line.product.id, line.qty + 1)}
                          aria-label="Increase quantity"
                          className="w-6 h-6 rounded-full glass flex items-center justify-center text-cream"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-cream/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cream/60 text-sm">Subtotal</span>
                  <span className="font-display text-cream text-xl">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <button className="w-full rounded-full bg-gold text-plum-900 font-semibold text-sm py-3.5 hover:bg-cream transition-colors">
                  Checkout
                </button>
                <p className="text-center text-cream/30 text-[11px] mt-3">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
