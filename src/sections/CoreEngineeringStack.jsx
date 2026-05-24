import { Terminal, Cpu, Layout, Database, Layers, Sparkles, Wrench } from 'lucide-react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { skillCategories } from '../data/skills';
import { sections } from '../data/constants';
import { 
  CARD_STYLE, 
  CARD_HOVER, 
  HEADING_H2, 
  SUBTITLE_TEXT 
} from '../config/uiConfig';

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'Terminal': return Terminal;
    case 'Cpu': return Cpu;
    case 'Layout': return Layout;
    case 'Database': return Database;
    case 'Layers': return Layers;
    case 'Sparkles': return Sparkles;
    case 'Wrench': return Wrench;
    default: return Terminal;
  }
};

export default function CoreEngineeringStack() {
  const categories = skillCategories || [];

  return (
    <SectionWrapper id="skills" className="bg-[#030712] relative border-t border-white/5">
      {/* Subtle background ambient glows */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full radial-glow-blue pointer-events-none z-0 opacity-20" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] rounded-full radial-glow-violet pointer-events-none z-0 opacity-20" />

      <div className="relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">
            {sections.engineeringStack.label}
          </span>
          <h2 className={HEADING_H2}>
            {sections.engineeringStack.title}
          </h2>
          <p className={SUBTITLE_TEXT}>
            {sections.engineeringStack.subtitle}
          </p>
        </div>

        {/* Dynamic Bento-Style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, idx) => {
            const Icon = getCategoryIcon(category.icon);
            // Optional: make specific cards span 2 columns on medium/large screens for visual rhythm
            const isWideCard = category.id === 'backend' || category.id === 'databases';
            const colSpanClass = isWideCard 
              ? "md:col-span-2 lg:col-span-2" 
              : "col-span-1";

            return (
              <div 
                key={category.id || idx}
                className={`${CARD_STYLE} ${CARD_HOVER} ${colSpanClass} flex flex-col space-y-8 p-8 md:p-10`}
              >
                {/* Card Header */}
                <div className="flex items-center space-x-3 border-b border-white/5 pb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${category.color || 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20'}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold font-sora text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  {(category.skills || []).map((skill, sIdx) => (
                    <div key={skill.name || sIdx} className="flex items-start space-x-3.5 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                      <div className="space-y-0.5 text-left">
                        <h4 className="text-sm font-semibold font-sora text-zinc-100 tracking-tight">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-zinc-400 font-inter font-light leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}
