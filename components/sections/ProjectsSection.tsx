"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";

const projects = [
  {
    id: "01",
    name: "RideOn",
    tagline: "Real-Time Ride-Hailing Webapp",
    description:
      "RideOn is a full-stack ride-booking web application that streamlines urban transportation through real-time ride management, secure authentication, location tracking, and digital payment integration. Built with modern web technologies, RideOn delivers a seamless and efficient commuting experience for both riders and service providers.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO", "GSAP"],
    demo: "https://ride-on-hazel.vercel.app",
    code: "https://github.com/J-Justin-Samuel/ride-on",
    image: "/images/projects/rideon.jpg",
    imageGradient: "from-gold/40 via-amber-300/20 to-orange-300/30",
    accentColor: "#F5B23A",
    layout: "image-left",
  },
  {
    id: "02",
    name: "Vibezfy",
    tagline: "Mood Detector",
    description:
      "Vibezfy is a mood-based music recommendation and visualization web application that leverages Spotify APIs and Firebase services to deliver personalized music experiences. By combining mood analysis, intelligent recommendations, and interactive visualizations, Vibezfy helps users discover the perfect soundtrack for every moment.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Firebase", "Spotify API"],
    demo: "https://vibezfy-v2.vercel.app",
    code: "https://github.com/J-Justin-Samuel/vibezfy-v2",
    image: "/images/projects/vibezfy.jpg",
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
  // Mild parallax effect so it still feels dynamic, but keeps the image contained
  const y = useTransform(scrollYProgress, [0, 1], [15, -15]);

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
          <div className="project-image-wrap relative rounded-2xl overflow-hidden aspect-[4/3] bg-ink/5 flex items-center justify-center p-4">
            <motion.div
              style={{ y }}
              className="absolute inset-4 flex items-center justify-center"
            >
              <Image
                src={project.image}
                alt={`${project.name} Screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain drop-shadow-md rounded-3xl" // Added 'rounded-3xl' to round the image corners
                priority={project.id === "01"}
              />
            </motion.div>
            {/* Soft border gradient overlay for depth */}
            <div className="absolute inset-0 border border-ink/10 rounded-2xl pointer-events-none" />
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
