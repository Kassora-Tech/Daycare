"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

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
      {/* Slim info strip */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm text-white/70 text-xs py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} className="text-primary-light" /> +27 XX XXX XXXX
            </span>
            <span className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin size={11} className="text-primary-light" /> Middelburg, 1055
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock size={11} className="text-primary-light" /> Mon - Fri: 6:30 AM - 5:30 PM
            </span>
          </div>
          <a
            href="#booking"
            className="text-primary-light hover:text-white transition-colors font-medium tracking-wide uppercase text-[10px] flex items-center gap-1"
          >
            Book a Visit &rarr;
          </a>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className={`fixed top-[32px] left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/[0.04] border-b border-black/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px]">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className={`w-10 h-10 rounded-xl transition-all duration-300 flex items-center justify-center ${
                scrolled
                  ? "bg-gradient-to-br from-primary to-primary-dark"
                  : "bg-white/15 backdrop-blur-md"
              }`}>
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-[17px] leading-tight tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}>
                  Zinnia
                </span>
                <span className={`text-[9px] leading-tight tracking-[0.2em] uppercase font-medium transition-colors ${
                  scrolled ? "text-primary" : "text-white/70"
                }`}>
                  Nursery &middot; Daycare
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all ${
                    scrolled
                      ? "text-foreground/60 hover:text-foreground hover:bg-foreground/[0.04]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="ml-3 bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Enroll Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-colors ${
                scrolled ? "text-foreground hover:bg-foreground/5" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-t border-foreground/5"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-foreground/70 hover:text-primary hover:bg-primary/5 py-2.5 px-3 rounded-xl font-medium transition-all text-[15px]"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3">
                  <a
                    href="#booking"
                    onClick={() => setMobileOpen(false)}
                    className="block bg-gradient-to-r from-secondary to-secondary-dark text-white text-center px-5 py-3.5 rounded-xl font-semibold"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
