/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#272727',
        'secondary': '#af2d2c',
        'font': '#fff',
        'background': 'oklch(8% 0.012 255)',
        'foreground': 'oklch(93% 0.005 255)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Roboto Slab', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
