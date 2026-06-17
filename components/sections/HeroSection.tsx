"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";

const stagger = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  },
  item: {
    hidden: { y: 80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] },
    },
  },
};

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "AI Projects" },
  { value: "500+", label: "Hours Coding" },
];

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/J-Justin-Samuel",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/j-justin-samuel",
    label: "LinkedIn",
  },
];

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const cardRotateX = useTransform(springY, [-300, 300], [8, -8]);
  const cardRotateY = useTransform(springX, [-300, 300], [-8, 8]);
  const imgX = useTransform(springX, [-300, 300], [-12, 12]);
  const imgY = useTransform(springY, [-300, 300], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen-adjust w-full overflow-hidden py-24 lg:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Floating gradient blobs */}
      <motion.div
        className="gradient-blob w-[500px] h-[500px] bg-gold/20"
        style={{ top: "-100px", right: "-100px" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="gradient-blob w-[300px] h-[300px] bg-coral/10"
        style={{ bottom: "50px", left: "-80px" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-20 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,420px] xl:grid-cols-[1fr,480px] gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={stagger.item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/30 text-sm font-medium text-ink">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="overflow-hidden">
              <motion.h1
                variants={stagger.item}
                className="font-display font-bold leading-[0.9] text-ink"
                style={{ fontSize: "clamp(72px, 10vw, 140px)" }}
              >
                <div className="overflow-hidden">
                  <motion.span className="block" variants={stagger.item}>
                    Just
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-gold"
                    variants={stagger.item}
                  >
                    Code
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span className="block" variants={stagger.item}>
                    Justin
                  </motion.span>
                </div>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              variants={stagger.item}
              className="text-lg md:text-xl text-ink/60 max-w-md leading-relaxed font-body"
            >
              Software Developer and AI Enthusiast building products that solve
              real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={stagger.item}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <button
                  onClick={() => scrollTo("#projects")}
                  className="group relative px-7 py-3.5 bg-ink text-bg rounded-full font-semibold text-sm overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gold translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
                  <span className="relative text-current group-hover:text-ink transition-colors">
                    View Projects
                  </span>
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="px-7 py-3.5 border-2 border-ink text-ink rounded-full font-semibold text-sm hover:bg-ink hover:text-bg transition-all duration-300"
                >
                  Let&apos;s Connect
                </button>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger.item}
              className="flex flex-wrap gap-8 pt-4 border-t border-ink/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-3xl text-ink">
                    {stat.value}
                  </p>
                  <p className="text-xs text-ink/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={stagger.item}
              className="flex items-center gap-6"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink/60 hover:text-ink hover:border-ink hover:scale-110 transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden lg:block"
          >
            {/* Card with parallax */}
            <motion.div
              style={{
                rotateX: cardRotateX,
                rotateY: cardRotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Golden background shape */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-gold"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main image card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative bg-ink/5 rounded-3xl overflow-hidden aspect-[3/4]"
              >
                {/* Placeholder image with gradient — replace with actual image */}
                <motion.div
                  style={{ x: imgX, y: imgY, scale: 1.1 }}
                  className="absolute inset-0 bg-gradient-to-br from-ink/20 via-gold/30 to-coral/20 flex items-center justify-center"
                >
                  <Image
                    src="/images/pics/justin.jpg"
                    alt="Justin Samuel"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Signature element */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p
                    className="font-display text-white text-sm italic"
                    style={{ fontStyle: "italic" }}
                  >
                    Justin Samuel ✦
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -left-8 top-1/4 glass rounded-2xl px-4 py-3 shadow-lg"
              animate={{ x: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <p className="text-sm font-semibold text-ink">
                Software Engineer
              </p>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-1/4 glass rounded-2xl px-4 py-3 shadow-lg"
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <p className="text-xs font-bold text-ink font-display">
                Web Developer
              </p>
              <p className="text-xs text-ink/50">Full Stack</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-ink/40 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-ink/30 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
