"use client";

import { timelineData } from "@/data/timelineData";
import { IntroSection } from "@/components/IntroSection";
import { TimelineFlow } from "@/components/TimelineFlow";
import { TimelineSectionHeader } from "@/components/TimelineSectionHeader";
import { TimelineNodeCard } from "@/components/TimelineNodeCard";
import { BackgroundPaletteLayer } from "@/components/BackgroundPaletteLayer";
import { ParticleFlowLayer } from "@/components/ParticleFlowLayer";

import { FinalSplit } from "@/components/FinalSplit";
import { FloatingMemories } from "@/components/FloatingMemories";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-white/20 pb-40">
      <BackgroundPaletteLayer sections={timelineData} />
      <ParticleFlowLayer />
      
      <IntroSection />

      <div className="relative max-w-7xl mx-auto mt-20">
        <TimelineFlow />
        
        {timelineData.map((section, sectionIdx) => (
          <div 
            key={section.id} 
            data-section-id={section.id} 
            className="relative pt-10"
          >
            <TimelineSectionHeader
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
            />
            
            <div className="flex flex-col gap-4">
              {section.items.map((item, itemIdx) => (
                <TimelineNodeCard
                  key={item.id}
                  item={item}
                  index={itemIdx}
                />
              ))}
            </div>
            
            {section.id === "acto-1" && (
              <div className="mt-10">
                {/* Objetos flotantes independientes de la línea de tiempo */}
                <FloatingMemories />
              </div>
            )}
          </div>
        ))}
        
        {/* Bifurcación Final */}
        <FinalSplit />
      </div>
    </main>
  );
}
