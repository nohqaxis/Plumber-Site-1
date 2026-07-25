import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1B4F8A",
          blue: "#2B7FD4",
          sky: "#5BA3E8",
          charcoal: "#0F172A",
          light: "#F4F7FB"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
