"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-ink/8 overflow-hidden">
      {/* Massive JUSTIN typography */}
      <div className="relative flex items-end justify-center pt-20 pb-0 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display font-bold text-ink select-none leading-none"
          style={{
            fontSize: "clamp(80px, 18vw, 260px)",
            opacity: 0.07,
            letterSpacing: "-0.03em",
          }}
        >
          JUSTIN
        </motion.p>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink/8">
        <ScrollReveal direction="none">
          <p className="text-ink/40 text-sm">
            Justin Samuel © {new Date().getFullYear()}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="none" delay={0.1}>
          <p className="text-ink/30 text-xs text-center sm:text-right">
            Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP,
            and Coffee.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
