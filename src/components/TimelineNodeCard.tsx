"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { TimelineItem } from "../data/timelineData";
import { ExpandableSingleCard } from "./ExpandableSingleCard";
import { ExpandableGroupCard } from "./ExpandableGroupCard";

interface TimelineNodeCardProps {
  item: TimelineItem;
  index: number;
}

export function TimelineNodeCard({ item, index }: TimelineNodeCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex w-full my-12 items-center justify-center md:justify-${isEven ? "start" : "end"}`}
    >
      {/* Línea de conexión al centro (visible solo en desktop) */}
      <div className={`hidden md:block absolute top-1/2 w-[15%] h-px bg-current opacity-30 ${isEven ? "left-[35%]" : "right-[35%]"}`} style={{ color: "var(--palette-timeline-flow)" }} />

      <div className={`w-full max-w-[90%] md:max-w-[40%] ${isEven ? "md:pr-8 lg:pr-16 md:ml-[5%]" : "md:pl-8 lg:pl-16 md:mr-[5%]"}`}>
        {item.type === "single" ? (
          <ExpandableSingleCard item={item} />
        ) : (
          <ExpandableGroupCard item={item} />
        )}
      </div>
    </motion.div>
  );
}
