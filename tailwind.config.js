/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EC",
        "cream-secondary": "#EFE7DA",
        "text-primary": "#1F1F1F",
        "text-secondary": "#5A5A5A",
        accent: "#8B5E3C",
        "card-bg": "#FFFDF9",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "warm-sm": "0 2px 12px rgba(139, 94, 60, 0.08)",
        "warm-md": "0 4px 24px rgba(139, 94, 60, 0.12)",
        "warm-lg": "0 8px 40px rgba(139, 94, 60, 0.16)",
      },
    },
  },
  plugins: [],
};


