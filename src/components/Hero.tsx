"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CharacterReveal } from "@/lib/animations";
import { ChevronDown, Play } from "lucide-react";

function Dove({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 + delay, duration: 0.8, ease: "backOut" }}
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

function TreeSVG() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md mx-auto drop-shadow-2xl"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <path d="M230 500V320C230 310 235 295 250 280C265 295 270 310 270 320V500" fill="#8D6E63" />
      <path d="M240 500V340C240 330 245 320 250 310C255 320 260 330 260 340V500" fill="#6D4C41" opacity="0.5" />

      {/* Branches */}
      <path d="M250 300C220 290 180 270 160 240" stroke="#8D6E63" strokeWidth="8" strokeLinecap="round" />
      <path d="M250 280C280 265 320 250 340 230" stroke="#8D6E63" strokeWidth="7" strokeLinecap="round" />
      <path d="M250 320C210 310 170 300 140 280" stroke="#8D6E63" strokeWidth="6" strokeLinecap="round" />
      <path d="M250 310C290 300 330 285 360 265" stroke="#8D6E63" strokeWidth="6" strokeLinecap="round" />

      {/* Foliage clusters */}
      {[
        { cx: 160, cy: 220, r: 45, color: "#4CAF50" },
        { cx: 200, cy: 180, r: 50, color: "#66BB6A" },
        { cx: 250, cy: 150, r: 55, color: "#43A047" },
        { cx: 300, cy: 170, r: 48, color: "#81C784" },
        { cx: 340, cy: 210, r: 42, color: "#4CAF50" },
        { cx: 140, cy: 260, r: 38, color: "#66BB6A" },
        { cx: 360, cy: 250, r: 36, color: "#43A047" },
        { cx: 220, cy: 200, r: 40, color: "#2E7D32" },
        { cx: 280, cy: 190, r: 42, color: "#388E3C" },
        { cx: 250, cy: 220, r: 35, color: "#1B5E20" },
      ].map((leaf, i) => (
        <motion.circle
          key={i}
          cx={leaf.cx}
          cy={leaf.cy}
          r={leaf.r}
          fill={leaf.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ delay: 0.8 + i * 0.08, duration: 0.6, ease: "backOut" }}
        />
      ))}

      {/* Flowers */}
      {[
        { cx: 170, cy: 200, color: "#F06292" },
        { cx: 210, cy: 160, color: "#FF9800" },
        { cx: 260, cy: 140, color: "#AB47BC" },
        { cx: 310, cy: 160, color: "#42A5F5" },
        { cx: 330, cy: 200, color: "#FFEE58" },
        { cx: 190, cy: 230, color: "#F06292" },
        { cx: 280, cy: 220, color: "#FF9800" },
        { cx: 240, cy: 180, color: "#26A69A" },
        { cx: 150, cy: 240, color: "#AB47BC" },
        { cx: 350, cy: 235, color: "#42A5F5" },
      ].map((flower, i) => (
        <motion.g key={`f-${i}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 + i * 0.06, duration: 0.4, ease: "backOut" }}
        >
          <circle cx={flower.cx} cy={flower.cy} r={6} fill={flower.color} opacity="0.9" />
          <circle cx={flower.cx} cy={flower.cy} r={3} fill="white" opacity="0.6" />
        </motion.g>
      ))}

      {/* Children at base */}
      <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.6 }}>
        <circle cx="180" cy="430" r="12" fill="#FF9800" />
        <rect x="173" y="442" width="14" height="25" rx="7" fill="#42A5F5" />
        <rect x="175" y="467" width="4" height="15" rx="2" fill="#8D6E63" />
        <rect x="183" y="467" width="4" height="15" rx="2" fill="#8D6E63" />
      </motion.g>
      <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.6 }}>
        <circle cx="320" cy="425" r="13" fill="#6D4C41" />
        <rect x="312" y="438" width="16" height="28" rx="8" fill="#F06292" />
        <line x1="312" y1="445" x2="300" y2="430" stroke="#6D4C41" strokeWidth="3" strokeLinecap="round" />
        <line x1="328" y1="445" x2="340" y2="430" stroke="#6D4C41" strokeWidth="3" strokeLinecap="round" />
        <rect x="314" y="466" width="4" height="16" rx="2" fill="#8D6E63" />
        <rect x="322" y="466" width="4" height="16" rx="2" fill="#8D6E63" />
      </motion.g>
      <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.6 }}>
        <circle cx="250" cy="440" r="10" fill="#FFCC02" />
        <rect x="244" y="450" width="12" height="20" rx="6" fill="#AB47BC" />
        <rect x="246" y="470" width="3" height="12" rx="1.5" fill="#8D6E63" />
        <rect x="253" y="470" width="3" height="12" rx="1.5" fill="#8D6E63" />
      </motion.g>
    </motion.svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a2a] via-[#1e5631] to-[#0d3320]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(76,175,80,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(38,166,154,0.2),transparent_60%)]" />
        {/* Soft light spots */}
        <div className="absolute top-20 left-[15%] w-80 h-80 bg-accent-yellow/[0.06] rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-32 right-[10%] w-96 h-96 bg-accent-pink/[0.05] rounded-full blur-[120px] animate-float-slow" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-28 pb-20 px-4">
        {/* Doves */}
        <div className="absolute top-28 left-[10%] w-14 animate-fly">
          <Dove delay={0} />
        </div>
        <div className="absolute top-36 right-[15%] w-12 animate-fly-alt">
          <Dove delay={0.3} />
        </div>
        <div className="absolute top-52 left-[30%] w-10 animate-fly" style={{ animationDelay: "2s" }}>
          <Dove delay={0.6} />
        </div>
        <div className="absolute top-44 right-[35%] w-9 animate-fly-alt" style={{ animationDelay: "3s" }}>
          <Dove delay={0.9} />
        </div>

        {/* Tree */}
        <div className="w-56 sm:w-72 md:w-80 mb-8">
          <TreeSVG />
        </div>

        {/* Text content */}
        <div className="text-center space-y-5 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="inline-block bg-white/[0.08] backdrop-blur-md text-white/80 text-xs px-4 py-1.5 rounded-full font-medium tracking-widest uppercase border border-white/[0.08]"
          >
            Zinnia Nursery Daycare Centre
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            <CharacterReveal text="Where Little Dreams Blossom" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="text-white/60 text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
          >
            A nurturing, colorful environment where every child grows with love, laughter, and learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
          >
            <a
              href="#booking"
              className="bg-white text-foreground px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Tour
            </a>
            <a
              href="#about"
              className="flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-md text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all border border-white/[0.1]"
            >
              <Play size={14} className="fill-white" /> Watch Video
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/40"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
