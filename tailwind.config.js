/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
  darkMode: ["selector", ".dark"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

