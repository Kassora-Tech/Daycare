"use client";

import { ScrollProgress } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Programs />
        <Gallery />
        <Testimonials />
        <Blog />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
