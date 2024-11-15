/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      minWidth: {
        sm: "640px", // min-w-sm
      },
      colors: {
        "primary-dark": "#f97316",
        "secondary-dark": "#fed7aa",
        "gray-dark": "#9ca3af",
        "bgColor-dark": "#000000",
        "textColor-dark": "#ffffff",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "slide-down": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s forwards",
        "slide-down": "slide-down 0.3s forwards",
      },
    },
  },
  plugins: [],
};
