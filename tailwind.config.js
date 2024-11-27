const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */ export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', '"sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          primary: '#E63E21',
          secondary: '#193f4a',
          black: '#1B1B1B',
          surface: '#292929',
        },
      },
    },
  },
  plugins: [],
};

//linear-gradient(#DF7212 20%,#1B1B1B 100%)
