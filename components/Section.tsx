import React, { ReactNode } from 'react';
import { useTheme } from '../ThemeContext';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  backgroundClass?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", backgroundClass = "bg-white/50" }) => {
  const { styles, theme } = useTheme();
  
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 ${backgroundClass} ${className}`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-10 text-center relative">
            <span className="relative z-10 px-4">{title}</span>
            <span className={`absolute left-1/2 -translate-x-1/2 top-1/2 h-3 w-32 ${theme === 'pink' ? 'bg-rose-300/80' : 'bg-sky-300/80'} -z-0 rounded-full opacity-60 transition-colors duration-500`}></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;