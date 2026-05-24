import { Link } from 'react-router-dom';
import { Check, ExternalLink, GitBranch, Lock } from 'lucide-react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { projects } from '../data/projects';
import { sections, ctas } from '../data/constants';
import { 
  CARD_STYLE, 
  BADGE_STYLE, 
  BADGE_TEXT, 
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

export default function FeaturedProject() {
  const project = (projects || []).find(p => p.featured);
  
  if (!project) {
    // Graceful fallback for defensive rendering if no featured project exists
    return (
      <SectionWrapper id="projects" className="bg-[#030712] relative border-t border-white/5">
        <div className="text-center py-12">
          <p className="text-zinc-500 font-inter">No featured projects available at this time.</p>
        </div>
      </SectionWrapper>
    );
  }

  // Split features dynamically and safely into 3 columns
  const featuresList = project.features || [];
  const colSize = Math.ceil(featuresList.length / 3);
  const col1 = featuresList.slice(0, colSize);
  const col2 = featuresList.slice(colSize, colSize * 2);
  const col3 = featuresList.slice(colSize * 2);

  // Combine primary and supporting stack safely
  const allTechs = [...(project.primaryStack || []), ...(project.supportingStack || [])];

  return (
    <SectionWrapper id="projects" className="bg-[#030712] relative border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full radial-glow-blue pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full radial-glow-violet pointer-events-none z-0" />

      <div className="relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">
            {sections.featuredProject.label}
          </span>
          <h2 className={HEADING_H2}>
            {sections.featuredProject.title}
          </h2>
        </div>

        {/* Unified Glass Spotlight Card */}
        <div className={`${CARD_STYLE} !p-8 lg:!p-12 relative overflow-hidden`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Operations Dashboard Preview */}
            <div className="lg:col-span-6 w-full relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] opacity-10 group-hover:opacity-20 blur-md transition duration-500" />
              <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#020617] shadow-2xl aspect-video">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title || "Project Screenshot"} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-600 font-mono text-sm">
                    Image Not Available
                  </div>
                )}
                
                {/* Soft reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
              </div>
            </div>

            {/* Right Side: Details & Tech Specifications */}
            <div className="lg:col-span-6 text-left space-y-6">
              
              <div className="space-y-2">
                <div className={BADGE_STYLE}>
                  <GitBranch size={12} className="text-[#3B82F6]" />
                  <span className={BADGE_TEXT}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-sora text-white tracking-tight">
                  {project.title} {project.subtitle ? `– ${project.subtitle}` : ""}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-400 font-inter text-base leading-relaxed">
                {project.description}
              </p>

              {/* Technology Pills */}
              <div className="flex flex-wrap gap-2">
                {allTechs.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-white/5 text-zinc-300 font-inter text-xs rounded-lg border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 3-Column Bullet Features - Responsive Grid */}
              <div className="pt-6 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-zinc-400 font-inter">
                  
                  {/* Column 1 */}
                  {col1.length > 0 && (
                    <div className="space-y-3">
                      {col1.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Column 2 */}
                  {col2.length > 0 && (
                    <div className="space-y-3">
                      {col2.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Column 3 */}
                  {col3.length > 0 && (
                    <div className="space-y-3">
                      {col3.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to={`/case-study/${project.slug}`}
                  className="px-5 py-3 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 text-white font-sora font-semibold text-xs rounded-xl flex items-center space-x-2 shadow-lg shadow-[#3B82F6]/15 transition-all duration-300"
                >
                  <span>{ctas.viewCaseStudy}</span>
                  <ExternalLink size={12} />
                </Link>

                {project.githubLink ? (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sora font-medium text-xs rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-sm"
                  >
                    <GithubIcon size={12} />
                    <span>{ctas.gitHubPublic}</span>
                  </a>
                ) : (
                  <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center space-x-2 text-zinc-500 text-xs font-inter">
                    <Lock size={12} className="text-zinc-500 flex-shrink-0" />
                    <span>Private development repository</span>
                  </div>
                )}

                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sora font-medium text-xs rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-sm"
                  >
                    <span>{ctas.liveDemo}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
