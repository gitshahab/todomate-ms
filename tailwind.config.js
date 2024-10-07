/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#1E1E1E",
        bgR: "#252526",
        bgH: "#333333",
        bgB: "#262626" 
      }
    },
  },
  plugins: [],
}

