import { motion } from 'framer-motion';
import { Users, Lock, Sparkles, Activity, MessageSquare } from 'lucide-react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { projects } from '../data/projects';
import { sections } from '../data/constants';
import { itemReveal } from '../config/motion';
import { 
  CARD_STYLE, 
  CARD_HOVER, 
  HEADING_H2 
} from '../config/uiConfig';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function CollaborativeProjects() {
  const collabProjects = (projects || []).filter(p => p.collaborative);

  const getProjectMeta = (slug) => {
    switch (slug) {
      case 'eduvora': return { Icon: Sparkles, color: "text-amber-400 bg-amber-400/10 border-amber-400/20" };
      case 'flexion-flow': return { Icon: Activity, color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" };
      case 'eduguide-ai': return { Icon: MessageSquare, color: "text-blue-400 bg-blue-400/10 border-blue-400/20" };
      default: return { Icon: Sparkles, color: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20" };
    }
  };

  return (
    <SectionWrapper id="collaborative-projects" className="bg-[#030712] relative border-t border-white/5">
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full radial-glow-blue pointer-events-none z-0" />

      <div className="relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] block font-sora">
            {sections.collaborativeProjects.label}
          </span>
          <h2 className={HEADING_H2}>
            {sections.collaborativeProjects.title}
          </h2>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collabProjects.map((project, idx) => {
            const { Icon, color } = getProjectMeta(project.slug);
            return (
              <motion.div
                key={project.title || idx}
                {...itemReveal(idx * 0.1)}
                className={`${CARD_STYLE} ${CARD_HOVER} flex flex-col justify-between h-full group`}
              >
                <div className="space-y-5 text-left">
                  {/* Card Header */}
                  <div className="flex justify-between items-center">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${color}`}>
                      <Icon size={16} />
                    </div>
                    
                    {/* Collaborative Badge */}
                    <span className="bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-semibold font-sora uppercase tracking-wider px-2.5 py-1 rounded-lg flex items-center space-x-1.5 shadow-sm">
                      <Users size={10} className="text-[#3B82F6]" />
                      <span>COLLABORATIVE</span>
                    </span>
                  </div>

                  {/* Title Block */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-sora text-white tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold font-sora text-[#8B5CF6]">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 font-inter text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
                  {/* Tech stack badging - Responsive discrete pills */}
                  <div className="space-y-3 font-inter text-left">
                    <div>
                      <span className="text-zinc-500 font-mono font-bold uppercase text-[9px] block mb-1.5 tracking-wider">Primary Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {(project.primaryStack || []).map(tech => (
                          <span key={tech} className="px-2 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] font-semibold rounded border border-[#3B82F6]/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-zinc-500 font-mono font-bold uppercase text-[8.5px] block mb-1.5 tracking-wider">Supporting Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {(project.supportingStack || []).map(tech => (
                          <span key={tech} className="px-2 py-0.5 bg-white/5 text-zinc-400 text-[10px] rounded border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* locked status or github link */}
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sora font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-sm mt-auto"
                    >
                      <GithubIcon size={14} className="text-zinc-400" />
                      <span>GitHub Repository</span>
                    </a>
                  ) : (
                    <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center space-x-2 text-zinc-500 text-xs font-inter mt-auto">
                      <Lock size={12} className="text-zinc-500 flex-shrink-0" />
                      <span>Private development repository</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}
