"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

const certs = [
  {
    name: "Full Stack Web Development",
    org: "Udemy",
    year: "2026",
    color: "from-gold/20 to-amber-300/10",
    accent: "#f53af5",
    image: "/images/certificates/certificate1.jpg",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-cb915080-f9b5-4234-968c-a939506bac1c",
  },
  {
    name: "Javascript Algorithms and Data Structures",
    org: "freeCodeCamp",
    year: "2026",
    color: "from-violet-600/20 to-fuchsia-400/10",
    accent: "#fabc60",
    image: "/images/certificates/certificate2.jpg",
    verifyUrl:
      "https://www.freecodecamp.org/certification/justin_samuel/javascript-algorithms-and-data-structures-v8",
  },
  {
    name: "Front-End Development Libraries",
    org: "freeCodeCamp",
    year: "2025",
    color: "from-sky-400/20 to-blue-300/10",
    accent: "#38BDF8",
    image: "/images/certificates/certificate3.jpg",
    verifyUrl:
      "https://www.freecodecamp.org/certification/justin_samuel/front-end-development-libraries",
  },
  {
    name: "Responsive Web Design",
    org: "freeCodeCamp",
    year: "2025",
    color: "from-indigo-400/20 to-purple-300/10",
    accent: "#4ADE80",
    image: "/images/certificates/certificate4.jpg",
    verifyUrl:
      "https://www.freecodecamp.org/certification/justin_samuel/responsive-web-design",
  },
  {
    name: "Python for Beginners",
    org: "simplilearn",
    year: "2025",
    color: "from-coral/20 to-orange-300/10",
    accent: "#FF6B57",
    image: "/images/certificates/certificate5.jpg",
    verifyUrl: "https://simpli-web.app.link/e/38Taadpd23b",
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
                className={`h-44 bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden isolation-isolate p-3`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    fill
                    sizes="(max-width: 768px) 300px, 340px"
                    className="object-contain rounded-xl drop-shadow-sm" // 'object-contain' stops cropping; 'rounded-xl' rounds the image edges perfectly
                  />
                </div>

                {/* Visual badge overlay stays cleanly visible above image layers */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md"
                    style={{
                      background: `${cert.accent}dd`,
                      color: "#ffffff",
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
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
