module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./global.css", // Caminho do novo arquivo global CSS
  ],
  theme: {
    extend: {},
    colors: {
      "yellow-dark": "#C47F17",
      "yellow-light": "#F1E9C9",
      yellow: "#DBAC2C",
      "purple-dark": "#4B2995",
      "purple-light": "#EBE5F9", // Corrigido com #
      purple: "#8047F8",
      "base-title": "#272221",
      "base-text": "#574F4D",
      "base-label": "#8D8686",
      "base-hover": "#D7D5D5",
      "base-button": "#E6E5E5",
      "base-input": "#EDEDED",
      "base-card": "#F3F2F2",
      background: "#FAFAFA",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Baloo2: ["Baloo 2", "sans-serif"],
    },
  },
  plugins: [],
};
