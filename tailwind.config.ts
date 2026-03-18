import type { Config } from "tailwindcss";

export default {
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
        "neutral-primary": "#0F1114",
        "brand-blue": "#004CE5",
        "brand-blue-hover": "#004CE6",
        status: {
          success: {
            bg: "#F2FFF4",
            border: "#21A6351A",
            text: "#21A635",
          },
          warning: {
            bg: "#FFF9F2",
            border: "#E599171A",
            text: "#A16600",
          },
          danger: {
            bg: "#FFF2F2",
            border: "#E517171A",
            text: "#A10000",
          },
          info: {
            bg: "#F2F6FF",
            border: "#004CE51A",
            text: "#004CE5",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
