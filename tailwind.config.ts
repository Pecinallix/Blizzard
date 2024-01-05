/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xshadow': '0 8px white,0 -8px white'
      },
      keyframes: {
        games: {
          from: { transform: 'translateY(-640px)' },
          to: { transform: 'translateY(0px)' }
        },
        sports: {
          from: { transform: 'translateY(-520px)' },
          to: { transform: 'translateY(0px)' }
        }
      },
      animation: {
        games: 'games 1s ease-in-out',
        sports: 'sports 1s ease-in-out'
      }
    }
  },
  plugins: []
};
