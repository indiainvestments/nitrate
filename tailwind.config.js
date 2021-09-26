// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        sky: colors.sky,
        fuschia: colors.fuchsia,
        white: colors.white,
        orange: colors.orange,
        amber: colors.amber,
        nitrate: {
          DEFAULT: '#5D5FEF',
          text: '#20272E',
          dark: '#2C2D30',
          'really-dark': '#20272E',
          'soft-dark': '#282F36',
          'softer-dark': '#8C8989',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
