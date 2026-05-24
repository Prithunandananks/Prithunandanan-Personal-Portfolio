import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Logo from './Logo';
import { 
  getLoaderContainerVariants, 
  getLogoWrapperVariants, 
  getGlowVariants 
} from './animations';

export default function IntroLoader({ onComplete }) {
  const shouldReduceMotion = useReducedMotion();

  // 1. Accessibility: Skip intro immediately if reduced-motion is preferred
  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
    }
  }, [shouldReduceMotion, onComplete]);

  // 2. Timing and Safety Fallback
  useEffect(() => {
    if (shouldReduceMotion) return;

    // Normal loader timing (1.6s, between 1.4s and 1.8s)
    const animationTimer = setTimeout(() => {
      onComplete();
    }, 1600);

    // Guaranteed fallback safety timeout (2.2s / 2200ms)
    const safetyTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(safetyTimer);
    };
  }, [onComplete, shouldReduceMotion]);

  // 3. Prevent layout flash / body scrolling lock
  useEffect(() => {
    if (shouldReduceMotion) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      variants={getLoaderContainerVariants(shouldReduceMotion)}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center pointer-events-auto select-none"
    >
      <motion.div
        variants={getLogoWrapperVariants(shouldReduceMotion)}
        initial="initial"
        animate="animate"
        className="relative flex items-center justify-center"
      >
        {/* Hardware-accelerated pulsing glow (opacity/scale only, max 50px blur for low-power performance) */}
        <motion.div
          variants={getGlowVariants(shouldReduceMotion)}
          initial="initial"
          animate="animate"
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] opacity-15 blur-[50px] -z-10 pointer-events-none"
        />

        {/* Premium Brand Monogram Holder */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-2xl shadow-[#3B82F6]/15 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          
          <Logo size={40} className="text-white" animated={true} />
        </div>
      </motion.div>
    </motion.div>
  );
}
