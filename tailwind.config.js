/**
 * Tailwind CSS Configuration
 * Used by VS Code Tailwind CSS IntelliSense extension
 * Note: The browser uses shared-head.js for CDN-based config
 */
module.exports = {
  content: ["./*.html", "./components/**/*.html", "./blog/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#f4acb7",
        secondary: "#c03221",
        accent: "#9cb380",
        "accent-dark": "#3e363f",
        "text-dark": "#2e282a",
        "text-light": "#6b5f70",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        signature: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [],
};
