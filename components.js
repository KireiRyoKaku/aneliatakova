/**
 * Component Loader
 * Loads navbar and footer components into pages
 *
 * Usage:
 * 1. Add <div id="navbar-placeholder"></div> where you want the navbar
 * 2. Add <div id="footer-placeholder"></div> where you want the footer
 * 3. Set data-nav-transparent="true" on <body> for transparent navbar (hero pages)
 * 4. Include this script at the end of <body>: <script src="components.js"></script>
 */

// Determine base path based on current page location
function getBasePath() {
  const path = window.location.pathname;
  // Check if we're in a subdirectory like /blog/
  if (path.includes("/blog/")) {
    return "../";
  }
  return "";
}

// Load a component into a placeholder element
async function loadComponent(elementId, componentPath) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const basePath = getBasePath();
    const response = await fetch(basePath + componentPath);
    if (response.ok) {
      const html = await response.text();
      element.outerHTML = html;
    }
  } catch (error) {
    console.error(`Failed to load component: ${componentPath}`, error);
  }
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const path = window.location.pathname;
  const currentPage = path.split("/").pop() || "index.html";
  const isInBlogFolder = path.includes("/blog/");

  // Wait a bit for Alpine to initialize
  setTimeout(() => {
    const navLinks = document.querySelectorAll("[data-nav-link]");

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const linkPage = href.split("/").pop().split("#")[0] || "index.html";
      const isBlogLink = href.includes("blog/");

      // Check for match - but handle blog folder specially
      const isMatch =
        (linkPage === currentPage && isBlogLink === isInBlogFolder) ||
        (currentPage === "" && linkPage === "index.html" && !isBlogLink) ||
        (currentPage === "index.html" &&
          href === "index.html" &&
          !isInBlogFolder);

      if (isMatch) {
        // Add active underline
        link.classList.remove("after:w-0");
        link.classList.add("after:w-full");
      }
    });
  }, 100);
}

// Fix relative paths in components when loaded from subdirectories
function fixRelativePaths() {
  const basePath = getBasePath();
  if (!basePath) return;

  setTimeout(() => {
    // Fix navbar links
    document
      .querySelectorAll(
        'nav a[href^="index"], nav a[href^="za-men"], nav a[href^="konsultacii"], nav a[href^="kontakti"]'
      )
      .forEach((link) => {
        const href = link.getAttribute("href");
        if (
          !href.startsWith("http") &&
          !href.startsWith("../") &&
          !href.startsWith("/")
        ) {
          link.setAttribute("href", basePath + href);
        }
      });

    // Fix footer links
    document
      .querySelectorAll(
        'footer a[href^="index"], footer a[href^="za-men"], footer a[href^="konsultacii"], footer a[href^="kontakti"]'
      )
      .forEach((link) => {
        const href = link.getAttribute("href");
        if (
          !href.startsWith("http") &&
          !href.startsWith("../") &&
          !href.startsWith("/")
        ) {
          link.setAttribute("href", basePath + href);
        }
      });
  }, 150);
}

// Initialize components when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar-placeholder", "components/navbar.html");
  await loadComponent("footer-placeholder", "components/footer.html");

  // Re-initialize Alpine for dynamically loaded components
  // Use a longer delay for iOS Safari to ensure proper initialization
  const reinitAlpine = () => {
    if (window.Alpine) {
      document.querySelectorAll("nav[x-data]").forEach((el) => {
        // Ensure open state is false before Alpine initializes
        const mobileMenu = el.querySelector('[x-show="open"]');
        if (mobileMenu) {
          mobileMenu.style.display = "none";
        }
        Alpine.initTree(el);
      });
    }
  };

  // Try immediate initialization
  reinitAlpine();

  // iOS Safari fallback - reinit after Alpine fully loads
  if (window.Alpine) {
    setTimeout(reinitAlpine, 100);
  } else {
    // Wait for Alpine to load
    document.addEventListener("alpine:init", () => {
      setTimeout(reinitAlpine, 50);
    });
  }

  setActiveNavLink();
  fixRelativePaths();

  // Load Calendly widget
  // Add CSS
  const calendlyCSS = document.createElement("link");
  calendlyCSS.rel = "stylesheet";
  calendlyCSS.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(calendlyCSS);

  // Add custom CSS to style the badge - responsive for mobile
  const customCSS = document.createElement("style");
  customCSS.textContent = `
    .calendly-badge-widget {
      right: 10px !important;
      bottom: 10px !important;
    }
    .calendly-badge-widget .calendly-badge-content {
      font-size: 14px !important;
      padding: 10px 16px !important;
      border-radius: 50px !important;
      box-shadow: 0 4px 15px rgba(196, 50, 33, 0.4) !important;
      transform: scale(1);
      transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    }
    .calendly-badge-widget .calendly-badge-content:hover {
      transform: scale(1.05) !important;
      box-shadow: 0 6px 20px rgba(196, 50, 33, 0.5) !important;
    }
    @media (min-width: 768px) {
      .calendly-badge-widget {
        right: 20px !important;
        bottom: 20px !important;
      }
      .calendly-badge-widget .calendly-badge-content {
        font-size: 18px !important;
        padding: 14px 24px !important;
      }
    }
  `;
  document.head.appendChild(customCSS);

  // Add JS and initialize widget when loaded
  const calendlyScript = document.createElement("script");
  calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js";
  calendlyScript.onload = function () {
    Calendly.initBadgeWidget({
      url: "https://calendly.com/sunzatebe/15min?hide_gdpr_banner=1",
      text: "Да се запознаем!",
      color: "#f4acb7",
      textColor: "#c03221",
      branding: false,
    });
  };
  document.body.appendChild(calendlyScript);
});
