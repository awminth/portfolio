import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeType = 'pink' | 'blue';

interface ThemeStyles {
  primary: string; // Main text color (500/600)
  primaryHover: string; // Hover state
  bgLight: string; // Light background (100) - increased from 50
  bgMedium: string; // Medium background (200/300) - increased from 100/200
  border: string; // Border color
  gradient: string; // For backgrounds
  ring: string; // Focus rings
  iconBg: string; // Icon backgrounds
}

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  styles: ThemeStyles;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Record<ThemeType, ThemeStyles> = {
  pink: {
    primary: 'text-rose-600', // Darker text
    primaryHover: 'hover:text-rose-700',
    bgLight: 'bg-rose-100', // Was rose-50
    bgMedium: 'bg-rose-200', // Was rose-100
    border: 'border-rose-300', // Was rose-200
    gradient: 'from-rose-200 to-pink-100', // Darker gradient start
    ring: 'ring-rose-300',
    iconBg: 'bg-rose-200',
  },
  blue: {
    primary: 'text-sky-700', // Darker text
    primaryHover: 'hover:text-sky-800',
    bgLight: 'bg-sky-100', // Was sky-50
    bgMedium: 'bg-sky-200', // Was sky-100
    border: 'border-sky-300', // Was sky-200
    gradient: 'from-sky-200 to-indigo-100', // Darker gradient start
    ring: 'ring-sky-300',
    iconBg: 'bg-sky-200',
  }
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('pink'); 

  const value = {
    theme,
    setTheme,
    styles: themes[theme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};