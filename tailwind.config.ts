import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      novwide: ["novecento-sans-wide", "sans-serif"],
      nov: ["novecento-sans", "sans-serif"],
      rigsans: ["rig-sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "#EA9139",
        navy: "#063F5D",
        teal: "#419EBD",
      },
    },
  },
  plugins: [],
};
export default config;
