import { SECTION_CONTAINER, SECTION_SPACING, SCROLL_MARGIN } from '../../config/uiConfig';

export default function SectionWrapper({ id, className = "", containerClassName = "", usePadding = true, children }) {
  const spacingClass = usePadding ? SECTION_SPACING : "";
  
  return (
    <section 
      id={id} 
      className={`${SCROLL_MARGIN} ${spacingClass} ${className}`}
    >
      <div className={`${SECTION_CONTAINER} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
