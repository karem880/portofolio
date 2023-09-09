/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px', // Thin border
        // Add more custom border widths if needed
      },
    },
  },
  plugins: [],
}

