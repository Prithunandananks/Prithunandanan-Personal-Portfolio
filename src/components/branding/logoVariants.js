export const getSpineVariants = (shouldReduceMotion) => ({
  hidden: { 
    pathLength: 0, 
    opacity: 0 
  },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      pathLength: { 
        duration: shouldReduceMotion ? 0.05 : 0.8, 
        ease: "easeInOut",
        delay: shouldReduceMotion ? 0 : 0.1 
      },
      opacity: { 
        duration: shouldReduceMotion ? 0.05 : 0.2,
        delay: shouldReduceMotion ? 0 : 0.1 
      }
    }
  }
});

export const getLoopVariants = (shouldReduceMotion) => ({
  hidden: { 
    pathLength: 0, 
    opacity: 0 
  },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      pathLength: { 
        duration: shouldReduceMotion ? 0.05 : 0.9, 
        ease: "easeInOut",
        delay: shouldReduceMotion ? 0 : 0.3 
      },
      opacity: { 
        duration: shouldReduceMotion ? 0.05 : 0.2,
        delay: shouldReduceMotion ? 0 : 0.3 
      }
    }
  }
});

export const getDotVariants = (shouldReduceMotion) => ({
  hidden: { 
    scale: 0, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      delay: shouldReduceMotion ? 0.05 : 1.1, 
      duration: shouldReduceMotion ? 0.1 : 0.3, 
      ease: "easeOut" 
    }
  }
});
