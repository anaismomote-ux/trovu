import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Trovu brand — extracted from logo
        bg:           "#EDEAE0", // warm cream — app background
        surface:      "#F5F2EC", // lighter cream — cards, inputs
        "surface-2":  "#E8E4D8", // deeper cream — hover states
        green: {
          DEFAULT:    "#6BA07E", // sage green — primary (logo pin)
          light:      "#EAF2ED", // sage tint — tags, highlights
          deep:       "#4A7A60", // deeper sage — text emphasis
          dim:        "#6BA07E1A",
        },
        amber: {
          DEFAULT:    "#C4883A", // amber — logo dot, used sparingly
          light:      "#F7EDD8", // amber tint
          dim:        "#C4883A1A",
        },
        text: {
          DEFAULT:    "#2A3B30", // deep forest — headings
          body:       "#4D6358", // mid forest — body
          muted:      "#8A9E93", // soft — labels, captions
        },
        border:       "#D8D3C8",
        error: {
          DEFAULT:    "#C0544A",
          light:      "#FCECEA",
        },
      },
      fontFamily: {
        serif:  ["Cormorant Garamond", "Georgia", "serif"],
        sans:   ["DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["64px",  { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg": ["48px",  { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["36px",  { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-sm": ["28px",  { lineHeight: "1.2",  fontWeight: "600" }],
        "heading":    ["22px",  { lineHeight: "1.3",  fontWeight: "600" }],
        "body-lg":    ["16px",  { lineHeight: "1.7",  fontWeight: "400" }],
        "body-md":    ["14px",  { lineHeight: "1.6",  fontWeight: "400" }],
        "body-sm":    ["12px",  { lineHeight: "1.5",  fontWeight: "400" }],
        "label":      ["11px",  { lineHeight: "1.2",  letterSpacing: "0.08em", fontWeight: "700" }],
      },
      borderRadius: {
        sm:   "8px",
        md:   "12px",
        lg:   "16px",
        xl:   "20px",
        "2xl":"24px",
        full: "9999px",
      },
      boxShadow: {
        sm:  "0 2px 8px rgba(42,59,48,0.06)",
        md:  "0 4px 16px rgba(42,59,48,0.08)",
        lg:  "0 8px 32px rgba(42,59,48,0.10)",
        xl:  "0 16px 48px rgba(42,59,48,0.12)",
      },
      spacing: {
        "section": "96px",
        "section-sm": "64px",
      },
      maxWidth: {
        "content": "1200px",
      },
      keyframes: {
        fadeUp:    { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp:   { from: { transform: "translateY(100%)" }, to: { transform: "translateY(0)" } },
        pulse:     { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: ".6", transform: "scale(1.1)" } },
        ping:      { "0%": { transform: "scale(1)", opacity: ".6" }, "100%": { transform: "scale(2.2)", opacity: "0" } },
        spin:      { to: { transform: "rotate(360deg)" } },
        shimmer:   { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
      },
      animation: {
        "fade-up":  "fadeUp 0.45s cubic-bezier(.22,.68,0,1.2) both",
        "fade-in":  "fadeIn 0.3s ease both",
        "slide-up": "slideUp 0.35s cubic-bezier(.22,.68,0,1.2)",
        "pulse-dot":"pulse 2s ease infinite",
        "ping":     "ping 1.4s ease infinite",
        "spin":     "spin 0.8s linear infinite",
        "shimmer":  "shimmer 2.5s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
