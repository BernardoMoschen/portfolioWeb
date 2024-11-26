const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */ export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    // fontFamily: {
    // sans: ['ChailceNogginReg', ...defaultTheme.fontFamily.sans],
    // },
    extend: {
      colors: {
        // Custom light mode colors
        // primary: {
        //   light: '#FF6500', // Blue for light mode
        //   dark: '#FF6500', // Darker blue for dark mode
        // },
        // secondary: {
        //   light: '#1E3E62', // White background for light mode
        //   dark: '#1E3E62', // Dark slate background for dark mode
        // },
        // background: {
        //   light: '#ffffff', // White background for light mode
        //   dark: '#0B192C', // Dark slate background for dark mode
        // },
        // text: {
        //   light: '#1f2937', // Gray text for light mode
        //   dark: '#f8fafc', // Off-white text for dark mode
        // },
        primary: {
          light: '#D6C0B3', // Blue for light mode
          dark: '#D6C0B3', // Darker blue for dark mode
        },
        secondary: {
          light: '#AB886D', // White background for light mode
          dark: '#AB886D', // Dark slate background for dark mode
        },
        background: {
          light: '#E4E0E1', // White background for light mode
          dark: '#493628', // Dark slate background for dark mode
        },
        text: {
          light: '#493628', // Gray text for light mode
          dark: '#E4E0E1', // Off-white text for dark mode
        },
      },
    },
  },
  plugins: [],
};
