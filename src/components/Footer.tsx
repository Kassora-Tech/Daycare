"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Share2, Mail } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  "Programs": [
    { name: "Infant Care", href: "#programs" },
    { name: "Creative Arts", href: "#programs" },
    { name: "Music & Movement", href: "#programs" },
    { name: "Early Literacy", href: "#programs" },
    { name: "Outdoor Play", href: "#programs" },
  ],
  "Resources": [
    { name: "Parent Handbook", href: "#" },
    { name: "Daily Schedule", href: "#" },
    { name: "Nutrition Guide", href: "#" },
    { name: "Safety Policy", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[17px] leading-tight tracking-tight">Zinnia</span>
                <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase">Nursery &middot; Daycare</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-[260px]">
              Where every child is a unique flower, nurtured with love and care to bloom beautifully.
            </p>
            <div className="flex gap-2.5">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-primary/80 flex items-center justify-center transition-colors text-white/50 hover:text-white"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-sm text-white/80 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/35 hover:text-primary-light text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs">
            &copy; 2026 Zinnia Nursery Daycare Centre. All rights reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-accent-pink fill-accent-pink" /> in Middelburg
          </p>
        </div>
      </div>
    </footer>
  );
}
