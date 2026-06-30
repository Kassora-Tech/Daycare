"use client";

import { AnimatedSection, StaggeredContainer, fadeInUp, ParallaxSection } from "@/lib/animations";
import { motion } from "framer-motion";
import { Baby, Palette, Music, BookOpen, TreePine, Users } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Infant Care",
    age: "0-1 years",
    desc: "Gentle, responsive care in a warm and stimulating environment for our tiniest learners.",
    color: "from-accent-pink/20 to-accent-pink/5",
    iconBg: "bg-accent-pink/15 text-accent-pink",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    age: "1-3 years",
    desc: "Painting, drawing, crafts, and sensory play that develop fine motor skills and creativity.",
    color: "from-accent-purple/20 to-accent-purple/5",
    iconBg: "bg-accent-purple/15 text-accent-purple",
  },
  {
    icon: Music,
    title: "Music & Movement",
    age: "1-4 years",
    desc: "Singing, dancing, and rhythm activities that build coordination and self-expression.",
    color: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15 text-secondary",
  },
  {
    icon: BookOpen,
    title: "Early Literacy",
    age: "2-5 years",
    desc: "Storytelling, phonics, and language development through fun, engaging activities.",
    color: "from-accent-blue/20 to-accent-blue/5",
    iconBg: "bg-accent-blue/15 text-accent-blue",
  },
  {
    icon: TreePine,
    title: "Outdoor Play",
    age: "All Ages",
    desc: "Safe outdoor adventures that promote physical health, nature awareness, and teamwork.",
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    icon: Users,
    title: "Social Skills",
    age: "2-5 years",
    desc: "Group activities that teach sharing, empathy, and building lasting friendships.",
    color: "from-accent-teal/20 to-accent-teal/5",
    iconBg: "bg-accent-teal/15 text-accent-teal",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <ParallaxSection speed={-0.2} className="absolute top-20 right-0 w-80 h-80 bg-warm-lavender rounded-full blur-3xl opacity-40" />
      <ParallaxSection speed={0.3} className="absolute bottom-0 left-10 w-64 h-64 bg-warm-peach rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Our Programs</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Programs Designed to{" "}
            <span className="gradient-text-warm">Inspire</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            From infants to preschoolers, our age-appropriate programs nurture every stage of development
            through structured play, creative expression, and guided learning.
          </p>
        </AnimatedSection>

        {/* Bento grid */}
        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
              className={`group relative rounded-3xl p-8 bg-gradient-to-br ${program.color} border border-foreground/5 hover:shadow-xl transition-shadow cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl ${program.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <program.icon size={28} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-bold text-foreground text-xl">{program.title}</h3>
                <span className="text-xs bg-white/60 text-foreground/50 px-2 py-0.5 rounded-full font-medium">{program.age}</span>
              </div>
              <p className="text-foreground/55 leading-relaxed">{program.desc}</p>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
