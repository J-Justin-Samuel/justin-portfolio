"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

const certs = [
  {
    name: "Full Stack Web Development",
    org: "Udemy",
    year: "2024",
    color: "from-gold/20 to-amber-300/10",
    accent: "#F5B23A",
    verifyUrl: "#",
  },
  {
    name: "Machine Learning Specialization",
    org: "Coursera / DeepLearning.AI",
    year: "2024",
    color: "from-blue-400/20 to-cyan-300/10",
    accent: "#60A5FA",
    verifyUrl: "#",
  },
  {
    name: "React Developer Certificate",
    org: "Meta",
    year: "2023",
    color: "from-sky-400/20 to-blue-300/10",
    accent: "#38BDF8",
    verifyUrl: "#",
  },
  {
    name: "Node.js Application Development",
    org: "IBM",
    year: "2023",
    color: "from-green-400/20 to-emerald-300/10",
    accent: "#4ADE80",
    verifyUrl: "#",
  },
  {
    name: "Python for Data Science",
    org: "freeCodeCamp",
    year: "2023",
    color: "from-coral/20 to-orange-300/10",
    accent: "#FF6B57",
    verifyUrl: "#",
  },
];

export default function CertificationsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <section id="certifications" className="section-pad bg-ink/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
              Credentials
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display font-bold text-ink leading-[0.9]"
              style={{ fontSize: "clamp(48px, 7vw, 100px)" }}
            >
              certified &amp;
              <br />
              <span className="text-gold">continuously learning.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-ink/50 text-lg mt-4">
              Credentials that support my engineering journey.
            </p>
          </ScrollReveal>
        </div>

        {/* Drag hint */}
        <ScrollReveal delay={0.2}>
          <p className="text-ink/30 text-sm mb-6 flex items-center gap-2">
            <span>←</span> Drag to explore <span>→</span>
          </p>
        </ScrollReveal>

        {/* Horizontal slider */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px rgba(10,10,10,0.12)",
              }}
              className="flex-shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl border border-ink/8 overflow-hidden"
            >
              {/* Certificate image area */}
              <div
                className={`h-44 bg-gradient-to-br ${cert.color} flex items-center justify-center relative`}
              >
                <FiAward
                  size={60}
                  style={{ color: cert.accent, opacity: 0.4 }}
                />
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${cert.accent}20`,
                      color: cert.accent,
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
                {/* Replace inner content with:
                <Image
                  src={`/images/certs/${cert.name.toLowerCase().replace(/ /g,'-')}.jpg`}
                  alt={cert.name}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Card content */}
              <div className="p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-1">
                  {cert.org}
                </p>
                <h4 className="font-display font-bold text-ink text-lg leading-tight mb-4">
                  {cert.name}
                </h4>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-ink transition-colors animated-link"
                >
                  Verify Certificate
                  <FiArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
