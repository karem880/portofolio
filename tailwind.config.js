/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "main": "#6e237e",
        "sec": "#573589",
        "mainDark": "#14141f"
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Customize the shadow values as needed
      },
    },
  },
  plugins: [],
}
