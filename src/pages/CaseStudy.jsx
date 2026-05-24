import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, Layers, Sparkles, Lock, Terminal, Globe, Wrench, Check } from 'lucide-react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { projects } from '../data/projects';
import { caseStudies } from '../data/caseStudies';
import { 
  CARD_STYLE, 
  CARD_HOVER, 
  BADGE_STYLE, 
  BADGE_TEXT, 
  HEADING_H2 
} from '../config/uiConfig';

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'Cpu': return Cpu;
    case 'Globe': return Globe;
    case 'Database': return Database;
    case 'Layers': return Layers;
    case 'Sparkles': return Sparkles;
    case 'Terminal': return Terminal;
    case 'Wrench': return Wrench;
    default: return Terminal;
  }
};

export default function CaseStudy() {
  const { slug } = useParams();
  const project = (projects || []).find(p => p.slug === slug);
  const study = caseStudies[slug];

  if (!project || !study) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 text-center px-6">
        <h1 className="text-2xl font-bold text-white font-sora">Case Study Not Found</h1>
        <p className="text-zinc-500 font-inter text-sm max-w-xs">
          The requested project detailed case study is not available or is currently in draft.
        </p>
        <Link to="/" className="text-[#3B82F6] hover:underline font-sora text-sm flex items-center space-x-1.5 pt-2">
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  // Combine stacks safely
  const allTechs = [...(project.primaryStack || []), ...(project.supportingStack || [])];

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* 1. HERO SECTION */}
      <SectionWrapper id="case-study-hero" usePadding={false} className="relative">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full radial-glow-blue pointer-events-none z-0 opacity-30" />
        
        <div className="relative z-10 text-left space-y-6">
          {/* Back Nav Link */}
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-[#3B82F6] hover:text-[#3B82F6]/80 font-sora font-semibold text-sm transition-all group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Heading */}
          <div className="space-y-3">
            <div className={BADGE_STYLE}>
              <Terminal size={12} className="text-[#3B82F6]" />
              <span className={BADGE_TEXT}>
                {project.category} Case Study
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora text-white tracking-tight leading-[1.15]">
              {project.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Systems Design</span>
            </h1>
            <p className="text-zinc-400 font-inter text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              {project.subtitle} – Technical breakdown of asynchronous architectures, caching strategies, and distributed task queues.
            </p>
          </div>

          {/* Architecture Meta tags & Stacks */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {project.architecture && (
              <span className="px-3.5 py-1.5 bg-[#8B5CF6]/10 text-[#8B5CF6] font-mono text-xs rounded-lg border border-[#8B5CF6]/20 font-bold uppercase tracking-wide">
                Arch: {project.architecture}
              </span>
            )}
            {project.status && (
              <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 font-mono text-xs rounded-lg border border-emerald-500/20 font-bold uppercase tracking-wide">
                Status: {project.status}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {allTechs.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-white/5 text-zinc-300 font-inter text-xs rounded-lg border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 2. PROBLEM STATEMENT */}
      <SectionWrapper id="problem-statement" usePadding={false} className="relative border-t border-white/5 pt-16">
        <div className="relative z-10 text-left space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">// Crisis scaling bottleneck</span>
            <h2 className={HEADING_H2}>Problem Statement</h2>
          </div>

          <div className={`${CARD_STYLE} p-8 md:p-10 border-red-500/10`}>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold font-sora text-white tracking-tight">
                {study.problemStatement?.title || "Core Challenge"}
              </h3>
              <p className="text-zinc-400 font-inter text-base leading-relaxed font-light">
                {study.problemStatement?.text}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. SYSTEM ARCHITECTURE */}
      <SectionWrapper id="system-architecture" usePadding={false} className="relative border-t border-white/5 pt-16">
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full radial-glow-violet pointer-events-none z-0 opacity-20" />
        
        <div className="relative z-10 text-left space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">// Multi-service coordination</span>
            <h2 className={HEADING_H2}>System Architecture</h2>
          </div>

          {/* Grid of Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(study.systemArchitecture || []).map((component, idx) => {
              const Icon = getCategoryIcon(component.icon);
              return (
                <div 
                  key={idx}
                  className={`${CARD_STYLE} ${CARD_HOVER} flex flex-col justify-between p-6 h-full`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${component.color}`}>
                        <Icon size={16} />
                      </div>
                      <h3 className="text-sm font-bold font-sora text-white tracking-tight">
                        {component.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 font-inter font-light leading-relaxed">
                      {component.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. ENGINEERING HIGHLIGHTS */}
      <SectionWrapper id="engineering-highlights" usePadding={false} className="relative border-t border-white/5 pt-16">
        <div className="relative z-10 text-left space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">// Grounded metrics</span>
            <h2 className={HEADING_H2}>Engineering Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(study.highlights || []).map((highlight, idx) => (
              <div 
                key={idx}
                className={`${CARD_STYLE} flex flex-col justify-between p-6 h-full text-left`}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-emerald-400 border-b border-white/5 pb-3">
                    <Check size={14} className="flex-shrink-0" />
                    <h3 className="text-sm font-bold font-sora text-white tracking-tight">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-inter font-light leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. PERFORMANCE & DESIGN DECISIONS */}
      <SectionWrapper id="design-decisions" usePadding={false} className="relative border-t border-white/5 pt-16">
        <div className="relative z-10 text-left space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">// Architectural trade-offs</span>
            <h2 className={HEADING_H2}>Performance & Design Decisions</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {(study.designDecisions || []).map((decision, idx) => (
              <div 
                key={idx}
                className={`${CARD_STYLE} p-8 md:p-10 text-left space-y-3`}
              >
                <h3 className="text-base font-bold font-sora text-white tracking-tight flex items-center space-x-2">
                  <span className="text-[#3B82F6] font-mono text-xs">// 0{idx + 1}.</span>
                  <span>{decision.decision}</span>
                </h3>
                <p className="text-sm text-zinc-400 font-inter font-light leading-relaxed pl-0 md:pl-7">
                  {decision.rational}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. PROJECT STATUS & NAVIGATION */}
      <SectionWrapper id="project-status" usePadding={false} className="relative border-t border-white/5 pt-16">
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-zinc-500 text-sm font-inter">
            <Lock size={14} className="text-zinc-500" />
            <span>Repository currently private during active development.</span>
          </div>

          <div className="pt-2">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-[#3B82F6] hover:text-[#3B82F6]/80 font-sora font-semibold text-sm transition-all"
            >
              <ArrowLeft size={16} />
              <span>Back to Main Portfolio</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}
