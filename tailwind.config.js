/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#0a0a0c',
          900: '#0c0c0c',
          800: '#111116',
          700: '#17171d',
          600: '#1d1d24',
          500: '#25252e',
        },
        mist: {
          50: '#f5f7fa',
          100: '#d7e2ea',
          200: '#aab6c2',
          300: '#7d8a97',
          400: '#5a6573',
          500: '#3e4854',
        },
        accent: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(215,226,234,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(215,226,234,0.04) 1px, transparent 1px)',
        'radial-spot':
          'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.18), transparent 60%)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 25s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scroll-line': 'scrollLine 1.8s ease-in-out infinite',
        'blink': 'blink 1s steps(1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scrollLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};