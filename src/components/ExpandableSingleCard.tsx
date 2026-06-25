"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { TimelineItem } from "../data/timelineData";
import { X, PlayCircle, PauseCircle } from "lucide-react";
import { trackEvent } from "@/lib/trackEvent";

export function ExpandableSingleCard({ item }: { item: TimelineItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isOpen) {
      trackEvent("VIEW_SONG", { songTitle: item.title });
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
  }, [isOpen]);

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
      {item.audio && (
        <audio 
          ref={audioRef} 
          src={item.audio} 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      )}
      <motion.div
        layoutId={`card-${item.id}`}
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
          <div className="flex flex-col gap-1">
            <motion.h3 layoutId={`title-${item.id}`} className="text-xl md:text-2xl font-bold tracking-tight">
              {item.title}
            </motion.h3>
            <motion.p layoutId={`desc-${item.id}`} className="text-sm font-light opacity-80 line-clamp-2">
              {item.description}
            </motion.p>
          </div>
        </div>
        
        {/* Placeholder hover indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayCircle size={24} className="text-white/50" />
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
                layoutId={`card-${item.id}`}
                className="w-full md:w-[600px] max-h-[90vh] md:max-h-[80vh] rounded-2xl overflow-y-auto border border-white/10 shadow-2xl flex flex-col pointer-events-auto"
                style={{ backgroundColor: "var(--palette-secondary)" }}
              >
                <div className="p-6 md:p-10 flex flex-col gap-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
                


                <div className="flex flex-col gap-4">
                  <motion.h3 layoutId={`title-${item.id}`} className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: "var(--palette-text-main)" }}>
                    {item.title}
                  </motion.h3>
                  
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
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

                  <motion.div layoutId={`desc-${item.id}`} className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed font-light mb-4" style={{ color: "var(--palette-text-muted)" }}>
                      {item.description}
                    </p>
                    {item.details ? (
                      <div className="text-sm leading-relaxed opacity-85 whitespace-pre-line" style={{ color: "var(--palette-text-muted)" }}>
                        {item.details}
                      </div>
                    ) : (
                      <p className="text-sm opacity-50">
                        Esta canción representa un momento clave en el viaje. Más adelante, aquí se podrán añadir letras, créditos de producción o recuerdos específicos asociados a la pista.
                      </p>
                    )}
                  </motion.div>
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
