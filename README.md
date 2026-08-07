# Sasti.in — "Drip Without the Drop"

A premium, animated 3D landing page for the Sasti.in fashion brand, built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP
(ScrollTrigger), React Three Fiber / drei, and Lucide icons.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> This project uses GSAP and React Three Fiber, which are not supported inside
> Claude's live in-chat preview sandbox — that's why it's delivered as a real
> project rather than an inline artifact. Run it locally (or deploy to Vercel)
> to see the full experience.

## What's included

- **Loader** — silk-curtain opening animation with logo + butterfly reveal (GSAP timeline)
- **Navbar** — sticky, transparent, blurred, with search/AI-search, wishlist, cart badge, dark/light toggle, mobile drawer menu
- **Offer banner** — marquee flash-sale countdown
- **Hero** — full-screen, parallax mouse-follow tilt, GSAP word-by-word heading reveal, R3F 3D silk-ribbon scene with sparkles and orbiting gold accent, floating fashion icons
- **Collections** — 11 categories as 3D-tilt cards with GSAP scroll reveal
- **Featured Editorial** — Apple-style horizontal snap showcase
- **Best Sellers** — animated product grid with wishlist heart, ratings, quick view/add-to-cart reveal
- **Why Choose Us** — glassmorphism icon grid
- **Testimonials** — auto-scrolling glass card marquee
- **Instagram section** — hover-preview grid
- **Newsletter** — glass input with liquid-fill button hover
- **Footer** — links, social, embedded map, payment icons
- **Floating buttons** — WhatsApp, Instagram, chat widget, scroll-to-top
- **Cursor glow** — soft rose-gold/gold light that trails the cursor (desktop only)
- Reduced-motion support, responsive down to mobile, semantic headings for SEO/accessibility

## Signature element

The brand's butterfly (from the logo) is used as a recurring motif rather than
a generic scroll-icon or divider — it flutters in the loader, the hero scroll
cue, and the newsletter section, animated with Framer Motion wing rotation.

## Next steps / not yet wired up

These were listed in the brief as "extra premium features." Most are now
functional (see below); a few still need real backend integration before launch:

- Real product/category imagery (currently Unsplash placeholders — swap for your own shoot)
- Payment gateway integration (Checkout button in the cart drawer is a UI stub)
- Wishlist/cart/recently-viewed persist in the browser's localStorage, not a server — add an account system if you want it to follow the customer across devices

### Now working

- **Cart drawer** — add to cart from any product card, adjust quantity, remove items, live subtotal, badge count in navbar
- **Wishlist** — heart toggle on product cards persists, dedicated Wishlist section appears once you've saved something, navbar badge shows count
- **Recently viewed** — "Quick View" on a product card adds it to a horizontal strip that appears above Best Sellers
- **Dark/light theme toggle** — functional switch in the navbar that persists across visits. Scoped deliberately: it affects the cursor-glow tint, and the `theme` value is available everywhere via `useShop()` for you to extend. It does **not** invert every section's plum/cream background — the page's alternating dark-plum and light-cream sections are a deliberate editorial rhythm from the design brief, not a "dark mode" to undo. If you want a true full-page light variant as a separate look, that's a bigger follow-up (touching every section's colors), happy to build it if useful.
- **Voice search** — mic icon uses the Web Speech API where the browser supports it (Chrome/Edge); hidden automatically in unsupported browsers (e.g. Firefox, Safari on iOS)
- All of the above persist across page reloads via `localStorage`

## Replacing placeholder content

- Swap images in `lib/data.ts` for your actual product photography
- Update contact details and map query in `components/Footer.tsx`
- Update WhatsApp/Instagram links in `components/FloatingButtons.tsx`
