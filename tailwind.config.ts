import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0E2341",
        gold: "#C8A45B",
        slatewarm: "#65758B",
        cream: "#F7F4EE"
      },
      boxShadow: {
        premium: "0 20px 60px -28px rgba(14, 35, 65, 0.3)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
