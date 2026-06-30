"use client";

import { AnimatedSection, fadeInLeft, fadeInRight, ParallaxSection } from "@/lib/animations";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <ParallaxSection speed={0.2} className="absolute top-0 left-0 w-96 h-96 bg-warm-mint rounded-full blur-3xl opacity-30" />
      <ParallaxSection speed={-0.15} className="absolute bottom-0 right-0 w-72 h-72 bg-warm-peach rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-4">Book a Visit</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Schedule Your{" "}
            <span className="gradient-text-warm">Tour Today</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            We&apos;d love to show you around! Book a visit and see why families choose Zinnia.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection variants={fadeInLeft}>
            <div className="bg-background rounded-3xl p-8 shadow-sm border border-foreground/5">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Parent&apos;s Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+27 XX XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground placeholder:text-foreground/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground placeholder:text-foreground/30"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Child&apos;s Age</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground/60">
                      <option>Select age range</option>
                      <option>0-1 years</option>
                      <option>1-2 years</option>
                      <option>2-3 years</option>
                      <option>3-4 years</option>
                      <option>4-5 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1.5">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any questions or special requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground placeholder:text-foreground/30 resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3.5 rounded-xl font-semibold text-base hover:shadow-lg hover:shadow-primary/30 transition-shadow"
                >
                  Book Your Visit
                </motion.button>
              </form>
            </div>
          </AnimatedSection>

          {/* Info side */}
          <AnimatedSection variants={fadeInRight} className="space-y-6">
            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+27 XX XXX XXXX" },
                  { icon: Mail, label: "Email", value: "info@zinniadaycare.co.za" },
                  { icon: MapPin, label: "Location", value: "Middelburg, 1055" },
                  { icon: Clock, label: "Hours", value: "Mon-Fri: 6:30 AM - 6:30 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-secondary/10 rounded-2xl p-5 text-center cursor-pointer hover:bg-secondary/15 transition-colors"
              >
                <CalendarDays className="mx-auto mb-2 text-secondary" size={28} />
                <div className="font-semibold text-foreground text-sm">Schedule Visit</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-accent-teal/10 rounded-2xl p-5 text-center cursor-pointer hover:bg-accent-teal/15 transition-colors"
              >
                <MessageCircle className="mx-auto mb-2 text-accent-teal" size={28} />
                <div className="font-semibold text-foreground text-sm">Live Chat</div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
