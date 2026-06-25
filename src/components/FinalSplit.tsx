"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Play, Pause, ArrowLeft } from "lucide-react";
import { lyricsData } from "../data/lyricsData";
import { trackEvent } from "@/lib/trackEvent";

export function FinalSplit() {
  const [selected, setSelected] = useState<'left' | 'right' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const songs = {
    left: {
      title: "Todo Mi Amor Eres Tu (I Just Can't Stop Loving You)",
      artist: "Michael Jackson",
      image: "/images/71rWMh8QHnL._AC_SL1500_.jpg",
      audioSrc: "/audio/todomiamorerestu.mp3"
    },
    right: {
      title: "RECUERDOS SONOROS",
      artist: "SAIKO",
      image: "/images/eb0556d0d70c80ce4349aab34810caa3.1000x1000x1.png",
      audioSrc: "/audio/recuerdossonoros.mp3"
    }
  };

  useEffect(() => {
    if (selected && containerRef.current) {
      setTimeout(() => {
        const element = containerRef.current;
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY + 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      
      // Track the decision
      trackEvent("DECISION_MADE", {
        decision: selected,
        songTitle: songs[selected]?.title
      });

      // Auto-play when selected
      setIsPlaying(true);
      setCurrentTime(0);
      setCurrentLyricIndex(0);
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      }
    } else {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [selected]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Play error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const time = audioRef.current.currentTime;
    setCurrentTime(time);
    
    // Find the current lyric index
    if (selected) {
      const lyrics = lyricsData[selected];
      let newIndex = 0;
      for (let i = 0; i < lyrics.length; i++) {
        if (time >= lyrics[i].time) {
          newIndex = i;
        } else {
          break;
        }
      }
      if (newIndex !== currentLyricIndex) {
        setCurrentLyricIndex(newIndex);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentLyricIndex(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      // You can also call audioRef.current.play() here to loop if desired
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center pt-16 pb-40 z-10">
      {/* Hidden Audio Element */}
      {selected && (
        <audio
          ref={audioRef}
          src={songs[selected].audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onLoadedMetadata={handleLoadedMetadata}
          preload="metadata"
        />
      )}

      {/* Línea conectora que se bifurca si no hay selección */}
      <AnimatePresence>
        {!selected && (
          <motion.svg
            key="split-lines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-32 pointer-events-none"
            viewBox="0 0 300 128"
          >
            {/* Hacia la izquierda */}
            <motion.path
              d="M 150 0 C 150 64, 50 64, 50 128"
              fill="none"
              strokeWidth="2"
              stroke="var(--palette-timeline-flow)"
              className="opacity-50"
            />
            {/* Hacia la derecha */}
            <motion.path
              d="M 150 0 C 150 64, 250 64, 250 128"
              fill="none"
              strokeWidth="2"
              stroke="var(--palette-timeline-flow)"
              className="opacity-50"
            />
          </motion.svg>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="split-choices"
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-5xl px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Left Option */}
            <motion.button
              onClick={() => setSelected('left')}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[3rem] w-full md:w-1/2 border border-white/10 backdrop-blur-md overflow-hidden text-left"
              style={{ backgroundColor: "var(--palette-card-bg)" }}
              whileHover={{ scale: 1.05, backgroundColor: "var(--palette-card-hover)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex-shrink-0 bg-white/5 p-4 rounded-full">
                <Lock className="w-8 h-8 text-white/70" />
              </div>
              <div className="flex flex-col items-start z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">El final no tiene que ser el final.</h3>
                <p className="text-xs md:text-sm text-white/50 font-light">Si hay aun alguna duda en ti, entra aqui.</p>
              </div>
            </motion.button>

            {/* Right Option */}
            <motion.button
              onClick={() => setSelected('right')}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[3rem] w-full md:w-1/2 border border-white/10 backdrop-blur-md overflow-hidden text-left"
              style={{ backgroundColor: "var(--palette-card-bg)" }}
              whileHover={{ scale: 1.05, backgroundColor: "var(--palette-card-hover)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex-shrink-0 bg-white/5 p-4 rounded-full">
                <Lock className="w-8 h-8 text-white/70" />
              </div>
              <div className="flex flex-col items-start z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">El final.</h3>
              </div>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="player-view"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-10 mt-8"
          >
            {/* Back button */}
            <motion.button
              onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors w-fit group"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-light">Volver a las decisiones</span>
            </motion.button>

            {selected === 'left' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full text-left"
              >
                <p className="text-base md:text-lg font-light leading-relaxed text-white/80 italic border-l-2 border-white/20 pl-4 py-1">
                  Aquí irá el texto extra que mencionaste, para darle contexto a esta decisión antes de la canción.
                </p>
              </motion.div>
            )}

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center md:items-end">
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-md overflow-hidden shadow-2xl relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={songs[selected].image}
                  alt={songs[selected].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <div className="flex flex-col gap-0.5 flex-grow w-full">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-white/50 uppercase mb-0.5">
                    {selected === 'left' ? "El final no tiene que ser el final" : "El final"}
                  </span>
                  <h2 className="text-lg md:text-xl font-black tracking-tighter text-white mb-0.5 leading-tight">
                    {songs[selected].title}
                  </h2>
                  <p className="text-xs md:text-sm text-white/70 font-light flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center text-[6px] font-bold text-white">✓</span>
                    {songs[selected].artist}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <button 
                    onClick={togglePlayPause}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1DB954] hover:bg-[#1ed760] hover:scale-105 transition-all shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-black fill-black" />
                    ) : (
                      <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                    )}
                  </button>
                  <div className="flex-grow flex flex-col gap-0.5">
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative cursor-pointer group">
                      <div 
                        className="absolute top-0 left-0 h-full bg-white group-hover:bg-[#1DB954] rounded-full transition-all duration-100 ease-linear" 
                        style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                      />
                    </div>
                    <div className="flex justify-between w-full text-[8px] font-mono text-white/50">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lyrics Engine Container */}
            <div className="w-full mt-4 p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-md min-h-[350px] flex flex-col shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="flex-grow flex flex-col items-center justify-center relative z-10 w-full overflow-hidden h-full">
                <AnimatePresence mode="popLayout">
                  {selected && lyricsData[selected].map((lyric, index) => {
                    const isCurrent = index === currentLyricIndex;
                    const isPrev = index === currentLyricIndex - 1;
                    const isNext = index === currentLyricIndex + 1;

                    // Only render if it's one of the 3 active lines
                    if (!isCurrent && !isPrev && !isNext) return null;

                    return (
                      <motion.p
                        key={index}
                        layout
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{
                          opacity: isCurrent ? 1 : 0.3,
                          y: isPrev ? -45 : isCurrent ? 0 : 45,
                          scale: isCurrent ? 1.05 : 0.9,
                        }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`absolute text-center w-full max-w-2xl px-4 ${
                          isCurrent 
                            ? "text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                            : "text-lg md:text-xl font-light text-white/70"
                        }`}
                      >
                        {lyric.text}
                      </motion.p>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
