import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Phone, Facebook, Instagram, Send, MessageCircle, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  
  const getIcon = (platform: string) => {
    switch(platform) {
      case 'Phone': return <Phone size={24} />;
      case 'Facebook': return <Facebook size={24} />;
      case 'Instagram': return <Instagram size={24} />;
      case 'LinkedIn': return <Linkedin size={24} />;
      case 'Telegram': return <Send size={24} />;
      case 'Viber': return <MessageCircle size={24} />; // Using MessageCircle as generic for Viber
      default: return <Send size={24} />;
    }
  };

  const getColor = (platform: string) => {
    switch(platform) {
      case 'Phone': return 'hover:bg-green-500 hover:text-white';
      case 'Facebook': return 'hover:bg-blue-600 hover:text-white';
      case 'Instagram': return 'hover:bg-pink-600 hover:text-white';
      case 'LinkedIn': return 'hover:bg-blue-700 hover:text-white';
      case 'Telegram': return 'hover:bg-sky-500 hover:text-white';
      case 'Viber': return 'hover:bg-purple-600 hover:text-white';
      default: return 'hover:bg-slate-800 hover:text-white';
    }
  };

  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">Get In Touch</h2>
        <p className="text-slate-500 mb-12 max-w-lg mx-auto">
          Feel free to reach out for collaborations, accounting services, or just to say hello.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.platform === 'Phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`
                w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600
                transition-all duration-300 transform hover:-translate-y-2
                ${getColor(link.platform)}
              `}
              title={link.displayText || link.platform}
            >
              {getIcon(link.platform)}
            </a>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Eaint Chan Myae. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with 🩵 & 🩷</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;