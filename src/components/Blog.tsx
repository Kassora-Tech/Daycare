"use client";

import { AnimatedSection, StaggeredContainer, fadeInUp, ParallaxSection } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "5 Fun Learning Activities for Toddlers at Home",
    excerpt: "Discover creative ways to keep your little ones engaged and learning through everyday play.",
    category: "Parenting Tips",
    date: "28 Jun 2026",
    image: "/images/gallery-arts.png",
    catColor: "text-primary bg-primary/10",
  },
  {
    title: "The Importance of Outdoor Play in Early Childhood",
    excerpt: "Why fresh air and nature are essential building blocks for healthy development.",
    category: "Child Development",
    date: "22 Jun 2026",
    image: "/images/gallery-outdoor.png",
    catColor: "text-accent-blue bg-accent-blue/10",
  },
  {
    title: "Preparing Your Child for Their First Day at Daycare",
    excerpt: "Tips and advice to make the transition smooth and stress-free for both you and your child.",
    category: "Getting Started",
    date: "15 Jun 2026",
    image: "/images/about.png",
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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
