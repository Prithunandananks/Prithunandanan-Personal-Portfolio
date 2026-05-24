import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import IntroLoader from './components/branding/IntroLoader';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(() => {
    // Skip intro if this is a route navigation reload, but allow on browser reload
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      sessionStorage.removeItem('introPlayed');
    }
    const hasPlayed = sessionStorage.getItem('introPlayed');
    return !hasPlayed;
  });

  const [wasSkipped] = useState(() => {
    const hasPlayed = sessionStorage.getItem('introPlayed');
    return !!hasPlayed;
  });

  const hasResetScroll = useRef(false);

  // 1. Initial Page Mount Configuration
  useEffect(() => {
    // Enforce manual scroll restoration to prevent browser scroll memory shifts
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Strip hash fragments from URL on hard loads to avoid auto-scrolling to elements
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // 2. Fallback Mount Scroll Reset if Loader was Skipped
  useEffect(() => {
    if (wasSkipped) {
      if (hasResetScroll.current) return;
      hasResetScroll.current = true;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
          });
        });
      });
    }
  }, [wasSkipped]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setIsLoading(false);
    setIsInitialLoad(false);
  };

  // 3. Post-Exit Animation Scroll Reset (fires after loader unmounts and lock lifts)
  const handleExitComplete = () => {
    if (hasResetScroll.current) return;
    hasResetScroll.current = true;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant"
        });
      });
    });
  };

  const showLoader = isLoading && isInitialLoad;

  return (
    <Router>
      <ScrollToTop />
      
      {/* Branded intro animation overlay & main content orchestrator */}
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {showLoader ? (
          <IntroLoader key="loader" onComplete={handleLoaderComplete} />
        ) : (
          /* Main portfolio application content - mounts exactly after loader exits */
          <motion.div 
            key="content"
            initial={{ opacity: wasSkipped ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen bg-[#030712] text-zinc-300 font-inter antialiased overflow-x-hidden selection:bg-[#3B82F6]/30 selection:text-white"
          >
            {/* Background soft lighting overlays */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#0F172A] to-transparent pointer-events-none opacity-40 z-0" />
            
            {/* Floating Glass Navbar */}
            <Navbar />

            {/* Layout Content */}
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-study/:slug" element={<CaseStudy />} />
              </Routes>
            </main>

            {/* Modern Minimalist Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}
