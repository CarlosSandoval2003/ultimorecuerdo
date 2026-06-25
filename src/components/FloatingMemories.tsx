"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/trackEvent";

// Aquí es donde puedes editar los textos que aparecerán al hacer clic/hover
export const floatingMemoriesData = [
  {
    id: 'lechuga',
    src: '/images/lechuga.png',
    text: 'Quiero creer que solo con ver la lechuga sabes a que me recuerda. Que oso que me pasara eso en la PRIMERA salida que teniamos JAJAJA. Ya casi no voy a burguer pero cuando voy es lo primero que pienso.',
  },
  {
    id: 'bebida',
    src: '/images/bebida.png',
    text: 'Recuerdo que ese dia en cayala fuimos a la torre y compramos este jugo. Te tome una foto mientras lo tomabas, me encantaba, creo que hasta de fondo la tuve. Aun las venden en la torre, siempre que las veo sonrio pensando en ese dia.',
  },
  {
    id: 'bebedero',
    src: '/images/bebedero.png',
    text: 'Recuerdo el final de ese mismo dia, tu y yo sentados en una banca, te acababa de comprar un bebedero para tu hamster, recuerdo lo feliz que eso te hizo y como me llenabas de besos y abrazos en la banca.',
  },
];

export function FloatingMemories() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto pt-10 pb-20 px-4 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 relative z-10">
      {floatingMemoriesData.map((mem, index) => (
        <div key={mem.id} className="relative flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4 + index,
              ease: "easeInOut",
              delay: index * 0.5
            }}
            className="relative cursor-pointer"
            onHoverStart={() => setActive(mem.id)}
            onHoverEnd={() => setActive(null)}
            onClick={() => {
              const newActive = active === mem.id ? null : mem.id;
              setActive(newActive);
              if (newActive) {
                trackEvent("CLICK_MEMORY", { memoryId: mem.id });
              }
            }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Un pequeño resplandor detrás de la imagen */}
            <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-150 pointer-events-none" />

            <motion.img
              src={mem.src}
              alt={mem.id}
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] relative z-10"
            />
          </motion.div>

          <AnimatePresence>
            {active === mem.id && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full mt-6 w-56 md:w-64 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl z-20 text-center"
              >
                <p className="text-sm md:text-base font-light text-white/90 leading-relaxed">
                  {mem.text}
                </p>
                {/* Triángulo del tooltip apuntando hacia arriba */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-black/80" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
