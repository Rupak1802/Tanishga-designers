export type Product = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  image: string;
  badge: string;
};

export const INSTAGRAM_URL = "https://www.instagram.com/charminar_traders/?hl=en";
export const WHATSAPP_URL = "https://wa.me/919566456433";

export const categories = [
  { name: "Dates", image: "/dates.png" },
  { name: "Dry Fruits", image: "/nuts.png" },
  { name: "Nuts", image: "/nuts.png" },
  { name: "Honey", image: "/honey.png" },
  { name: "Saffron", image: "/saffron.png" },
];

export const bestSellers = [
  {
    id: "p1",
    name: "Premium Ajwa Dates",
    price: 1499,
    mrp: 1999,
    rating: 4.9,
    image: "/dates.png",
    badge: "Bestseller",
  },
  {
    id: "p2",
    name: "Roasted Almonds",
    price: 899,
    mrp: 1200,
    rating: 4.7,
    image: "/nuts.png",
    badge: "Popular",
  },
  {
    id: "p3",
    name: "Pure Organic Honey",
    price: 599,
    mrp: 750,
    rating: 4.8,
    image: "/honey.png",
    badge: "Trending",
  },
  {
    id: "p4",
    name: "Kashmiri Saffron",
    price: 2999,
    mrp: 3500,
    rating: 5.0,
    image: "/saffron.png",
    badge: "Premium",
  },
  {
    id: "p5",
    name: "Mixed Dry Fruits",
    price: 1299,
    mrp: 1800,
    rating: 4.6,
    image: "/nuts.png",
    badge: "Bestseller",
  },
  {
    id: "p6",
    name: "Pistachios",
    price: 999,
    mrp: 1400,
    rating: 4.8,
    image: "/nuts.png",
    badge: "New",
  },
];

export const featured = [
  {
    name: "Ramadan Essentials",
    tag: "Dates & Sweets",
    image: "/dates.png",
    price: 2499,
  },
  {
    name: "Premium Gift Box",
    tag: "Festive Collection",
    image: "/nuts.png",
    price: 3499,
  },
  {
    name: "Healthy Nuts Mix",
    tag: "Everyday Snacking",
    image: "/nuts.png",
    price: 1899,
  },
];

export const testimonials = [
  {
    name: "Ahmed K.",
    quote:
      "The quality of the Ajwa dates is unmatched. Always fresh and carefully packed.",
    rating: 5,
    image: "/logo.png",
  },
  {
    name: "Priya S.",
    quote:
      "Bought the mixed dry fruits for a festival, everyone loved the premium taste.",
    rating: 5,
    image: "/logo.png",
  },
  {
    name: "Rahul T.",
    quote:
      "The Kashmiri saffron is authentic and gives amazing flavor to my dishes.",
    rating: 4.5,
    image: "/logo.png",
  },
  {
    name: "Fatima R.",
    quote:
      "Charminar Traders has become my go-to for all dry fruits and honey needs.",
    rating: 5,
    image: "/logo.png",
  },
];

export const whyChooseUs = [
  { title: "Freshness Guaranteed", desc: "Sourced directly to ensure maximum quality and freshness." },
  { title: "Premium Selection", desc: "We handpick only the finest grades of dry fruits." },
  { title: "Hygienic Packaging", desc: "Packed in sanitized facilities to maintain strict hygiene standards." },
  { title: "Fast Delivery", desc: "Prompt shipping directly to your doorstep." },
  { title: "Wholesale & Retail", desc: "Perfect for everyday snacking or bulk festive orders." },
  { title: "Secure Payments", desc: "100% encrypted and safe checkout." },
];
