import { motion } from 'framer-motion';
import { Shield, Brain, Cpu, Compass } from 'lucide-react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { experience } from '../data/experience';
import { sections } from '../data/constants';
import { itemReveal } from '../config/motion';
import { 
  CARD_STYLE, 
  CARD_HOVER, 
  HEADING_H2, 
  SUBTITLE_TEXT 
} from '../config/uiConfig';

export default function Journey() {
  const getTimelineIcon = (idx) => {
    switch (idx % 4) {
      case 0: return Shield;
      case 1: return Cpu;
      case 2: return Brain;
      case 3: return Compass;
      default: return Shield;
    }
  };

  return (
    <SectionWrapper id="journey" className="bg-[#030712] relative border-t border-white/5">
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full radial-glow-blue pointer-events-none z-0" />

      <div className="relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">
            {sections.journey.label}
          </span>
          <h2 className={HEADING_H2}>
            {sections.journey.title}
          </h2>
          <p className={SUBTITLE_TEXT}>
            {sections.journey.subtitle}
          </p>
        </div>

        {/* Central Timeline Wrapper (Restricted max-width for horizontal focus) */}
        <div className="max-w-4xl mx-auto text-left">
          
          {/* Timeline Path - Stacked flow on mobile, vertical line timeline on md+ screens */}
          <div className="relative md:border-l md:border-white/10 ml-0 md:ml-8 pl-0 md:pl-10 space-y-8 md:space-y-12 py-2">
            
            {/* Vertical gradient overlay line (md+ only) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-transparent pointer-events-none" />

            {(experience || []).map((item, idx) => {
              const IconComponent = getTimelineIcon(idx);
              return (
                <motion.div
                  key={item.year || idx}
                  {...itemReveal(idx * 0.1)}
                  className="relative text-left"
                >
                  {/* Floating Orb Checkpoint (md+ only) */}
                  <div className="hidden md:flex absolute md:-left-[52px] top-1.5 w-6 h-6 rounded-full bg-[#030712] items-center justify-center border border-white/10 z-10 shadow-lg">
                    <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white scale-90">
                      <IconComponent size={10} />
                    </div>
                  </div>

                  {/* Unified Glass Timeline Card */}
                  <div className={`${CARD_STYLE} ${CARD_HOVER} relative group`}>
                    
                    {/* Top Indicator bar */}
                    <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    {/* Title & Year */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-3 mb-4">
                      <h3 className="text-lg font-bold font-sora text-white tracking-tight group-hover:text-[#3B82F6] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                        {item.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 font-inter text-sm leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2.5 py-0.5 bg-white/5 text-zinc-300 font-inter text-[10px] rounded border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}
