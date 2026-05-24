import { useEffect } from 'react';
import Hero from '../sections/Hero';
import FeaturedProject from '../sections/FeaturedProject';
import CoreEngineeringStack from '../sections/CoreEngineeringStack';
import CollaborativeProjects from '../sections/CollaborativeProjects';
import Journey from '../sections/Journey';
import Opportunities from '../sections/Opportunities';
import Contact from '../sections/Contact';

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        // Wait briefly for resources to load and layouts to stabilize
        const timer = setTimeout(() => {
          const navbarOffset = 70; // Fixed navbar scrolled height offset
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 200);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProject />
      <CoreEngineeringStack />
      <CollaborativeProjects />
      <Journey />
      <Opportunities />
      <Contact />
    </>
  );
}
