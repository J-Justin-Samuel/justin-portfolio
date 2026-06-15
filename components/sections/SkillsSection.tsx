"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiSocketdotio,
  SiDocker,
  SiFigma,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiPython,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: DiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    label: "Tools & Architecture",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

function SkillPill({
  name,
  icon: Icon,
  color,
  delay,
}: {
  name: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{
        y: -4,
        boxShadow: `0 12px 30px ${color}30`,
        borderColor: `${color}60`,
      }}
      className="pill group cursor-default select-none"
    >
      <Icon
        size={16}
        style={{
          color,
          filter: "grayscale(0.3)",
        }}
      />
      <span className="text-ink/80 group-hover:text-bg">{name}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <ScrollReveal>
              <p className="text-xs font-bold tracking-widest uppercase text-ink/40 mb-4">
                Technical Stack
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-bold text-ink leading-[0.9]"
                style={{ fontSize: "clamp(48px, 7vw, 100px)" }}
              >
                tools &amp;
                <br />
                <span className="text-gold">technologies.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <p className="text-ink/50 max-w-xs text-lg lg:text-right">
              Technologies I use to transform ideas into real products.
            </p>
          </ScrollReveal>
        </div>

        {/* Skill categories */}
        <div className="space-y-14">
          {skillCategories.map((category, catIdx) => (
            <div key={category.label}>
              <ScrollReveal delay={catIdx * 0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-ink/40">
                    {category.label}
                  </span>
                  <div className="flex-1 h-px bg-ink/10" />
                </div>
              </ScrollReveal>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <SkillPill
                    key={skill.name}
                    {...skill}
                    delay={catIdx * 0.1 + skillIdx * 0.06}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee ticker */}
        <div className="mt-20 overflow-hidden border-y border-ink/10 py-4">
          <div className="marquee-track gap-8 flex">
            {Array(2)
              .fill(null)
              .map((_, i) =>
                [
                  ...skillCategories.flatMap((c) =>
                    c.skills.map((s) => s.name),
                  ),
                  "...",
                ].map((name, j) => (
                  <span
                    key={`${i}-${j}`}
                    className="font-display font-bold text-ink/10 text-2xl whitespace-nowrap mr-8"
                  >
                    {name}
                  </span>
                )),
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
