const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */ export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['FragileBombers', ...defaultTheme.fontFamily.sans],
      body: ['FragileBombers'],
    },
    extend: {
      colors: {
        cadet_lavender: {
          DEFAULT: '#e5eafa',
          100: '#0f1f51',
          200: '#1f3da1',
          300: '#4467db',
          400: '#95a9eb',
          500: '#e5eafa',
          600: '#eaeefb',
          700: '#f0f2fc',
          800: '#f5f7fd',
          900: '#fafbfe',
        },
        cadet_brown: {
          DEFAULT: '#ffaa5a',
          100: '#452200',
          200: '#8b4300',
          300: '#d06500',
          400: '#ff8716',
          500: '#ffaa5a',
          600: '#ffbc7c',
          700: '#ffcc9d',
          800: '#ffddbe',
          900: '#ffeede',
        },
        cadet_red: {
          DEFAULT: '#ff785a',
          100: '#450d00',
          200: '#8b1900',
          300: '#d02600',
          400: '#ff4116',
          500: '#ff785a',
          600: '#ff947c',
          700: '#ffaf9d',
          800: '#ffcabe',
          900: '#ffe4de',
        },
        cadet_black: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#333333',
          700: '#666666',
          800: '#999999',
          900: '#cccccc',
        },
      },
    },
  },
  plugins: [],
};
