export type Product = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  image: string;
  badge: string;
};

export const INSTAGRAM_URL = "https://www.instagram.com/tanishga__designer/?hl=en";
export const WHATSAPP_URL = "https://wa.me/919566456433";

export const categories = [
  { name: "Kurtis", image: "/kurthi.png" },
  { name: "Co-ords", image: "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=800" },
  { name: "Everyday Ethnic", image: "/ethnic wear.png" },
  { name: "Fabrics", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800" },
];

export const bestSellers = [
  {
    id: "p1",
    name: "Rosewater Silk Saree",
    price: 3499,
    mrp: 5999,
    rating: 4.8,
    image: "/saree.png",
    badge: "Bestseller",
  },
  {
    id: "p2",
    name: "Champagne Co-ord Set",
    price: 2199,
    mrp: 3499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=800",
    badge: "New",
  },
  {
    id: "p3",
    name: "Blush Embroidered Kurti",
    price: 1499,
    mrp: 2299,
    rating: 4.7,
    image: "/kurthi.png",
    badge: "Trending",
  },
  {
    id: "p4",
    name: "Plum Velvet Lehenga",
    price: 6999,
    mrp: 10999,
    rating: 4.9,
    image: "/lehanga.png",
    badge: "Limited",
  },
  {
    id: "p5",
    name: "Gold-Thread Clutch",
    price: 899,
    mrp: 1399,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
    badge: "Bestseller",
  },
  {
    id: "p6",
    name: "Ivory Layered Heels",
    price: 1299,
    mrp: 1999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800",
    badge: "New",
  },
];

export const featured = [
  {
    name: "The Monsoon Bloom Edit",
    tag: "Editorial · Vol. 04",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400",
    price: 4299,
  },
  {
    name: "Champagne Nights Collection",
    tag: "Editorial · Vol. 05",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1400",
    price: 5199,
  },
  {
    name: "Petal & Pearl Sarees",
    tag: "Editorial · Vol. 06",
    image: "/saree.png",
    price: 3899,
  },
];

export const testimonials = [
  {
    name: "Ananya R.",
    quote:
      "Every piece feels handpicked. The saree draped better than anything I've ordered online.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200",
  },
  {
    name: "Meera S.",
    quote:
      "Packaging alone felt like a gift. The co-ord set fit perfectly and the fabric is genuinely premium.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
  },
  {
    name: "Divya K.",
    quote:
      "Fast delivery, easy returns, and the quality is far above what I expected for the price.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200",
  },
  {
    name: "Priya T.",
    quote:
      "Tanishga Designer has become my go-to for festive wear. Elegant, comfortable, and never over the top.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200",
  },
];

export const whyChooseUs = [
  { title: "Dispatch in 4–5 Days", desc: "Prepared and shipped promptly to your doorstep." },
  { title: "No COD", desc: "Prepaid Orders Only for a seamless experience." },
  { title: "No Return or Exchange", desc: "To maintain our rigorous hygiene and designer quality standards." },
  { title: "Free Shipping", desc: "All Over India, with no hidden costs." },
  { title: "Everyday Wear", desc: "Designer quality crafted beautifully for your daily lifestyle." },
  { title: "Secure Payments", desc: "100% encrypted checkout, every time." },
];
