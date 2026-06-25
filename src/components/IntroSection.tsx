"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-20 z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-serif" style={{ color: "var(--palette-text-main)" }}>
          Todavía encuentro canciones para ti
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide leading-relaxed" style={{ color: "var(--palette-text-muted)" }}>
          Un último recuerdo, solo baja y escucha. <br className="hidden md:block" />

        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--palette-text-muted)" }}>Descubre</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-transparent to-current"
          style={{ color: "var(--palette-timeline-flow)" }}
        />
      </motion.div>
    </motion.section>
  );
}
