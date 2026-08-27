/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05060F",
          900: "#0A0E20",
          800: "#10152E",
          700: "#161C3D",
          600: "#1E2650",
        },
        brand: {
          blue: "#4F7CFF",
          cyan: "#22D3EE",
          violet: "#8B5CF6",
          purple: "#B197FC",
        },
        ink: {
          100: "#F5F6FA",
          300: "#C7CBE0",
          500: "#8A8FB3",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4F7CFF 0%, #8B5CF6 60%, #B197FC 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(79,124,255,0.15) 0%, rgba(139,92,246,0.15) 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(79,124,255,0.18) 0%, rgba(5,6,15,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.25), 0 8px 40px -8px rgba(79,124,255,0.35)",
        "glow-sm": "0 0 0 1px rgba(139,92,246,0.2), 0 4px 20px -6px rgba(79,124,255,0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "gradient-move": "gradientMove 6s ease infinite",
        blink: "blink 1.2s step-start infinite",
      },
    },
  },
  plugins: [],
};
