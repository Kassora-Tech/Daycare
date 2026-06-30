"use client";

import { AnimatedSection, StaggeredContainer, fadeInUp, ParallaxSection } from "@/lib/animations";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "5 Fun Learning Activities for Toddlers at Home",
    excerpt: "Discover creative ways to keep your little ones engaged and learning through everyday play.",
    category: "Parenting Tips",
    date: "28 Jun 2026",
    color: "from-primary/20 to-warm-mint",
    catColor: "text-primary bg-primary/10",
  },
  {
    title: "The Importance of Outdoor Play in Early Childhood",
    excerpt: "Why fresh air and nature are essential building blocks for healthy development.",
    category: "Child Development",
    date: "22 Jun 2026",
    color: "from-accent-blue/20 to-warm-sky",
    catColor: "text-accent-blue bg-accent-blue/10",
  },
  {
    title: "Preparing Your Child for Their First Day at Daycare",
    excerpt: "Tips and advice to make the transition smooth and stress-free for both you and your child.",
    category: "Getting Started",
    date: "15 Jun 2026",
    color: "from-secondary/20 to-warm-peach",
    catColor: "text-secondary bg-secondary/10",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32 overflow-hidden">
      <ParallaxSection speed={-0.15} className="absolute bottom-0 right-0 w-96 h-96 bg-warm-lavender rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-blue font-semibold text-sm tracking-widest uppercase mb-4">Blog</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tips & Stories from <span className="gradient-text">Our Garden</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Insights, activities, and advice to support your child&apos;s journey.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-foreground/5 cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                <svg viewBox="0 0 120 80" className="w-20 opacity-30">
                  <rect x="10" y="10" width="100" height="60" rx="8" fill="currentColor" />
                  <line x1="25" y1="30" x2="95" y2="30" stroke="white" strokeWidth="2" opacity="0.5" />
                  <line x1="25" y1="42" x2="80" y2="42" stroke="white" strokeWidth="2" opacity="0.5" />
                  <line x1="25" y1="54" x2="70" y2="54" stroke="white" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.catColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/40 flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
