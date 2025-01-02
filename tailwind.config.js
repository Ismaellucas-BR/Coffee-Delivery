module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./global.css"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "yellow-dark": "#C47F17",
        "yellow-light": "#F1E9C9",
        yellow: "#DBAC2C",
        "purple-dark": "#4B2995",
        "purple-light": "#EBE5F9",
        purple: "#8047F8",
        "base-title": "#272221",
        "base-text": "#574F4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        background: "#FAFAFA",
        "base-white": "#FFFFFF",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Baloo2: ["Baloo 2", "sans-serif"],
      },
      width: {
        MenuWidthcontrol: "800px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
