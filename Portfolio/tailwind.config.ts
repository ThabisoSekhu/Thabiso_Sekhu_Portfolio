import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", card: "var(--card)", fg: "var(--fg)", mute: "var(--mute)", line: "var(--line)", accent: "var(--accent)" },
      fontFamily: { sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"], mono: ["var(--font-geist-mono)", "monospace"] },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        blob: "blob 9s ease-in-out infinite",
        "blob-slow": "blob 14s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};
export default config;
