import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './ThemeContext';
import { Palette } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-2xl border border-slate-200 animate-fade-in-up">
      <span className="text-xs font-bold text-slate-500 pl-2 uppercase tracking-wide">Theme</span>
      
      {/* Blue Button */}
      <button
        onClick={() => setTheme('blue')}
        className={`w-8 h-8 rounded-full bg-sky-400 border-2 transition-transform hover:scale-110 ${theme === 'blue' ? 'border-slate-600 scale-110 shadow-lg' : 'border-white'}`}
        title="Blue Theme"
      />

      {/* Pink Button */}
      <button
        onClick={() => setTheme('pink')}
        className={`w-8 h-8 rounded-full bg-rose-400 border-2 transition-transform hover:scale-110 ${theme === 'pink' ? 'border-slate-600 scale-110 shadow-lg' : 'border-white'}`}
        title="Pink Theme"
      />
    </div>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Gallery />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;