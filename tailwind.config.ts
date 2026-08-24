import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        foundation: {
          bg: "#0B0E14",
          surface: "#161616",
          elevated: "#21272A",
          card: "#1E2227",
          border: "#343A3F",
          muted: "#4D5257",
          light: "#F4F4F4",
          white: "#FFFFFF",
        },
        qiskit: {
          purple: "#A46DFF",
          "purple-light": "#BE95FF",
          pink: "#FF7EB6",
          magenta: "#EE5396",
          blue: "#4589FF",
          ice: "#DAE5FC",
          steel: "#BDCDEF",
          gray: "#E0E0E0",
          charcoal: "#343A3F",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
