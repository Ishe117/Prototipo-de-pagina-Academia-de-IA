import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0B0F19", // Negro azulado profundo
        foreground: "#FFFFFF", // Blanco puro
        primary: {
          DEFAULT: "#00D4FF", // Cyan eléctrico
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1A1F2E", // Gris azulado oscuro
          foreground: "#E0E6ED", // Gris claro
        },
        destructive: {
          DEFAULT: "#FF3366", // Rojo neón
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#151B2D", // Azul gris oscuro
          foreground: "#9CA3AF", // Gris medio
        },
        accent: {
          DEFAULT: "#00FF88", // Verde neón
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#1A1F2E",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#151B2D",
          foreground: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0B0F19 0%, #1A1F2E 25%, #2D1B69 50%, #1A1F2E 75%, #0B0F19 100%)",
        "card-gradient": "linear-gradient(145deg, #151B2D 0%, #1E2A3A 50%, #151B2D 100%)",
        "tech-gradient": "linear-gradient(90deg, #00D4FF 0%, #00FF88 50%, #8B5CF6 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px #00FF8840, 0 0 40px #00D4FF20",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 30px #00FF8860, 0 0 60px #00D4FF40",
            transform: "scale(1.02)",
          },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "tech-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 10px #00D4FF40",
            borderColor: "#00D4FF",
          },
          "50%": {
            boxShadow: "0 0 20px #00FF8860",
            borderColor: "#00FF88",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 3s ease-in-out infinite",
        "tech-pulse": "tech-pulse 2s ease-in-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
