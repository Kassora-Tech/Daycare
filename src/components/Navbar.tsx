"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-primary-dark text-white text-sm py-1.5 px-4 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> +27 XX XXX XXXX</span>
          <span className="hidden sm:flex items-center gap-1"><MapPin size={12} /> Middelburg, 1055</span>
        </div>
        <a href="#booking" className="hover:text-accent-yellow transition-colors">Book a Visit</a>
      </motion.div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <span className={`font-bold text-lg leading-tight block ${scrolled ? "text-foreground" : "text-white"}`}>
                  Zinnia
                </span>
                <span className={`text-[10px] leading-tight block tracking-widest uppercase ${scrolled ? "text-primary" : "text-white/80"}`}>
                  Nursery Daycare
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    scrolled ? "text-foreground/70" : "text-white/90"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="bg-secondary hover:bg-secondary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
              >
                Enroll Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-primary/10"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-foreground/80 hover:text-primary py-2 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-secondary text-white text-center px-5 py-3 rounded-full font-semibold"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
