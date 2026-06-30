"use client";

const words = [
  "Love", "Learning", "Play", "Growth", "Joy", "Care",
  "Creativity", "Safety", "Nurture", "Discovery", "Fun", "Kindness",
];

const colors = [
  "text-primary", "text-secondary", "text-accent-pink", "text-accent-purple",
  "text-accent-blue", "text-accent-teal", "text-primary-dark", "text-secondary-dark",
  "text-accent-pink", "text-primary", "text-secondary", "text-accent-purple",
];

export default function Marquee() {
  return (
    <div className="py-8 overflow-hidden bg-gradient-to-r from-warm-cream via-white to-warm-cream border-y border-foreground/5">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${colors[i % colors.length]} opacity-60`}>
              {word}
            </span>
            <span className="text-foreground/10 text-2xl">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
