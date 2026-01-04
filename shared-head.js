/**
 * Shared Head Configuration
 * Include this AFTER tailwindcss CDN in every page
 * <script src="https://cdn.tailwindcss.com"></script>
 * <script src="shared-head.js"></script>
 */

// Add x-cloak style immediately to prevent flash of unstyled Alpine content
const xCloakStyle = document.createElement("style");
xCloakStyle.textContent = "[x-cloak] { display: none !important; }";
document.head.appendChild(xCloakStyle);

// Tailwind Configuration - Shared across all pages
tailwind.config = {
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
};

// Add shared styles to document
const sharedStyles = document.createElement("style");
sharedStyles.setAttribute("type", "text/tailwindcss");
sharedStyles.textContent = `
  @layer base {
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
      @apply px-8 py-3 bg-secondary text-white rounded-full font-semibold 
             transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 
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
