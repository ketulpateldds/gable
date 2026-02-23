/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "main-container": "1440px",
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(55.56% 100% at 50% 0%, #FFFFFF 0%, #EDF3FA 100%)",
      },
      colors: {
        primary: "#FFFFFF",
        textPrimary: "#00091A",
        "background-gradient-end": "#EDF3FA",
      },
    },
  },
  plugins: [],
};
