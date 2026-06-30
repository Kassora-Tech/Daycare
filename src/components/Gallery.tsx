"use client";

import { AnimatedSection, StaggeredContainer, fadeInUp, ParallaxSection } from "@/lib/animations";
import { motion } from "framer-motion";

const galleryItems = [
  { title: "Creative Corner", desc: "Where imagination takes flight", color: "from-accent-pink/30 to-accent-purple/20", span: "sm:col-span-2 sm:row-span-2" },
  { title: "Outdoor Fun", desc: "Learning in nature", color: "from-primary/30 to-accent-teal/20", span: "" },
  { title: "Story Time", desc: "Adventures in every page", color: "from-accent-blue/30 to-warm-sky/40", span: "" },
  { title: "Music Room", desc: "Dancing to our own beat", color: "from-secondary/30 to-accent-yellow/20", span: "" },
  { title: "Play Area", desc: "Safe and exciting spaces", color: "from-accent-purple/30 to-accent-pink/20", span: "" },
  { title: "Snack Time", desc: "Healthy and delicious", color: "from-primary-light/30 to-warm-mint/40", span: "sm:col-span-2" },
];

function GalleryIllustration({ title, color }: { title: string; color: string }) {
  const illustrations: Record<string, React.ReactNode> = {
    "Creative Corner": (
      <svg viewBox="0 0 200 200" className="w-24 h-24 opacity-40">
        <circle cx="60" cy="80" r="15" fill="#F06292" />
        <circle cx="100" cy="60" r="18" fill="#AB47BC" />
        <circle cx="140" cy="85" r="14" fill="#42A5F5" />
        <rect x="70" y="120" width="60" height="40" rx="5" fill="#FF9800" opacity="0.5" />
        <line x1="85" y1="130" x2="115" y2="130" stroke="#FFF" strokeWidth="2" />
        <line x1="85" y1="140" x2="105" y2="140" stroke="#FFF" strokeWidth="2" />
      </svg>
    ),
    "Outdoor Fun": (
      <svg viewBox="0 0 200 200" className="w-20 h-20 opacity-40">
        <circle cx="150" cy="40" r="20" fill="#FFEE58" />
        <path d="M40 160 L80 100 L120 140 L150 110 L190 160Z" fill="#4CAF50" opacity="0.6" />
        <rect x="60" y="130" width="8" height="30" fill="#8D6E63" />
        <circle cx="64" cy="120" r="15" fill="#66BB6A" />
      </svg>
    ),
    "Story Time": (
      <svg viewBox="0 0 200 200" className="w-20 h-20 opacity-40">
        <rect x="50" y="60" width="100" height="80" rx="5" fill="#42A5F5" opacity="0.5" />
        <rect x="55" y="65" width="45" height="70" rx="3" fill="#FFF" opacity="0.3" />
        <rect x="105" y="65" width="40" height="70" rx="3" fill="#FFF" opacity="0.2" />
        <circle cx="75" cy="90" r="8" fill="#FF9800" opacity="0.5" />
      </svg>
    ),
    "Music Room": (
      <svg viewBox="0 0 200 200" className="w-20 h-20 opacity-40">
        <circle cx="100" cy="130" r="25" fill="#FF9800" opacity="0.4" />
        <rect x="123" y="60" width="4" height="70" fill="#8D6E63" />
        <circle cx="125" cy="55" r="8" fill="#F06292" opacity="0.5" />
        <path d="M60 100 Q70 80 80 100 Q90 120 100 100" stroke="#AB47BC" strokeWidth="3" fill="none" opacity="0.5" />
      </svg>
    ),
    "Play Area": (
      <svg viewBox="0 0 200 200" className="w-20 h-20 opacity-40">
        <rect x="40" y="80" width="30" height="30" rx="4" fill="#F06292" opacity="0.5" />
        <rect x="85" y="70" width="35" height="35" rx="4" fill="#42A5F5" opacity="0.5" />
        <circle cx="155" cy="95" r="18" fill="#FFEE58" opacity="0.5" />
        <polygon points="100,40 115,65 85,65" fill="#4CAF50" opacity="0.4" />
      </svg>
    ),
    "Snack Time": (
      <svg viewBox="0 0 300 120" className="w-28 h-14 opacity-40">
        <circle cx="60" cy="60" r="20" fill="#FF9800" opacity="0.4" />
        <circle cx="150" cy="60" r="22" fill="#4CAF50" opacity="0.4" />
        <circle cx="240" cy="60" r="18" fill="#F06292" opacity="0.4" />
        <ellipse cx="60" cy="80" rx="25" ry="5" fill="#8D6E63" opacity="0.2" />
        <ellipse cx="150" cy="82" rx="27" ry="5" fill="#8D6E63" opacity="0.2" />
        <ellipse cx="240" cy="78" rx="23" ry="5" fill="#8D6E63" opacity="0.2" />
      </svg>
    ),
  };

  return illustrations[title] || null;
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <ParallaxSection speed={-0.15} className="absolute top-10 left-0 w-72 h-72 bg-warm-peach rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-pink font-semibold text-sm tracking-widest uppercase mb-4">Gallery</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Glimpses of <span className="gradient-text-warm">Happy Days</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Every day at Zinnia is filled with wonder, creativity, and joyful moments.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-6 cursor-default group ${item.span}`}
            >
              <div className="group-hover:scale-110 transition-transform duration-500">
                <GalleryIllustration title={item.title} color={item.color} />
              </div>
              <h3 className="font-bold text-foreground/80 text-lg mt-3">{item.title}</h3>
              <p className="text-foreground/50 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
