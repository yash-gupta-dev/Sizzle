import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Plak"', "sans-serif"],
        condensed: ['"Neue Plak Condensed"', "sans-serif"],
        extended: ['"Neue Plak Extended"', "sans-serif"],
        text: ['"Neue Plak Text"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;