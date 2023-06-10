/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navCl': '#f8f9fa',
        'redHover': '#ef5350;',
        'highlightRed': '#ef5350',
        'highlightBlue': '#6ac4ff',
        'highlightOrange': 'rgba(253, 149, 90, 0.8)',
        'highlightPink': 'blueviolet',
      },
      maxWidth: {
        'maxWidth': '80rem',
      },
    },
  },
  plugins: [],
}

