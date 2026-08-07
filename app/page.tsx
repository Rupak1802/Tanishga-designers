"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import OfferBanner from "@/components/OfferBanner";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedCollection from "@/components/FeaturedCollection";
import RecentlyViewed from "@/components/RecentlyViewed";
import BestSellers from "@/components/BestSellers";
import WishlistSection from "@/components/WishlistSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/InstagramSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div style={{ opacity: loaded ? 1 : 0 }} className="transition-opacity duration-700">
        <div className="fixed top-0 inset-x-0 z-50">
          <OfferBanner />
          <Navbar />
        </div>
        <main>
          <Hero />
          <Collections />
          <FeaturedCollection />
          <RecentlyViewed />
          <BestSellers />
          <WishlistSection />
          <WhyChooseUs />
          <Testimonials />
          <InstagramSection />
          <Newsletter />
        </main>
        <Footer />
        <FloatingButtons />
        <CartDrawer />
      </div>
    </>
  );
}
