import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'corporate' | 'cyberpunk';
type Layout = 'default' | 'compact' | 'wide';
type ColorScheme = 'blue' | 'green' | 'purple' | 'orange';

interface ThemeContextType {
  theme: Theme;
  layout: Layout;
  colorScheme: ColorScheme;
  fontSize: number;
  setTheme: (theme: Theme) => void;
  setLayout: (layout: Layout) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  setFontSize: (size: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const predefinedThemes = {
  light: {
    background: 'bg-white',
    text: 'text-gray-900',
    primary: 'bg-blue-600',
    secondary: 'bg-gray-200',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-white',
    primary: 'bg-blue-500',
    secondary: 'bg-gray-800',
  },
  corporate: {
    background: 'bg-slate-50',
    text: 'text-slate-900',
    primary: 'bg-indigo-600',
    secondary: 'bg-slate-200',
  },
  cyberpunk: {
    background: 'bg-black',
    text: 'text-neon-pink',
    primary: 'bg-neon-blue',
    secondary: 'bg-neon-purple',
  },
};

export const colorSchemes = {
  blue: {
    primary: 'bg-blue-600',
    secondary: 'bg-blue-200',
    accent: 'bg-blue-400',
  },
  green: {
    primary: 'bg-green-600',
    secondary: 'bg-green-200',
    accent: 'bg-green-400',
  },
  purple: {
    primary: 'bg-purple-600',
    secondary: 'bg-purple-200',
    accent: 'bg-purple-400',
  },
  orange: {
    primary: 'bg-orange-600',
    secondary: 'bg-orange-200',
    accent: 'bg-orange-400',
  },
};

export const layouts = {
  default: {
    container: 'max-w-7xl',
    spacing: 'px-4 sm:px-6 lg:px-8',
  },
  compact: {
    container: 'max-w-5xl',
    spacing: 'px-2 sm:px-4 lg:px-6',
  },
  wide: {
    container: 'max-w-full',
    spacing: 'px-6 sm:px-8 lg:px-12',
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [layout, setLayout] = useState<Layout>('default');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('blue');
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLayout = localStorage.getItem('layout') as Layout;
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme;
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedTheme) setTheme(savedTheme);
    if (savedLayout) setLayout(savedLayout);
    if (savedColorScheme) setColorScheme(savedColorScheme);
    if (savedFontSize) setFontSize(Number(savedFontSize));

    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark', 'corporate', 'cyberpunk');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSetLayout = (newLayout: Layout) => {
    setLayout(newLayout);
    localStorage.setItem('layout', newLayout);
  };

  const handleSetColorScheme = (newScheme: ColorScheme) => {
    setColorScheme(newScheme);
    localStorage.setItem('colorScheme', newScheme);
  };

  const handleSetFontSize = (newSize: number) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', String(newSize));
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        layout,
        colorScheme,
        fontSize,
        setTheme: handleSetTheme,
        setLayout: handleSetLayout,
        setColorScheme: handleSetColorScheme,
        setFontSize: handleSetFontSize,
      }}
    >
      <div className={`${predefinedThemes[theme].background} ${predefinedThemes[theme].text}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
