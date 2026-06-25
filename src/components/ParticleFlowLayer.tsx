"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ParticleFlowLayer() {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generar partículas aleatorias
    const items = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${30 + Math.random() * 40}%`, // Mantener cerca del centro
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 rounded-full opacity-50"
          style={{
            backgroundColor: "var(--palette-particles)",
            left: p.left,
            bottom: "-10%",
            boxShadow: "0 0 8px 2px var(--palette-particles)",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
