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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center py-6"
    >
      <div className={`text-4xl sm:text-5xl font-bold tracking-tight ${color}`}>
        {count}{suffix}
      </div>
      <div className="text-foreground/40 text-sm mt-2 font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-warm-mint/40 via-warm-sky/30 to-warm-lavender/40" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-x divide-foreground/[0.06]">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
