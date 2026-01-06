/**
 * Shared Head Configuration
 * Include this AFTER tailwindcss CDN in every page
 * <script src="https://cdn.tailwindcss.com"></script>
 * <script src="shared-head.js"></script>
 *
 * CENTRAL COLOR PALETTE - Change colors here ONLY
 */

// ========== SWITCH PALETTES HERE ==========
// Uncomment the palette you want to use:

// TEST 1: Soft Pastels (ACTIVE) ■ #ffb5a0 ■ #f4a8b8 ■ #a4d5e6 ■ #c5b5cf
const COLORS = {
  primary: "#ffb5a0", // ■ Peach
  secondary: "#f4a8b8", // ■ Pink
  accent: "#a4d5e6", // ■ Sky Blue
  accentDark: "#c5b5cf", // ■ Lavender
  textDark: "#2e282a", // ■ Dark Gray
  textLight: "#9a8a9e", // ■ Purple Gray
  backgroundLight: "#ffffff", // ■ White
  backgroundGray: "#f5f5f5", // ■ Light Gray
  borderColor: "#e8dce2", // ■ Soft Pink
};


// TEST 2: Warm Vintage ■ #FF9800 ■ #E74C3C ■ #FFC107 ■ #F57C00
// const COLORS = {
//   primary: "#FF9800",       // ■ Orange
//   secondary: "#E74C3C",     // ■ Red
//   accent: "#FFC107",        // ■ Golden Yellow
//   accentDark: "#F57C00",    // ■ Dark Orange
//   textDark: "#2e282a",      // ■ Dark Gray
//   textLight: "#6d6d6d",     // ■ Medium Gray
//   backgroundLight: "#F5E6D3", // ■ Beige
//   backgroundGray: "#EDE0D4",  // ■ Warm Gray
//   borderColor: "#D4C5B9",     // ■ Tan
// };

// TEST 3: Earthy Natural ■ #c17050 ■ #d4a5a5 ■ #8b9d77 ■ #5a7a7c
// const COLORS = {
//   primary: "#c17050", // ■ Terracotta
//   secondary: "#d4a5a5", // ■ Dusty Rose
//   accent: "#8b9d77", // ■ Sage Green
//   accentDark: "#5a7a7c", // ■ Teal
//   textDark: "#3d3d3d", // ■ Charcoal
//   textLight: "#6b6b6b", // ■ Gray
//   backgroundLight: "#f8f5f0", // ■ Cream
//   backgroundGray: "#e8e3dc", // ■ Sand
//   borderColor: "#c9c0b5", // ■ Taupe
// };

// Make COLORS globally accessible for components.js and other scripts
window.COLORS = COLORS;

// Inject CSS variables for styles.css to use
const cssVars = document.createElement("style");
cssVars.textContent = `
  :root {
    --primary-color: ${COLORS.primary};
    --secondary-color: ${COLORS.secondary};
    --accent-color: ${COLORS.accent};
    --accent-dark: ${COLORS.accentDark};
    --text-dark: ${COLORS.textDark};
    --text-light: ${COLORS.textLight};
    --background-light: ${COLORS.backgroundLight};
    --background-gray: ${COLORS.backgroundGray};
    --border-color: ${COLORS.borderColor};
  }
`;
document.head.appendChild(cssVars);

// Tailwind Configuration - Uses colors from COLORS object above
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        accent: COLORS.accent,
        "accent-dark": COLORS.accentDark,
        "text-dark": COLORS.textDark,
        "text-light": COLORS.textLight,
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        signature: ["Tangerine", "cursive"],
      },
    },
  },
};

// Add shared styles to document
const sharedStyles = document.createElement("style");
sharedStyles.setAttribute("type", "text/tailwindcss");
sharedStyles.textContent = `
  @layer base {
    /* Hide Alpine.js elements until ready - CRITICAL for iOS Safari */
    [x-cloak] { display: none !important; }
    html { 
      scroll-behavior: smooth;
      -webkit-text-size-adjust: 100%;
    }
    body { 
      @apply font-sans text-text-dark leading-relaxed;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    /* iOS Safari font fixes */
    .font-signature {
      font-family: 'Tangerine', cursive !important;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }
  }
  @layer components {
    .btn-primary {
      @apply px-8 py-3 bg-accent text-white rounded-full font-semibold 
             transition-all duration-300 hover:bg-accent-dark hover:-translate-y-1 
             hover:shadow-lg inline-block;
      -webkit-tap-highlight-color: transparent;
    }
    .btn-secondary {
      @apply px-8 py-3 border-2 border-white text-white rounded-full font-semibold 
             transition-all duration-300 hover:bg-white hover:text-primary 
             hover:-translate-y-1 inline-block;
      -webkit-tap-highlight-color: transparent;
    }
    .btn-outline {
      @apply px-8 py-3 border-2 border-secondary text-secondary rounded-full font-semibold 
             transition-all duration-300 hover:bg-secondary hover:text-white 
             hover:-translate-y-1 inline-block;
      -webkit-tap-highlight-color: transparent;
    }
    .section-title {
      @apply font-heading text-4xl md:text-5xl text-text-dark mb-4;
    }
    .section-label {
      @apply inline-block text-secondary font-semibold uppercase tracking-wider text-sm mb-2;
    }
    .card {
      @apply bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 
             hover:shadow-xl hover:-translate-y-2;
    }
    .input-field {
      @apply w-full px-4 py-3 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
             transition-all duration-300;
    }
  }
`;
document.head.appendChild(sharedStyles);
