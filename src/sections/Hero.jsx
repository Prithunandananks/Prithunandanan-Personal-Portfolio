import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, FolderCode, Layers } from 'lucide-react';
import { profile } from '../data/profile';
import { metrics } from '../data/metrics';
import { ctas, coreTechs } from '../data/constants';
import { SECTION_CONTAINER, SCROLL_MARGIN, CARD_STYLE, CARD_HOVER } from '../config/uiConfig';
import { 
  fadeUp, 
  fadeDown, 
  fadeIn, 
  floatingAnimation 
} from '../config/motion';

const GithubIcon = ({ size = 18, className = "" }) => (
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

const LinkedinIcon = ({ size = 18, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = ({ size = 18, className = "" }) => (
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
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Hero() {
  // Symmetrical splitter for the layout header
  const nameSpaceIndex = (profile.fullName || "").indexOf(' ');
  const firstName = nameSpaceIndex !== -1 ? profile.fullName.substring(0, nameSpaceIndex) : profile.fullName;
  const lastName = nameSpaceIndex !== -1 ? profile.fullName.substring(nameSpaceIndex + 1) : "";

  const getMetricIcon = (key) => {
    switch (key) {
      case 'apis-engineered': return <Code size={16} className="text-blue-400" />;
      case 'projects': return <FolderCode size={16} className="text-[#8B5CF6]" />;
      case 'technologies': return <Layers size={16} className="text-cyan-400" />;
      case 'focus': return <Database size={16} className="text-purple-400" />;
      default: return null;
    }
  };

  return (
    <section id="home" className={`relative min-h-screen pt-32 pb-24 flex flex-col justify-center overflow-hidden bg-[#030712] ${SCROLL_MARGIN}`}>
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full radial-glow-blue pointer-events-none z-0" />
      <div className="absolute top-[15%] right-[-15%] w-[600px] h-[600px] rounded-full radial-glow-violet pointer-events-none z-0" />

      <div className={`${SECTION_CONTAINER} w-full z-10`}>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, CTAs & Tech pills */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Badge */}
            <motion.div 
              {...fadeDown(0)}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6]/50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest font-sora">
                {profile.role}
              </span>
            </motion.div>
  
            {/* Typography Heading */}
            <div className="space-y-4">
              <motion.h1 
                {...fadeUp(0.1)}
                className="text-5xl md:text-7xl font-bold font-sora text-white tracking-tight leading-[1.1]"
              >
                {firstName}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#A855F7]">
                  {lastName}
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p 
              {...fadeUp(0.2)}
              className="text-zinc-400 text-lg md:text-xl font-inter max-w-xl leading-relaxed font-light text-left"
            >
              {profile.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 text-white font-sora font-semibold text-sm rounded-xl flex items-center space-x-2 shadow-md shadow-[#3B82F6]/10 hover:shadow-[#3B82F6]/20 transition-all duration-300"
              >
                <span>{ctas.viewProjects}</span>
                <ArrowRight size={16} />
              </a>
              
              <a 
                href={profile.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sora font-medium text-sm rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-sm"
              >
                <GithubIcon size={16} />
                <span>{ctas.gitHub}</span>
              </a>

              <a 
                href={profile.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sora font-medium text-sm rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-sm"
              >
                <LinkedinIcon size={16} className="text-[#3B82F6]" />
                <span>{ctas.linkedIn}</span>
              </a>

              <a 
                href="#contact"
                className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sora font-medium text-sm rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-sm"
              >
                <MailIcon size={16} />
                <span>{ctas.contact}</span>
              </a>
            </motion.div>

            {/* Tech Pills */}
            <motion.div 
              {...fadeIn(0.4)}
              className="pt-6 border-t border-white/5 space-y-3"
            >
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-500 block text-left">Core Technologies</span>
              <div className="flex flex-wrap gap-2">
                {(coreTechs || []).map((pill) => (
                  <span 
                    key={pill} 
                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-zinc-300 font-inter text-xs rounded-lg transition-all duration-300 hover:border-white/20 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Premium Portrait Composition */}
          <motion.div 
            {...fadeIn(0.2)}
            className="lg:col-span-5 w-full flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Subtle atmospheric purple/blue glow behind portrait */}
              <div className="absolute w-[280px] h-[280px] rounded-full bg-[#8B5CF6]/5 blur-[70px] pointer-events-none z-0" />
              <div className="absolute w-[200px] h-[200px] rounded-full bg-[#3B82F6]/5 blur-[50px] pointer-events-none z-0" />

              {/* Faded Portrait (No rectangular card container, blends into background) */}
              <div className="relative w-[360px] h-[360px] overflow-hidden z-10 flex items-center justify-center select-none">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.fullName || "Portrait"} 
                    className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04] scale-[1.01] mask-portrait" 
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-zinc-600 font-mono text-sm">
                    Image
                  </div>
                )}
                
                {/* Smooth bottom gradient overlay to complete the blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Floating Card 1: Backend Engineering (Bottom-Left) */}
              <motion.div 
                {...floatingAnimation(4, 5, 0)}
                className="absolute bottom-[22%] left-[-12%] z-20 px-3 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-md flex items-center space-x-2"
              >
                <div className="w-6 h-6 rounded bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] border border-[#3B82F6]/20">
                  <Code size={12} />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-sora font-semibold text-white tracking-wide block leading-none">Backend</span>
                  <span className="text-[8px] font-inter text-zinc-400 block mt-0.5">Engineering</span>
                </div>
              </motion.div>

              {/* Floating Card 2: AI Systems Development (Top-Right) */}
              <motion.div 
                {...floatingAnimation(4, 6, 0.5)}
                className="absolute top-[20%] right-[-12%] z-20 px-3 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-md flex items-center space-x-2"
              >
                <div className="w-6 h-6 rounded bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] border border-[#8B5CF6]/20">
                  <Cpu size={12} />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-sora font-semibold text-white tracking-wide block leading-none">AI Systems</span>
                  <span className="text-[8px] font-inter text-zinc-400 block mt-0.5">Development</span>
                </div>
              </motion.div>

              {/* Floating Card 3: Distributed Systems (Bottom-Right) */}
              <motion.div 
                {...floatingAnimation(3, 5.5, 0.25)}
                className="absolute bottom-[15%] right-[-10%] z-20 px-3 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-md flex items-center space-x-2"
              >
                <div className="w-6 h-6 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Database size={12} />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-sora font-semibold text-white tracking-wide block leading-none">Distributed</span>
                  <span className="text-[8px] font-inter text-zinc-400 block mt-0.5">Systems</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Engineering Snapshot Section */}
        <div className="mt-28 pt-12 border-t border-white/5 text-left">
          <div className="mb-8">
            <h3 className="text-xl font-bold font-sora text-white">Engineering Snapshot</h3>
            <p className="text-xs text-zinc-500 font-inter mt-1">A curated overview of core highlights, development metrics, and focus areas.</p>
          </div>

          {/* Standardized 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(metrics || []).map((metric) => {
              const isLink = !!metric.link;
              const CardElement = isLink ? 'a' : 'div';
              const extraProps = isLink 
                ? { href: metric.link, target: "_blank", rel: "noopener noreferrer" } 
                : {};

              return (
                <CardElement 
                  key={metric.key}
                  {...extraProps}
                  className={`${CARD_STYLE} flex flex-col justify-between h-[155px] p-6 text-left ${
                    isLink ? `${CARD_HOVER} group cursor-pointer` : ''
                  }`}
                >
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="text-xs font-medium uppercase font-sora tracking-wider">{metric.label}</span>
                    {getMetricIcon(metric.key)}
                  </div>
                  <div className="my-2">
                    {metric.key === 'focus' ? (
                      <span className="text-base font-bold text-white tracking-tight leading-snug block">
                        {metric.value}
                      </span>
                    ) : (
                      <span className="text-3xl font-bold text-white tracking-tight">{metric.value}</span>
                    )}
                    <span className="text-[10px] text-zinc-400 block font-inter mt-0.5">{metric.subtitle}</span>
                  </div>
                  
                  {/* Render sparkline or description bottom block */}
                  {metric.sparkline === 'purple' && (
                    <div className="w-full h-8 mt-1 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path 
                          d="M0,25 L20,18 L40,24 L60,10 L80,15 L100,5" 
                          fill="none" 
                          stroke="#8B5CF6" 
                          strokeWidth="1" 
                        />
                      </svg>
                    </div>
                  )}
                  {metric.sparkline === 'cyan' && (
                    <div className="w-full h-8 mt-1 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path 
                          d="M0,20 Q30,10 60,25 T100,10" 
                          fill="none" 
                          stroke="#06B6D4" 
                          strokeWidth="1" 
                        />
                      </svg>
                    </div>
                  )}
                  {metric.description && (
                    <div className="text-[10px] text-zinc-500 font-inter">
                      <span>{metric.description}</span>
                    </div>
                  )}
                </CardElement>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
