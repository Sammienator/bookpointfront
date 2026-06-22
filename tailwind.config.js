/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1a1412',
        parchment: '#f8f4ed',
        amber: {
          warm: '#c97d2e',
          light: '#f0c882',
        },
        slate: {
          book: '#2c3a4a',
        },
      },
    },
  },
  plugins: [],
};