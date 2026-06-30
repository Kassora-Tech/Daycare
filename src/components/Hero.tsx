"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CharacterReveal } from "@/lib/animations";
import { ChevronDown, Play, Star } from "lucide-react";

function Dove({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6 + delay, duration: 0.8, ease: "backOut" }}
      className={className}
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="animate-wing-flap" style={{ animationDelay: `${delay}s` }}>
        <path d="M30 20C25 12 15 5 5 8C12 12 18 18 22 22L30 20Z" fill="white" opacity="0.95" />
        <path d="M30 20C35 12 45 5 55 8C48 12 42 18 38 22L30 20Z" fill="white" opacity="0.9" />
      </g>
      <ellipse cx="30" cy="22" rx="8" ry="5" fill="white" />
      <path d="M38 21C42 19 48 20 50 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="20" r="1" fill="#333" />
      <path d="M23 21L20 20" stroke="#FF9800" strokeWidth="1.5" strokeLinecap="round" />
    </motion.svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax + zoom */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-zinnia.png"
          alt="Children playing under a colorful tree with white doves at Zinnia Nursery"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlays for legibility + mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Animated flying doves overlay */}
      <div className="absolute top-[22%] left-[12%] w-12 animate-fly z-10 hidden sm:block">
        <Dove delay={0} />
      </div>
      <div className="absolute top-[30%] right-[14%] w-10 animate-fly-alt z-10 hidden sm:block">
        <Dove delay={0.4} />
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-28 pb-24 px-4"
      >
        <div className="text-center space-y-6 max-w-3xl">
          {/* Rating pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/[0.12] backdrop-blur-md text-white text-xs px-4 py-2 rounded-full font-medium border border-white/[0.15]"
          >
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-accent-yellow text-accent-yellow" />
              ))}
            </span>
            <span className="text-white/90">Loved by families in Middelburg</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight drop-shadow-lg">
            <CharacterReveal text="Where Little Dreams Blossom" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-white/85 text-base sm:text-xl max-w-xl mx-auto leading-relaxed drop-shadow"
          >
            A nurturing, colorful home-away-from-home where every child grows with
            love, laughter, and learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-3"
          >
            <a
              href="#booking"
              className="bg-white text-foreground px-8 py-4 rounded-2xl font-semibold text-sm transition-all hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1 active:translate-y-0"
            >
              Book a Tour
            </a>
            <a
              href="#about"
              className="flex items-center justify-center gap-2 bg-white/[0.12] hover:bg-white/[0.2] backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-sm transition-all border border-white/[0.18]"
            >
              <Play size={14} className="fill-white" /> Our Story
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
