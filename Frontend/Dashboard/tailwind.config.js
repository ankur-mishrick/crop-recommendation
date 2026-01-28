/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2d5016',
        'secondary': '#6ba547',
        'accent': '#fbbf24',
        'light': '#f3f4f6',
      }
    },
  },
  plugins: [],
}
