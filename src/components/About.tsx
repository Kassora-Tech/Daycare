"use client";

import { AnimatedSection, StaggeredContainer, fadeInUp, fadeInLeft, fadeInRight, ParallaxSection } from "@/lib/animations";
import { motion } from "framer-motion";
import { Heart, Shield, BookOpen, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Love & Care", desc: "Every child is embraced with warmth and genuine affection.", color: "bg-accent-pink/10 text-accent-pink" },
  { icon: Shield, title: "Safe Haven", desc: "A secure, nurturing environment parents can trust completely.", color: "bg-accent-blue/10 text-accent-blue" },
  { icon: BookOpen, title: "Early Learning", desc: "Age-appropriate activities that spark curiosity and growth.", color: "bg-primary/10 text-primary" },
  { icon: Sparkles, title: "Creative Play", desc: "Imaginative play that develops social and motor skills.", color: "bg-accent-purple/10 text-accent-purple" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decorations */}
      <ParallaxSection speed={-0.3} className="absolute top-0 right-0 w-72 h-72 bg-warm-mint rounded-full blur-3xl opacity-50" />
      <ParallaxSection speed={0.2} className="absolute bottom-0 left-0 w-96 h-96 bg-warm-peach rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Place Where Every Child{" "}
            <span className="gradient-text">Blossoms</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            At Zinnia Nursery Daycare Centre, we believe every child is a unique flower waiting to bloom.
            Located in the heart of Middelburg, we provide a colorful, safe, and stimulating environment
            where little ones discover the joy of learning through play.
          </p>
        </AnimatedSection>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image placeholder */}
          <AnimatedSection variants={fadeInLeft}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-warm-mint via-warm-sky to-warm-lavender flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-3/4" fill="none">
                  {/* Simplified illustration of children playing */}
                  <rect x="50" y="200" width="300" height="80" rx="20" fill="#81C784" opacity="0.3" />
                  <circle cx="120" cy="160" r="20" fill="#FF9800" />
                  <rect x="108" y="180" width="24" height="35" rx="12" fill="#42A5F5" />
                  <circle cx="200" cy="150" r="22" fill="#6D4C41" />
                  <rect x="186" y="172" width="28" height="38" rx="14" fill="#F06292" />
                  <circle cx="280" cy="155" r="18" fill="#FFCC02" />
                  <rect x="270" y="173" width="20" height="32" rx="10" fill="#AB47BC" />
                  {/* Butterfly */}
                  <g className="animate-float-slow">
                    <ellipse cx="300" cy="100" rx="8" ry="12" fill="#F06292" opacity="0.7" transform="rotate(-30 300 100)" />
                    <ellipse cx="310" cy="100" rx="8" ry="12" fill="#AB47BC" opacity="0.7" transform="rotate(30 310 100)" />
                    <circle cx="305" cy="100" r="2" fill="#333" />
                  </g>
                  {/* Sun */}
                  <circle cx="340" cy="50" r="25" fill="#FFEE58" opacity="0.8" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line key={i}
                      x1={340 + 30 * Math.cos(angle * Math.PI / 180)}
                      y1={50 + 30 * Math.sin(angle * Math.PI / 180)}
                      x2={340 + 40 * Math.cos(angle * Math.PI / 180)}
                      y2={50 + 40 * Math.sin(angle * Math.PI / 180)}
                      stroke="#FFEE58" strokeWidth="3" strokeLinecap="round" opacity="0.6"
                    />
                  ))}
                  {/* Flowers on ground */}
                  {[80, 150, 250, 330].map((x, i) => (
                    <g key={`fl-${i}`}>
                      <line x1={x} y1={260} x2={x} y2={240} stroke="#4CAF50" strokeWidth="2" />
                      <circle cx={x} cy={236} r={6} fill={["#F06292", "#FF9800", "#AB47BC", "#42A5F5"][i]} />
                      <circle cx={x} cy={236} r={2.5} fill="#FFEE58" />
                    </g>
                  ))}
                </svg>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Heart className="text-secondary" size={24} />
                </div>
                <div>
                  <div className="font-bold text-foreground">Trusted</div>
                  <div className="text-sm text-foreground/50">By Families</div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection variants={fadeInRight}>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Nurturing Young Minds Since Day One
            </h3>
            <p className="text-foreground/60 mb-6 leading-relaxed">
              Our dedicated team of experienced caregivers creates a structured yet flexible
              daily routine that balances learning, play, rest, and nutrition. We focus on each
              child&apos;s individual needs and development milestones.
            </p>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              From creative arts and music to outdoor play and early literacy, our programs
              are designed to prepare your child for the exciting journey ahead while ensuring
              they have the most fun along the way.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              Explore Our Programs
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </AnimatedSection>
        </div>

        {/* Values grid */}
        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-foreground/5"
            >
              <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                <value.icon size={24} />
              </div>
              <h4 className="font-bold text-foreground text-lg mb-2">{value.title}</h4>
              <p className="text-foreground/55 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
