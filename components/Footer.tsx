import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Butterfly from "./Butterfly";
import { INSTAGRAM_URL } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Offers", href: "#best-sellers" },
  { label: "About", href: "#contact" },
  { label: "Contact", href: "#contact" },
];
const categoryLinks = [
  { label: "Sarees", href: "#collections" },
  { label: "Lehengas", href: "#collections" },
  { label: "Kurtis", href: "#collections" },
  { label: "Co-ords", href: "#collections" },
  { label: "Accessories", href: "#collections" },
  { label: "Footwear", href: "#collections" },
];
const socialLinks = [
  { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-plum-950 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="Sasti.in" width={40} height={40} className="rounded-full" />
            <span className="font-display text-cream text-xl">Sasti.in</span>
          </div>
          <p className="font-script italic text-rose-gold text-lg mb-4">Drip without the drop.</p>
          <p className="text-cream/50 text-sm max-w-xs mb-6">
            Premium fashion for women who love elegance, comfort and confidence — without the luxury price tag.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-cream/40 mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-cream/70 text-sm hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-cream/40 mb-4">Categories</h4>
          <ul className="space-y-2.5">
            {categoryLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-cream/70 text-sm hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-cream/40 mb-4">Contact</h4>
          <ul className="space-y-3 text-cream/70 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 text-gold shrink-0" /> Coimbatore, Tamil Nadu, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold shrink-0" /> +91 90000 00000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold shrink-0" /> hello@sasti.in
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12">
        <div className="rounded-2xl overflow-hidden h-52 glass grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            title="Sasti.in location map"
            src="https://www.google.com/maps?q=Coimbatore,Tamil%20Nadu&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cream/40 text-xs">© {new Date().getFullYear()} Sasti.in. All rights reserved.</p>
        <div className="flex items-center gap-3 text-cream/40 text-xs">
          <span>Secure payments:</span>
          <span className="glass px-2.5 py-1 rounded text-cream/60">VISA</span>
          <span className="glass px-2.5 py-1 rounded text-cream/60">UPI</span>
          <span className="glass px-2.5 py-1 rounded text-cream/60">RuPay</span>
          <Butterfly size={20} color="#C9A35C" flutter={false} />
        </div>
      </div>
    </footer>
  );
}
