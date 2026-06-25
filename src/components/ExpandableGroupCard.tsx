"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { TimelineItem } from "../data/timelineData";
import { X, ListMusic, PlayCircle, PauseCircle } from "lucide-react";
import { SongListItem } from "./SongListItem";
import { trackEvent } from "@/lib/trackEvent";

export function ExpandableGroupCard({ item }: { item: TimelineItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSongId, setActiveSongId] = useState<string | null>(null);

  const activeSong = item.songs?.find(s => s.id === activeSongId) || item.songs?.[0];
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (activeSongId === null) {
        trackEvent("VIEW_GROUP", { groupTitle: item.title });
      } else {
        trackEvent("VIEW_SONG_IN_GROUP", { songTitle: activeSong?.title });
      }
      document.body.style.overflow = "hidden";
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      }
    } else {
      document.body.style.overflow = "";
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, activeSongId]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      }
    }
  };

  return (
    <>
      {activeSong?.audio && (
        <audio 
          ref={audioRef} 
          src={activeSong.audio} 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      )}
      <motion.div
        layoutId={`g-card-${item.id}`}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer group relative overflow-hidden rounded-xl border border-white/5 backdrop-blur-sm p-4 md:p-6 transition-colors duration-300"
        style={{ backgroundColor: "var(--palette-card-bg)" }}
        whileHover={{ scale: 1.02, backgroundColor: "var(--palette-card-hover)" }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-md bg-black/20 flex items-center justify-center overflow-hidden border border-white/5 relative">
            {item.image ? (
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(45deg, var(--palette-accent), transparent)" }} />
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between">
              <motion.h3 layoutId={`g-title-${item.id}`} className="text-xl md:text-2xl font-bold tracking-tight">
                {item.title}
              </motion.h3>
              <ListMusic size={20} className="opacity-50" />
            </div>
            <motion.p layoutId={`g-desc-${item.id}`} className="text-sm font-light opacity-80 line-clamp-2">
              {item.description}
            </motion.p>
            <div className="mt-1 text-xs opacity-50 tracking-wider">
              {item.songs?.length} CANCIONES
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 md:p-0">
              <motion.div
                layoutId={`g-card-${item.id}`}
                className="w-full md:w-[800px] h-[90vh] md:h-[80vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row pointer-events-auto"
                style={{ backgroundColor: "var(--palette-secondary)" }}
              >
                {/* Left Panel - Detail view of active song */}
                <div className="w-full md:w-5/12 p-6 md:p-8 flex flex-col gap-6 bg-black/20 border-b md:border-b-0 md:border-r border-white/5 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <X size={20} />
                </button>
                


                <div className="flex flex-col gap-2 mt-auto">
                  <span className="text-xs tracking-widest uppercase opacity-60">Seleccionada</span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSong?.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-1"
                    >
                      <h4 className="text-2xl font-bold">{activeSong?.title}</h4>
                      <span className="text-sm opacity-80" style={{ color: "var(--palette-accent)" }}>{activeSong?.artist}</span>
                      <p className="text-sm font-light mt-4 leading-relaxed opacity-70">
                        {activeSong?.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                        <button 
                          onClick={togglePlay}
                          className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg" 
                          style={{ backgroundColor: "var(--palette-accent)" }}
                        >
                          {isPlaying ? (
                            <PauseCircle size={28} className="text-white" />
                          ) : (
                            <PlayCircle size={28} className="text-white" />
                          )}
                        </button>
                        <span className="text-sm font-medium tracking-wider" style={{ color: "var(--palette-text-muted)" }}>
                          {isPlaying ? "REPRODUCIENDO..." : "REPRODUCIR"}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Panel - List of songs */}
              <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col gap-6 overflow-y-auto">
                <div className="flex justify-between items-start hidden md:flex">
                  <div className="flex flex-col">
                    <motion.h3 layoutId={`g-title-${item.id}`} className="text-3xl font-black tracking-tighter">
                      {item.title}
                    </motion.h3>
                    <motion.p layoutId={`g-desc-${item.id}`} className="text-sm mt-2 opacity-60">
                      {item.description}
                    </motion.p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-1 mt-4">
                  {item.songs?.map((song, idx) => (
                    <SongListItem
                      key={song.id}
                      song={song}
                      index={idx + 1}
                      isActive={activeSongId === song.id || (!activeSongId && idx === 0)}
                      onClick={() => setActiveSongId(song.id)}
                    />
                  ))}
                </div>
              </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
