// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: "'Nunito', sans-serif",
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
          border: '#B8BFCA',
          muted: '#768089',
          'dark-fill': '#2A3239',
          'soft-dark': '#282F36',
          'softer-dark': '#8C8989',
        },
      },
      fontSize: {
        xxs: ['0.6875rem', '1.1875rem'],
      },
      boxShadow: {
        hover:
          '0px 1px 1px rgba(0, 0, 0, 0.05), 0px 5px 5px rgba(0, 0, 0, 0.05), 0px 9px 9px rgba(0, 0, 0, 0.05)',
        regular:
          '0px 1px 1px rgba(0, 0, 0, 0.02), 0px 5px 5px rgba(0, 0, 0, 0.02), 0px 9px 9px rgba(0, 0, 0, 0.02);',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/line-clamp')],
};
