import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: "#A4A4A4",
        whiteHeading: "#EDEEEE",
        whiteSub: "#c5ccd3",
        orange: "#FF5B22",
        line: "#a1a1a1",
      },
    },
    screens: {
      xsm: { min: "0px", max: "577px" },
      sm: { min: "577px", max: "768px" },
      md: { min: "768px", max: "1024px" },
      lg: { min: "1024px", max: "1280px" },
      xl: { min: "1280px", max: "1700px" },
      "2xl": { min: "1700px", max: "30000px" },
    },
  },
  plugins: [],
};
export default config;
