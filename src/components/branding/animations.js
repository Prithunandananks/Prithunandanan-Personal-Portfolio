export const INTRO_DURATION = 1.6;

export const getLoaderContainerVariants = (shouldReduceMotion) => ({
  initial: { 
    opacity: 1 
  },
  exit: { 
    opacity: 0,
    y: shouldReduceMotion ? 0 : -20,
    transition: { 
      duration: shouldReduceMotion ? 0.25 : 0.5, 
      ease: [0.16, 1, 0.3, 1] // Custom premium cubic-bezier (easeOutExpo)
    } 
  }
});

export const getLogoWrapperVariants = (shouldReduceMotion) => ({
  initial: { 
    scale: shouldReduceMotion ? 1 : 0.92,
    opacity: 0 
  },
  animate: { 
    scale: shouldReduceMotion ? 1 : 1.05,
    opacity: 1,
    transition: { 
      duration: INTRO_DURATION, 
      ease: "anticipate" 
    }
  }
});

export const getGlowVariants = (shouldReduceMotion) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0.15, scale: 1 },
      animate: { opacity: 0.15, scale: 1 }
    };
  }
  return {
    initial: { opacity: 0.15, scale: 0.95 },
    animate: { 
      opacity: [0.15, 0.3, 0.15], 
      scale: [0.95, 1.05, 0.95],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
};
