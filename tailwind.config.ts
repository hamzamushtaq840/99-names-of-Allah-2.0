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
        subWhite: "#EDEEEE",
        whiteSub: "#c5ccd3",
        orange: "#FF5B22",
        line: "#a1a1a1",
        ayahBg: "#cccccc3a",
        ayahText: "#ffffffae",
      },
    },
  },
  plugins: [],
};
export default config;
