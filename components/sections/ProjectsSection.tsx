"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const projects = [
  {
    id: "01",
    name: "MoodSync",
    tagline: "AI-Powered Music Discovery",
    description:
      "AI-powered music discovery platform that detects emotions and recommends personalized music experiences. Built with real-time emotion analysis and adaptive recommendation engine.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Firebase"],
    demo: "#",
    code: "#",
    imageGradient: "from-gold/40 via-amber-300/20 to-orange-300/30",
    accentColor: "#F5B23A",
    layout: "image-left",
  },
  {
    id: "02",
    name: "FoodLink",
    tagline: "Connecting Communities",
    description:
      "Platform connecting food donors, NGOs, and communities to reduce food waste through real-time coordination. Enabling measurable social impact at scale.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express", "Firebase"],
    demo: "#",
    code: "#",
    imageGradient: "from-coral/30 via-rose-300/20 to-orange-200/20",
    accentColor: "#FF6B57",
    layout: "image-right",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const isLeft = project.layout === "image-left";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isLeft ? "" : "lg:[direction:rtl]"
      }`}
    >
      {/* Image side */}
      <ScrollReveal direction={isLeft ? "left" : "right"}>
        <div className="relative [direction:ltr]">
          {/* Large faded number */}
          <span
            className="absolute -top-8 -left-4 font-display font-bold text-[140px] leading-none select-none pointer-events-none"
            style={{ color: `${project.accentColor}18` }}
          >
            {project.id}
          </span>

          {/* Image container */}
          <div className="project-image-wrap relative rounded-2xl overflow-hidden aspect-[4/3] bg-ink/5">
            <motion.div
              style={{ y }}
              className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} flex items-center justify-center`}
            >
              {/* Replace with actual project screenshots */}
              <div className="text-center p-8">
                <p className="font-display font-bold text-4xl text-ink/20">
                  {project.name}
                </p>
                <p className="text-sm text-ink/30 mt-2">
                  Add screenshot at{" "}
                  <code className="text-xs bg-ink/10 px-1 rounded">
                    /public/images/{project.name.toLowerCase()}.jpg
                  </code>
                </p>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
          </div>
        </div>
      </ScrollReveal>

      {/* Content side */}
      <div className="[direction:ltr] flex flex-col gap-6">
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-ink/40">
              Project {project.id}
            </span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div>
            <p className="text-sm font-medium text-gold mb-1">
              {project.tagline}
            </p>
            <h3
              className="font-display font-bold text-ink leading-tight"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              {project.name}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-ink/60 leading-relaxed text-lg">
            {project.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-ink/5 text-ink/70 rounded-full text-sm font-medium border border-ink/10"
              >
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex gap-4">
            <MagneticButton>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-ink text-bg rounded-full font-semibold text-sm hover:bg-gold hover:text-ink transition-all duration-300"
              >
                Live Demo
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 border-2 border-ink/20 text-ink/70 rounded-full font-semibold text-sm hover:border-ink hover:text-ink transition-all duration-300"
              >
                Source Code
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
              Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display font-bold text-ink leading-[0.9]"
              style={{ fontSize: "clamp(56px, 8vw, 120px)" }}
            >
              featured
              <br />
              <span className="text-gold">projects.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-28 lg:gap-36">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* See More CTA */}
        <ScrollReveal>
          <div className="mt-28 lg:mt-36 text-center">
            <div className="inline-block">
              <p className="font-display font-bold text-ink/10 text-sm uppercase tracking-widest mb-4">
                ✦ ✦ ✦
              </p>
              <h3
                className="font-display font-bold text-ink leading-tight mb-4"
                style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
              >
                want to see more?
              </h3>
              <p className="text-ink/50 text-lg max-w-lg mx-auto mb-8">
                Explore all my experiments, AI projects, and full-stack
                applications on GitHub.
              </p>
              <MagneticButton>
                <a
                  href="https://github.com/J-Justin-Samuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-bg rounded-full font-semibold hover:bg-gold hover:text-ink transition-all duration-300"
                >
                  Click Here To See More Projects
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
