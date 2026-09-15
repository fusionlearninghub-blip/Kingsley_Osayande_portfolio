import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F3",
        ink: "#14181F",
        muted: "#5B6472",
        line: "#E4E0D6",
        card: "#F1EEE4",
        accent: {
          DEFAULT: "#2954A3",
          dark: "#1E3E7A",
          light: "#E8EEF9",
        },
        gold: "#C08A34",
      },
      fontFamily: {
        display: ["var(--font-slab)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
