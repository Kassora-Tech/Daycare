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
    <div className="py-6 overflow-hidden bg-white/60 backdrop-blur-sm border-y border-foreground/[0.04]">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center mx-4">
            <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${colors[i % colors.length]} opacity-40`}>
              {word}
            </span>
            <span className="text-foreground/[0.08] text-xl ml-8">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
