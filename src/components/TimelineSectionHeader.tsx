"use client";

import { motion } from "framer-motion";

interface TimelineSectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function TimelineSectionHeader({ title, subtitle, description }: TimelineSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center text-center my-24 md:my-32 px-4 relative"
    >
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 opacity-20" style={{ backgroundColor: "var(--palette-text-muted)" }} />
      <div className="bg-background relative px-8 py-4 inline-flex flex-col items-center" style={{ backgroundColor: "var(--palette-primary)", transition: "background-color 0.8s ease-in-out" }}>
        {subtitle && (
          <span className="text-sm md:text-base tracking-[0.2em] uppercase mb-4" style={{ color: "var(--palette-accent)" }}>
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl font-serif tracking-wide" style={{ color: "var(--palette-text-main)" }}>
          {title}
        </h2>
        {description && (
          <p className="mt-6 text-sm md:text-base max-w-lg font-light" style={{ color: "var(--palette-text-muted)" }}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
