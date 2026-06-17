"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const socials = [
  {
    label: "GitHub",
    icon: FiGithub,
    href: "https://github.com/J-Justin-Samuel",
  },
  {
    label: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/j-justin-samuel",
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual form submission logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const fields: Array<{
    key: keyof FormState;
    label: string;
    type?: string;
    multiline?: boolean;
  }> = [
    { key: "name", label: "Your Name" },
    { key: "email", label: "Email Address", type: "email" },
    { key: "message", label: "Your Message", multiline: true },
  ];

  return (
    <section id="contact" className="section-pad bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Headline */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-bold tracking-widest uppercase text-bg/30 mb-6">
                Let&apos;s Talk
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-bold text-bg leading-[0.9] mb-6"
                style={{ fontSize: "clamp(48px, 6vw, 90px)" }}
              >
                Have a project
                <br />
                in mind?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p
                className="font-display font-bold text-gold leading-tight mb-10"
                style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
              >
                Let&apos;s build something
                <br />
                great together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-10">
                <a
                  href="mailto:justinsamuel.codes@gmail.com"
                  className="group inline-flex items-center gap-3 text-bg font-display font-bold text-xl hover:text-gold transition-colors"
                >
                  justinsamuel.codes@gmail.com
                  <FiArrowUpRight
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                  />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex gap-6">
                {socials.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-bg/50 hover:text-bg transition-colors animated-link"
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact form */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="bg-bg/5 rounded-3xl p-8 border border-bg/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map(({ key, label, type, multiline }) => (
                  <div key={key} className="relative">
                    {multiline ? (
                      <textarea
                        id={key}
                        value={form[key]}
                        onChange={(e) =>
                          setForm({ ...form, [key]: e.target.value })
                        }
                        onFocus={() => setFocused(key)}
                        onBlur={() => setFocused(null)}
                        rows={5}
                        className="w-full bg-bg/10 text-bg border border-bg/20 rounded-xl px-5 pt-6 pb-3 text-sm focus:outline-none focus:border-gold transition-all resize-none peer"
                        placeholder=" "
                        required
                      />
                    ) : (
                      <input
                        id={key}
                        type={type || "text"}
                        value={form[key]}
                        onChange={(e) =>
                          setForm({ ...form, [key]: e.target.value })
                        }
                        onFocus={() => setFocused(key)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-bg/10 text-bg border border-bg/20 rounded-xl px-5 pt-6 pb-3 text-sm focus:outline-none focus:border-gold transition-all peer"
                        placeholder=" "
                        required
                      />
                    )}
                    <label
                      htmlFor={key}
                      className={`absolute left-5 transition-all text-bg/40 pointer-events-none ${
                        form[key] || focused === key
                          ? "top-2 text-xs text-gold"
                          : "top-4 text-sm"
                      }`}
                    >
                      {label}
                    </label>
                  </div>
                ))}

                <MagneticButton className="w-full">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink rounded-xl font-bold text-sm hover:bg-white transition-colors duration-300"
                  >
                    {submitted ? (
                      "Message Sent! ✓"
                    ) : (
                      <>
                        Send Message
                        <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </motion.button>
                </MagneticButton>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
