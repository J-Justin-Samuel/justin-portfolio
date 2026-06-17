"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiMail } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

const interests = [
  "Fitness",
  "Sketching",
  "Coding",
  "Music",
  "Watching Films & Series",
  "Learning",
  "Gaming",
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
              className="bg-gold/10 border-gold/20 min-h-[300px] lg:min-h-[475px]"
              delay={0}
            >
              <div className="h-full flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/justin1.jpg"
                    alt="Justin"
                    fill
                    className="object-cover"
                  />
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
                What I Do
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-ink text-sm">
                    Full Stack Development
                  </p>
                  <p className="text-xs text-ink/50">
                    Building modern web applications
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-ink text-sm">
                    Backend Engineering
                  </p>
                  <p className="text-xs text-ink/50">
                    Designing scalable APIs and services
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-ink text-sm">
                    Product Development
                  </p>
                  <p className="text-xs text-ink/50">
                    Turning ideas into real-world solutions
                  </p>
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
                I enjoy building software that solves real problems. My passion
                lies in full-stack development, AI-powered applications, and
                creating seamless user experiences. I'm constantly learning,
                experimenting, and turning ideas into products that people can
                use and enjoy.
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

              <div className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-ink">
                    Bachelor of Engineering ( B.E )
                  </h3>
                  <p className="text-sm text-ink/60">
                    Electronics & Computer Engineering
                  </p>
                  <p className="text-xs text-ink/40 mt-1">2024 – present</p>
                </div>

                <div>
                  <h3 className="font-display font-bold text-ink">
                    Pre-University Course ( PUC )
                  </h3>
                  <p className="text-sm text-ink/60">Science ( PCMC )</p>
                  <p className="text-xs text-ink/40 mt-1">2022 – 2024</p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* 8. Quote / creative card */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BentoCard className="bg-ink aspect-square" delay={0.4}>
              <div className="flex flex-col justify-between h-full min-h-[120px]">
                <p className="font-display font-bold text-bg text-5xl leading-tight">
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

          {/* 6. Contact card */}
          <div>
            <BentoCard className="bg-gold/10 border-gold/20" delay={0.35}>
              <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
                Reach Me
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-gold flex-shrink-0" size={15} />
                  <span className="text-sm text-ink/70">Bangalore, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-gold flex-shrink-0" size={15} />
                  <a
                    href="mailto:hellojustin@example.com"
                    className="text-sm text-ink/70 animated-link"
                  >
                    justinsamuel.codes@gmail.com
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

          {/* 7. Interests card */}
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

          <div className="sm:row-span-2 lg:row-span-2">
            <BentoCard
              className="bg-gold/10 border-gold/20 aspect-square w-full overflow-hidden"
              delay={0}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/js.jpg"
                  alt="Justin"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
