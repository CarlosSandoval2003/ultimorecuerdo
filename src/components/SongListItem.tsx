"use client";

import { motion } from "framer-motion";
import { Song } from "../data/timelineData";
import { Play } from "lucide-react";

interface SongListItemProps {
  song: Song;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function SongListItem({ song, index, isActive, onClick }: SongListItemProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-3 rounded-lg text-left transition-colors duration-200 group ${
        isActive ? "bg-white/10" : "hover:bg-white/5"
      }`}
    >
      <div className="w-8 flex justify-center text-sm font-mono opacity-50 group-hover:opacity-100 transition-opacity relative">
        <span className="group-hover:hidden">{index}</span>
        <Play size={14} className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <span className={`font-medium truncate ${isActive ? "text-[var(--palette-accent)]" : "text-white"}`}>
          {song.title}
        </span>
        <span className="text-xs opacity-60 truncate">
          {song.artist}
        </span>
      </div>
    </motion.button>
  );
}
