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
        tron: {
          // Main background
          background: 'rgba(10, 15, 20)',
          // Buttons, links, highlights, and interactive elements.
          electricBlue: 'rgba(0, 217, 255)',
          // Alerts, secondary highlights, or complementary calls to action.
          neonOrange: 'rgba(255, 77, 0)',
          //  Primary text on dark backgrounds.
          white: 'rgba(255, 255, 255)',
          // Subheadings, captions, or explanatory text.
          mutedBlue: 'rgba(166, 207, 216)',
          // Borders, lines, or subtle grid patterns
          darkDivider: 'rgba(0, 61, 76)',
        },
      },
    },
  },
  plugins: [],
};

//linear-gradient(#DF7212 20%,#1B1B1B 100%)
