"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Share2, Mail } from "lucide-react";

const footerLinks = {
  "Quick Links": ["Home", "About Us", "Programs", "Gallery", "Blog", "Contact"],
  "Programs": ["Infant Care", "Creative Arts", "Music & Movement", "Early Literacy", "Outdoor Play"],
  "Resources": ["Parent Handbook", "Daily Schedule", "Nutrition Guide", "Safety Policy", "FAQ"],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <span className="font-bold text-lg block leading-tight">Zinnia</span>
                <span className="text-[10px] text-white/50 tracking-widest uppercase">Nursery Daycare</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Where every child is a unique flower, nurtured with love and care to bloom beautifully.
            </p>
            <div className="flex gap-3">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-white/90">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-primary text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2026 Zinnia Nursery Daycare Centre. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent-pink fill-accent-pink" /> in Middelburg
          </p>
        </div>
      </div>
    </footer>
  );
}
