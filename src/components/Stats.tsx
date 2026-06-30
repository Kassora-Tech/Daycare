"use client";

import { useCounter } from "@/lib/animations";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Happy Children", color: "text-primary" },
  { value: 8, suffix: "+", label: "Caring Teachers", color: "text-secondary" },
  { value: 5, suffix: "+", label: "Years Experience", color: "text-accent-pink" },
  { value: 100, suffix: "%", label: "Parent Satisfaction", color: "text-accent-purple" },
];

function StatItem({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) {
  const { count, ref } = useCounter(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${color}`}>
        {count}{suffix}
      </div>
      <div className="text-foreground/50 text-sm sm:text-base mt-2 font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-warm-mint via-warm-sky to-warm-lavender opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
