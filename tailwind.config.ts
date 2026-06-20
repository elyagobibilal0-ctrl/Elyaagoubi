import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        automaster: {
          900: "#030b18",
          800: "#0b1626",
          700: "#111f35",
          600: "#1c2a3e",
          500: "#2d3b50",
          400: "#4a5b7a",
          300: "#7f90a9",
          200: "#c8ced8",
          100: "#f5f7fb"
        }
      },
      boxShadow: {
        glass: "0 24px 90px rgba(0, 0, 0, 0.18)",
        glow: "0 0 35px rgba(255, 255, 255, 0.08)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 42%), linear-gradient(180deg, rgba(10,15,31,0.9), rgba(1,5,13,0.95))"
      }
    }
  },
  plugins: []
};

export default config;
