import React from 'react';
import { PERSONAL_INFO, PROFILE_IMAGE } from '../constants';
import { ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Hero: React.FC = () => {
  const { theme, styles } = useTheme();

  // Custom scroll handler to ensure smooth scrolling to About section
  const handleViewExperienceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      // Offset scroll by 80px to account for fixed navbar
      const yOffset = -80; 
      const y = aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Handler for Work With Me button to scroll to Contact
  const handleWorkWithMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Offset scroll by 80px to account for fixed navbar
      const yOffset = -80; 
      const y = contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-slate-50 pt-28 pb-20 md:pt-20 md:pb-0">
      
      {/* Background Decor - Dynamic Theme - INCREASED INTENSITY */}
      <div className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l ${theme === 'pink' ? 'from-rose-300/40' : 'from-sky-300/40'} to-transparent pointer-events-none transition-colors duration-700`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 ${theme === 'pink' ? 'bg-rose-300/40' : 'bg-sky-300/40'} rounded-full blur-3xl pointer-events-none transition-colors duration-700`} />
      <div className={`absolute top-20 left-20 w-72 h-72 ${theme === 'pink' ? 'bg-pink-200/60' : 'bg-sky-200/60'} rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-700`} />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 order-2 md:order-1">
          
          {/* Niche Pill Label */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-bold tracking-widest uppercase shadow-sm ${theme === 'pink' ? 'text-rose-900 border-rose-200' : 'text-sky-900 border-sky-200'} animate-fade-in-up transition-colors`}>
            <Sparkles size={14} className={`${theme === 'pink' ? 'text-rose-500 fill-rose-500' : 'text-sky-500 fill-sky-500'} transition-colors`} />
            Financial Management Specialist
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold text-slate-900 leading-[1.15] tracking-tight">
            Accounting, <br className="block" />
            Financial Management <br className="block" />
            <span className="relative inline-block">
              <span className="relative z-10">& SME Advisory.</span>
              <span className={`absolute bottom-2 left-0 w-full h-3 ${theme === 'pink' ? 'bg-rose-300/70' : 'bg-sky-300/70'} -z-0 -rotate-1 transition-colors duration-500`}></span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-light">
            Dedicated accounting professional with a commitment to accuracy, integrity, and organizational growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <a 
              href="#contact"
              onClick={handleWorkWithMeClick}
              className={`group px-8 py-4 bg-slate-900 text-white rounded-full hover:${theme === 'pink' ? 'bg-rose-600' : 'bg-sky-700'} transition-all duration-300 shadow-xl hover:shadow-2xl font-medium flex items-center justify-center gap-3 cursor-pointer`}
            >
              Work With Me
              <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} />
              </div>
            </a>
            
            <button
              onClick={handleViewExperienceClick}
              className={`px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full hover:${styles.bgLight} hover:${styles.border} hover:${styles.primary} transition-all duration-300 font-medium flex items-center justify-center shadow-sm cursor-pointer`}
            >
              View Experience
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-6 flex items-center gap-4 opacity-90">
            <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                   <img src={`https://picsum.photos/100?random=${i + 20}`} alt="Client" className="w-full h-full object-cover grayscale opacity-70" />
                 </div>
               ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-500 text-xs gap-0.5">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <span className="text-xs font-bold text-slate-800 mt-0.5">Trusted Professional</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end mt-10 md:mt-0">
          {/* Decorative Circle behind - INCREASED INTENSITY */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr ${theme === 'pink' ? 'from-rose-200 to-pink-200' : 'from-sky-200 to-indigo-200'} rounded-full blur-3xl -z-10 transition-colors duration-700 opacity-60`}></div>
          
          {/* Arch Image Mask */}
          <div className="relative w-full max-w-[28rem] aspect-[3/4] rounded-t-[14rem] rounded-b-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group bg-slate-200">
            <img 
              src={PROFILE_IMAGE} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Floating Card - Experience */}
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow hidden sm:flex items-center gap-4 max-w-[200px]">
               <div className={`h-10 w-10 ${styles.bgMedium} rounded-full flex items-center justify-center ${styles.primary} shrink-0 transition-colors`}>
                 <CheckCircle2 size={20} />
               </div>
               <div>
                  <p className="text-2xl font-bold text-slate-800 leading-none">5+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Years Experience</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;