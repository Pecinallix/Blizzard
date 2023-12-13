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
        '2xshadow': '0 8px white,0 -8px white',
        shadowMenu: '0 10px white,0 -10px white'
      }
    }
  },
  plugins: []
};
