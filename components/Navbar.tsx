import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');
  const { styles, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Handle background transparency
      setIsScrolled(window.scrollY > 50);

      // Check if user is at the bottom of the page
      // If so, force 'Contact' to be active, overriding other checks
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 50) {
        setActiveSection('#contact');
        return;
      }

      // Handle active link highlighting for other sections
      const sections = ['about', 'skills', 'gallery', 'contact'];
      // Offset for header height
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          // Only set if we haven't forced contact already (though the return above handles it)
          setActiveSection('#' + section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Custom scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);

      // Calculate position with offset for fixed header (approx 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top handler for Logo
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Updated Logo Text with Click Handler */}
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="text-xl md:text-2xl font-serif font-bold text-slate-800 tracking-tight cursor-pointer"
        >
          Eaint Chan Myae<span className={`transition-colors ${styles.primary}`}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  text-sm font-medium transition-all duration-300 uppercase tracking-wider border-b-2 cursor-pointer
                  ${isActive 
                    ? `${styles.primary} ${theme === 'pink' ? 'border-rose-500' : 'border-sky-600'}` 
                    : `text-slate-600 border-transparent ${styles.primaryHover} hover:${styles.border}`}
                `}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-800"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl animate-fade-in-down">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  text-center py-2 font-medium transition-colors cursor-pointer
                  ${isActive ? `${styles.primary} ${styles.bgLight} rounded-lg` : `text-slate-700 ${styles.primaryHover}`}
                `}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;