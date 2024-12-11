const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */ export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', '"sans"', ...defaultTheme.fontFamily.sans],
        Protest: [
          '"Protest Revolution"',
          '"sans"',
          ...defaultTheme.fontFamily.sans,
        ],
        Orbitron: ['"Orbitron"', '"sans"', ...defaultTheme.fontFamily.sans],
        Doto: ['"Doto"', '"sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tron: {
          primary: 'rgba(255, 77, 0)',
          secondary: '#FF9500',
          background: '#0a0f14',
          black: '#1A1A1A',
          offWhite: '#F0F0F0',
          lighterGray: '#3C3C3C',
          beige: '#E6D5B8',
          amber: '#FFC56F',
        },
      },
    },
  },
  plugins: [],
};

