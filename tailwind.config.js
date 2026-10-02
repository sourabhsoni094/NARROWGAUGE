/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0B0B',
          secondary: '#121212',
          tertiary: '#181818',
          card: '#141414',
          elevated: '#1D1D1D'
        },
        primary: {
          DEFAULT: '#F5F2EA',
          muted: '#9B9B9B',
          dim: '#6B6B6B'
        },
        accent: {
          champagne: '#C5A880',
          gold: '#D4AF37',
          warm: '#E2D9C8',
          restaurant: '#D99B59',
          catering: '#D4AF37',
          cafe: '#C89666'
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.16)',
          accent: 'rgba(197, 168, 128, 0.3)'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-slow': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
