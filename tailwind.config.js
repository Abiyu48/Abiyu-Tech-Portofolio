/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0 164 239)',
        dark: {
          bg: '#0a0e27',
          card: '#1a1f3a',
          border: '#2d3557',
        },
        light: {
          bg: '#f8f9fa',
          card: '#ffffff',
          border: '#e0e0e0',
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
