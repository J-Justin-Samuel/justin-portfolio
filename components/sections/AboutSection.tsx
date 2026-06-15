"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiMail } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

const interests = [
  "Coding",
  "AI",
  "Music",
  "Fitness",
  "Gaming",
  "Photography",
  "Learning",
];

const focusAreas = [
  "DSA",
  "Full Stack Development",
  "Artificial Intelligence",
  "Embedded Systems",
];

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(10,10,10,0.1)" }}
        transition={{ duration: 0.3 }}
        className={`bento-card p-6 h-full ${className}`}
      >
        {children}
      </motion.div>
    </ScrollReveal>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16">
          <ScrollReveal>
            <h2
              className="font-display font-bold text-bg leading-[0.9] mb-4"
              style={{ fontSize: "clamp(56px, 8vw, 120px)" }}
            >
              more than
              <br />
              <span className="text-gold">just code.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-bg/50 text-lg max-w-md">
              The engineer, creator, and problem solver behind the screen.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* 1. Portrait image card - tall left */}
          <div className="sm:row-span-2 lg:row-span-2">
            <BentoCard
              className="bg-gold/10 border-gold/20 min-h-[300px] lg:min-h-[500px]"
              delay={0}
            >
              <div className="h-full flex flex-col items-center justify-between gap-6">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-gold/30 to-amber-400/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {/* Replace with <Image src="/images/justin.jpg" alt="Justin" fill className="object-cover rounded-2xl" /> */}
                  <span className="font-display font-bold text-6xl text-gold/40">
                    JS
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-bg font-display font-bold text-xl">
                    Justin Samuel
                  </p>
                  <p className="text-bg/50 text-sm mt-1">
                    Electronics Engineer × AI Builder
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* 2. Massive name card */}
          <div className="lg:col-span-2">
            <BentoCard className="bg-gold" delay={0.1}>
              <div className="flex items-center justify-center h-full min-h-[120px]">
                <h3
                  className="font-display font-bold text-ink leading-none text-center"
                  style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
                >
                  JUSTIN
                  <br />
                  SAMUEL
                </h3>
              </div>
            </BentoCard>
          </div>

          {/* 3. Status card */}
          <div>
            <BentoCard delay={0.15}>
              <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
                Current Focus
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-ink/50">Learning</p>
                  <p className="text-ink font-semibold text-sm">
                    Advanced Full Stack Development
                  </p>
                </div>
                <div className="h-px bg-ink/10" />
                <div>
                  <p className="text-xs text-ink/50">Building</p>
                  <p className="text-ink font-semibold text-sm">
                    AI-powered products
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">
                    Open to work
                  </span>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* 4. Philosophy card */}
          <div className="lg:col-span-2">
            <BentoCard className="bg-ink/5" delay={0.2}>
              <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
                Philosophy
              </p>
              <p className="text-ink/80 leading-relaxed">
                I believe in building things that matter. As an Electronics
                Engineering student with a deep love for AI and software, I
                bridge hardware intuition with modern software craft — creating
                products that are fast, intelligent, and human-centered.
              </p>
              <div className="mt-4 pt-4 border-t border-ink/10">
                <p className="font-display font-bold text-ink text-xl">
                  &ldquo;Learn. Build. Improve. Repeat.&rdquo;
                </p>
              </div>
            </BentoCard>
          </div>

          {/* 5. Education card */}
          <div>
            <BentoCard delay={0.25}>
              <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
                Education
              </p>
              <p className="font-display font-bold text-ink text-lg mb-3">
                Electronics Engineering Student
              </p>
              <div className="space-y-2">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm text-ink/60">{area}</span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* 6. Interests card */}
          <div>
            <BentoCard className="bg-coral/5" delay={0.3}>
              <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-ink/5 text-ink/70 rounded-full text-sm font-medium border border-ink/10 hover:bg-ink hover:text-bg transition-all duration-200 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* 7. Contact card */}
          <div>
            <BentoCard className="bg-gold/10 border-gold/20" delay={0.35}>
              <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
                Reach Me
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-gold flex-shrink-0" size={15} />
                  <span className="text-sm text-ink/70">India</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-gold flex-shrink-0" size={15} />
                  <a
                    href="mailto:hellojustin@example.com"
                    className="text-sm text-ink/70 animated-link"
                  >
                    hellojustin@example.com
                  </a>
                </div>
                <div className="mt-3 pt-3 border-t border-ink/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Available for opportunities
                  </span>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* 8. Quote / creative card */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BentoCard className="bg-ink" delay={0.4}>
              <div className="flex flex-col justify-between h-full min-h-[120px]">
                <p className="font-display font-bold text-bg text-2xl leading-tight">
                  Learn.
                  <br />
                  Build.
                  <br />
                  <span className="text-gold">Improve.</span>
                  <br />
                  Repeat.
                </p>
                <p className="text-bg/30 text-xs mt-4">— The Cycle</p>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
