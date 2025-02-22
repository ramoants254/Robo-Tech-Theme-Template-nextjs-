import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-darker': 'var(--cyber-darker)',
        'cyber-dark': 'var(--cyber-dark)',
        'cyber-light': 'var(--cyber-light)',
        neon: {
          blue: 'var(--neon-blue)',
          purple: 'var(--neon-purple)',
          pink: 'var(--neon-pink)',
          green: 'var(--neon-green)',
          yellow: 'var(--neon-yellow)',
        },
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'shimmer': 'shimmer 6s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
}

export default config;
