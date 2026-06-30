"use client";

import { AnimatedSection, StaggeredContainer, fadeInUp, ParallaxSection } from "@/lib/animations";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent of 2",
    text: "Zinnia has been a blessing for our family. The teachers are incredibly caring, and my children come home every day excited about what they learned.",
    stars: 5,
    avatar: "S",
    color: "bg-accent-pink",
  },
  {
    name: "James K.",
    role: "Parent",
    text: "The safe and creative environment at Zinnia gives me peace of mind while I work. I can see my child growing more confident and social every week.",
    stars: 5,
    avatar: "J",
    color: "bg-accent-blue",
  },
  {
    name: "Thandi N.",
    role: "Parent of 3",
    text: "From the colorful classrooms to the outdoor play areas, everything is designed with children in mind. Our kids absolutely love it here!",
    stars: 5,
    avatar: "T",
    color: "bg-accent-purple",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <ParallaxSection speed={0.2} className="absolute top-0 right-0 w-80 h-80 bg-warm-sky rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-teal font-semibold text-sm tracking-widest uppercase mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Parents <span className="gradient-text">Say About Us</span>
          </h2>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-foreground/5 relative"
            >
              <Quote className="text-primary/10 absolute top-6 right-6" size={40} />
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-foreground/50">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="text-accent-yellow fill-accent-yellow" />
                ))}
              </div>
              <p className="text-foreground/60 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
