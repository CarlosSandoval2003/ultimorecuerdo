"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TimelineFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animamos la opacidad y el dibujo del trazo SVG con el scroll
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none flex justify-center w-full z-0 overflow-hidden">
      <motion.svg
        viewBox="0 0 100 2000"
        preserveAspectRatio="none"
        className="w-[100px] md:w-[200px] h-full"
        style={{ opacity }}
      >
        <motion.path
          d="M 50 0 C 100 200, 0 400, 50 600 C 100 800, 0 1000, 50 1200 C 100 1400, 0 1600, 50 1800 C 100 1900, 50 2000, 50 2000"
          fill="none"
          strokeWidth="2"
          stroke="var(--palette-timeline-flow)"
          style={{ pathLength, transition: "stroke 0.8s ease-in-out" }}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        />
        {/* Glow effect */}
        <motion.path
          d="M 50 0 C 100 200, 0 400, 50 600 C 100 800, 0 1000, 50 1200 C 100 1400, 0 1600, 50 1800 C 100 1900, 50 2000, 50 2000"
          fill="none"
          strokeWidth="6"
          stroke="var(--palette-timeline-flow)"
          style={{ pathLength, transition: "stroke 0.8s ease-in-out" }}
          className="opacity-10 blur-md"
        />
      </motion.svg>
    </div>
  );
}
