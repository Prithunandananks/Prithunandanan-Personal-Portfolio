import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/layout/SectionWrapper';
import { profile } from '../data/profile';
import { sections } from '../data/constants';
import { 
  CARD_STYLE, 
  CARD_HOVER, 
  HEADING_H2, 
  SUBTITLE_TEXT 
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

const LinkedinIcon = ({ size = 16, className = "" }) => (
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

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (profile.email) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-[#030712] relative border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full radial-glow-blue pointer-events-none z-0" />

      <div className="relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">
            {sections.contact.label}
          </span>
          <h2 className={HEADING_H2}>
            {sections.contact.title}
          </h2>
          <p className={SUBTITLE_TEXT}>
            {sections.contact.subtitle}
          </p>
        </div>

        {/* 3-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Email */}
          <div 
            onClick={handleCopyEmail}
            className={`${CARD_STYLE} ${CARD_HOVER} flex flex-col justify-between items-start text-left cursor-pointer h-full min-h-[230px] w-full overflow-hidden`}
          >
            <div className="flex justify-between items-center w-full">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8B5CF6]">
                <Mail size={16} />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Direct Email</span>
            </div>

            <div className="space-y-1 w-full overflow-hidden">
              <span className="text-[10px] font-mono text-[#8B5CF6] uppercase font-bold block">// Connection Address</span>
              <span className="text-sm md:text-base font-bold text-white font-sora block select-all break-all overflow-hidden">
                {profile.email || "N/A"}
              </span>
            </div>

            <div className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center space-x-1.5 transition-colors duration-200">
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? "Copied Email Address" : "Copy Email"}</span>
            </div>
          </div>

          {/* Card 2: GitHub */}
          <a 
            href={profile.github || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${CARD_STYLE} ${CARD_HOVER} flex flex-col justify-between items-start text-left h-full min-h-[230px] group w-full overflow-hidden`}
          >
            <div className="flex justify-between items-center w-full">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-300">
                <GithubIcon size={16} />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Open Source</span>
            </div>

            <div className="space-y-1 w-full overflow-hidden">
              <span className="text-[10px] font-mono text-[#8B5CF6] uppercase font-bold block">// Repositories</span>
              <span className="text-sm md:text-base font-bold text-white font-sora block break-all overflow-hidden">
                GitHub Profile
              </span>
            </div>

            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white flex items-center space-x-1 transition-colors duration-200">
              <span>Explore Profile</span>
              <ExternalLink size={12} />
            </span>
          </a>

          {/* Card 3: LinkedIn */}
          <a 
            href={profile.linkedin || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${CARD_STYLE} ${CARD_HOVER} flex flex-col justify-between items-start text-left h-full min-h-[230px] group w-full overflow-hidden`}
          >
            <div className="flex justify-between items-center w-full">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3B82F6]">
                <LinkedinIcon size={16} />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Professional Network</span>
            </div>

            <div className="space-y-1 w-full overflow-hidden">
              <span className="text-[10px] font-mono text-[#8B5CF6] uppercase font-bold block">// LinkedIn Connect</span>
              <span className="text-sm md:text-base font-bold text-white font-sora block break-all overflow-hidden">
                LinkedIn Profile
              </span>
            </div>

            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white flex items-center space-x-1 transition-colors duration-200">
              <span>Connect</span>
              <ExternalLink size={12} />
            </span>
          </a>

        </div>

      </div>
    </SectionWrapper>
  );
}
