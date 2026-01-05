import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent": "#7c8cff",
        "accent-strong": "#5b6dff"
      },
      boxShadow: {
        "soft": "0 20px 60px rgba(12, 18, 48, 0.45)",
        "card": "0 20px 50px rgba(10, 16, 40, 0.35)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(124, 140, 255, 0.25), transparent 55%), linear-gradient(180deg, #0a1026 0%, #0a0f23 45%, #080b1d 100%)"
      }
    }
  },
  plugins: []
};

export default config;
