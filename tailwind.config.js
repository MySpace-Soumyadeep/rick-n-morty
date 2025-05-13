/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      colors: {
        'scrollbar-thumb': '#4b5563'
      },
      width: {
        'scrollbar': '6px',
      },
    },
  },
  plugins: [],
}