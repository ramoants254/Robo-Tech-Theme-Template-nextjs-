/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': {
          blue: '#00f3ff',
          purple: '#bf00ff',
          pink: '#ff00f7',
          green: '#00ff9d',
          yellow: '#ffee00',
        },
        'cyber': {
          dark: '#0a0a1f',
          darker: '#050510',
          light: '#1a1a3f',
          accent: '#2a2a6f',
        },
        'hologram': {
          primary: 'rgba(0, 243, 255, 0.1)',
          secondary: 'rgba(191, 0, 255, 0.1)',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'matrix': 'matrix 20s linear infinite',
        'hologram': 'hologram 5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff',
            textShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff'
          },
          '100%': { 
            boxShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff',
            textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        matrix: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: 1,
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': { 
            opacity: 0.8,
            filter: 'hue-rotate(180deg) brightness(1.2)',
          },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
        'matrix-rain': 'linear-gradient(180deg, rgba(0, 243, 255, 0.1) 0%, rgba(0, 243, 255, 0) 100%)',
        'hologram-texture': 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, rgba(191, 0, 255, 0.1) 100%)',
      },
      backgroundSize: {
        'cyber-grid': '30px 30px',
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
}
