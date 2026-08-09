import type { Metadata } from "next";
import { Fraunces, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import { ShopProvider } from "@/lib/shop-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charminar Traders — Quality You Trust, Service We Promise.",
  description:
    "Premium quality dates, dry fruits, nuts, honey, and saffron from Charminar Traders.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${cormorant.variable}`}>
      <body className="font-body bg-plum-900">
        <ShopProvider>
          <CursorGlow />
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
