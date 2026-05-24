import { Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { navLinks } from '../data/constants';
import Logo from './branding/Logo';

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

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-white/10 relative overflow-hidden py-12">
      {/* Subtle bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] rounded-full radial-glow-violet opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-8">
        
        {/* Upper footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand Signature */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-md">
              <Logo size={14} className="text-white" />
            </div>
            <span className="font-sora font-semibold text-white text-base tracking-tight">
              {profile.fullName}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-sm font-medium font-inter">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
            </a>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-200"
              aria-label="Email direct"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* Lower footer */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-inter">
          <div>
            © 2026 {profile.fullName}.
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-zinc-500/80">Developed by Prithunandanan K S</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
