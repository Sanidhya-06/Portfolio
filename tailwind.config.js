/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        wallpaper: "#F2EBE3",
        "pink-folder": "#E8C4C4",
        "pink-accent": "#D4858A",
        "pink-light": "#F5DADA",
        "window-bg": "rgba(245, 238, 235, 0.82)",
        "titlebar": "rgba(232, 196, 196, 0.9)",
        "dock-bg": "rgba(240, 228, 224, 0.55)",
        charcoal: "#2C2C2C",
        "text-muted": "#8A7A78",
      },
      fontFamily: {
        handwritten: ["Caveat", "cursive"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        xs: "4px",
      },
      borderRadius: {
        window: "10px",
      },
    },
  },
  plugins: [],
}
