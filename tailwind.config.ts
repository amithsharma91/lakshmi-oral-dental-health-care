import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#FBF5E6",
          100: "#F2E4C0",
          200: "#E0C970",
          300: "#C9A840",
          400: "#B39020",
          500: "#9E7A18",
          600: "#9E7A18",
          700: "#8B6914",
          800: "#6B5210",
          900: "#4D3B0C",
        },
        orange: {
          50: "#FFF8E6",
          100: "#FEEDD0",
          200: "#FCDEA0",
          300: "#FACA70",
          400: "#F8B030",
          500: "#F4A300",
          600: "#D4900A",
          700: "#B07808",
          800: "#8A5E06",
          900: "#644404",
        },
      },
      fontFamily: {
        heading: ["'Montserrat'", "sans-serif"],
        body: ["'Open Sans'", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
        "count-up": "count-up 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
