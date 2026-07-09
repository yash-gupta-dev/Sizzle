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
        plak: ["var(--font-plak)"],
        "plak-text": ["var(--font-plak-text)"],
        "plak-compressed": ["var(--font-plak-compressed)"],
        "plak-condensed": ["var(--font-plak-condensed)"],
        "plak-extended": ["var(--font-plak-extended)"],
        "plak-narrow": ["var(--font-plak-narrow)"],
        "plak-wide": ["var(--font-plak-wide)"],
      },
    },
  },
  plugins: [],
};

export default config;