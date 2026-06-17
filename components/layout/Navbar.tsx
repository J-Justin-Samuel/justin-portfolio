"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Logo Container */}
      <MagneticButton>
        <button
          onClick={() => scrollTo("#home")}
          className="font-display font-bold text-xl tracking-tight text-ink flex items-center gap-3"
        >
          {/* Rounded Avatar Wrapper */}
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-ink/10 bg-ink/5">
            <Image
              src="/images/pics/js.jpg"
              alt="Justin Samuel"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </div>
          <span className="hidden sm:block">Justin Samuel</span>
        </button>
      </MagneticButton>

      {/* Nav Links */}
      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <button
              onClick={() => scrollTo(link.href)}
              className="animated-link text-sm font-medium text-ink/70 hover:text-ink transition-colors"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Resume Button */}
      <MagneticButton>
        <a
          href="/resume.pdf"
          download
          className="relative group px-5 py-2.5 rounded-full border-2 border-ink text-ink text-sm font-semibold overflow-hidden transition-all duration-300 hover:text-bg"
        >
          <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative flex items-center gap-2">
            Download Resume{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M1 11L11 1M11 1H4M11 1V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </a>
      </MagneticButton>
    </motion.nav>
  );
}
