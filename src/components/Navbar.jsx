import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import { navLinks, ctas } from '../data/constants';
import Logo from './branding/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const location = useLocation();

  const handleNavClick = (e, targetHref) => {
    if (location.pathname === '/' && targetHref.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetHref);
      if (targetElement) {
        setIsOpen(false);
        const navbarOffset = scrolled ? 70 : 90;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Disable active tracking on case study subpages
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      // Active section highlights based on scroll position
      const scrollPosition = window.scrollY + 120;
      
      for (const item of navLinks) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger scroll check immediately
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Symmetrical SaaS Brand Logo */}
          <a href={location.pathname === '/' ? "#home" : "/"} onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-md shadow-[#3B82F6]/10 group-hover:shadow-[#8B5CF6]/20 transition-all duration-300">
              <Logo size={16} className="text-white" />
            </div>
            <span className="font-sora font-semibold text-white tracking-tight text-base">
              {profile.fullName}
            </span>
          </a>

          {/* Desktop Menu - Modern Minimalist */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={location.pathname === '/' ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-inter transition-all duration-200 ${
                  activeSection === item.href
                    ? 'text-white bg-white/5 border border-white/10'
                    : 'text-zinc-400 hover:text-white border border-transparent'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 text-white text-sm font-semibold rounded-lg font-sora shadow-md shadow-[#3B82F6]/15 transition-all duration-200"
            >
              {ctas.downloadResume}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 border-b border-white/10 bg-[#030712]/95 backdrop-blur-xl' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-6 pt-2 pb-6 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={location.pathname === '/' ? item.href : `/${item.href}`}
              onClick={(e) => {
                setIsOpen(false);
                handleNavClick(e, item.href);
              }}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.href
                  ? 'text-white bg-white/5 border border-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 px-4 py-2.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-sm font-semibold rounded-lg shadow-md shadow-[#3B82F6]/15"
          >
            {ctas.downloadResume}
          </a>
        </div>
      </div>
    </nav>
  );
}
