/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        overlay: 'var(--overlay)',
        text: 'var(--text-color)',
        'custom-amber': '#ffd19a',
      },
      boxShadow: {
        'custom-hover': '-1px 6px 10px 0 rgba(120, 60, 20, .2)',
      },
      width: {
        '160px': '160px',
      },
    },
  },
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [],
}

