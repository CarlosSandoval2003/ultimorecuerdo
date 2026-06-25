"use client";

import { useEffect, useRef } from "react";
import { TimelineSection } from "../data/timelineData";

interface BackgroundPaletteLayerProps {
  sections: TimelineSection[];
}

export function BackgroundPaletteLayer({ sections }: BackgroundPaletteLayerProps) {
  // Observaremos todas las secciones marcadas en el DOM
  useEffect(() => {
    const handleScroll = () => {
      // Find the current active section based on scroll position
      const sectionElements = document.querySelectorAll("[data-section-id]");
      let currentActiveId = sections[0].id; // Default to first

      sectionElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If the top of the section is somewhat in the middle of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentActiveId = el.getAttribute("data-section-id") || currentActiveId;
        }
      });

      const activeSection = sections.find(s => s.id === currentActiveId);
      if (activeSection) {
        const root = document.documentElement;
        const p = activeSection.palette;
        root.style.setProperty("--palette-primary", p.primary);
        root.style.setProperty("--palette-secondary", p.secondary);
        root.style.setProperty("--palette-accent", p.accent);
        root.style.setProperty("--palette-text-main", p.textMain);
        root.style.setProperty("--palette-text-muted", p.textMuted);
        root.style.setProperty("--palette-timeline-flow", p.timelineFlow);
        root.style.setProperty("--palette-particles", p.particles);
        root.style.setProperty("--palette-card-bg", p.cardBg);
        root.style.setProperty("--palette-card-hover", p.cardHover);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return <div className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-1000" style={{ backgroundColor: "var(--palette-primary)" }} />;
}
