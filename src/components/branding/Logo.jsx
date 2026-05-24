import { motion, useReducedMotion } from 'framer-motion';
import { getSpineVariants, getLoopVariants, getDotVariants } from './logoVariants';

export default function Logo({ size = 16, className = "", animated = false }) {
  const shouldReduceMotion = useReducedMotion();
  
  const PathComponent = animated ? motion.path : 'path';
  const CircleComponent = animated ? motion.circle : 'circle';

  const spineProps = animated ? {
    variants: getSpineVariants(shouldReduceMotion),
    initial: "hidden",
    animate: "visible"
  } : {};

  const loopProps = animated ? {
    variants: getLoopVariants(shouldReduceMotion),
    initial: "hidden",
    animate: "visible"
  } : {};

  const dotProps = animated ? {
    variants: getDotVariants(shouldReduceMotion),
    initial: "hidden",
    animate: "visible"
  } : {};

  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Monogram Spine */}
      <PathComponent d="M7.5 4.5v15" {...spineProps} />
      
      {/* Monogram Loop (geometric rounded-corner style) */}
      <PathComponent d="M7.5 4.5h6c3.04 0 5.5 2.46 5.5 5.5s-2.46 5.5-5.5 5.5h-6" {...loopProps} />
      
      {/* Monogram Inner Node */}
      <CircleComponent cx="12.5" cy="10" r="1" fill="currentColor" stroke="none" {...dotProps} />
    </svg>
  );
}
