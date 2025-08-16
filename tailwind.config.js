/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2CA4E6',
          50: '#E8F6FE',
          100: '#D1EDFC',
          200: '#A3DBF9',
          300: '#75C9F6',
          400: '#47B7F3',
          500: '#2CA4E6',
          600: '#1F83C4',
          700: '#186293',
          800: '#124862',
          900: '#0B2E31'
        },
        secondary: '#32AFE4',
        accent: '#AEC90C',
        dark: '#044154',
        medium: '#2CABDA'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slideUp': 'slideUp 0.6s ease-out',
        'fadeIn': 'fadeIn 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};