import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        folding: "folding 1.5s ease-in-out forwards",
        perspective: "perspective 3s ease-in-out ",
        enter: "enter 2s ease-out",
        slide: "slide 2s ease-in-out",
        scale: "scale 1.5s ease-out",
        turning: "turning 2s ease-in-out",
        burning: "burning 2s ease-in-out", 
      },
      keyframes: {
        folding: {
          "0%": { transform: "rotateX(90deg)", opacity: "0" },
          "50%": { transform: "rotateX(20deg)", opacity: "0.5" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
        perspective: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        enter: {
          "0%": { transform: "translateY(-150%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(-300%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scale: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        turning: {
          "0%": { transform: "rotateY(90deg)", opacity: "0" },
          "100%": { transform: "rotateY(0)", opacity: "1" },
        },
        burning: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      fontFamily: {
        druk: ["DrukTextWide", "sans-serif"],
        syneRegular: ['"Syne-regular"', "sans-serif"],
        syneBold: ['"Syne-Bold"', "sans-serif"],
        syneItalic: ['"Syne-Italic"', "sans-serif"],
        SyneMono: ['"Syne-Mono"', "sans-serif"],
        syneExtra: ['"Syne-Extra"', "sans-serif"],

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
