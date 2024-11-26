const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */ export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sniglet"', '"Fira Code"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#D6C0B3', // Blue for light mode
          dark: '#D6C0B3', // Darker blue for dark mode
        },
        secondary: {
          light: '#493628', // White background for light mode
          dark: '#AB886D', // Dark slate background for dark mode
        },
        background: {
          light: '#E4E0E1', // White background for light mode
          dark: '#493628', // Dark slate background for dark mode
        },
        text: {
          light: '#AB886D', // Gray text for light mode
          dark: '#E4E0E1', // Off-white text for dark mode
        },
      },
    },
  },
  plugins: [],
};
