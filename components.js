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

// Initialize Navbar - Vanilla JS (No Alpine)
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const navWrapper = document.getElementById("nav-wrapper");
  const navLogo = document.getElementById("nav-logo");
  const navLinks = navbar.querySelectorAll(".nav-link");
  const hamburgerLines = navbar.querySelectorAll(".hamburger-line");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  // Check if page has transparent navbar
  const isTransparent =
    document.body && document.body.dataset.navTransparent === "true";
  let isScrolled = false;
  let isMenuOpen = false;

  // Update navbar colors based on scroll and transparency
  function updateNavbarColors() {
    const shouldBeWhite = isScrolled || !isTransparent || isMenuOpen;

    if (shouldBeWhite) {
      navbar.classList.add("bg-white", "shadow-lg");
      navbar.classList.remove("bg-transparent");
      navLogo.classList.add("text-primary");
      navLogo.classList.remove("text-white");
      navLinks.forEach((link) => {
        link.classList.add("text-text-dark");
        link.classList.remove("text-white");
      });
      hamburgerLines.forEach((line) => {
        line.classList.add("bg-primary");
        line.classList.remove("bg-white");
      });
      navWrapper.classList.add("py-4");
      navWrapper.classList.remove("py-5");
    } else {
      navbar.classList.remove("bg-white", "shadow-lg");
      navbar.classList.add("bg-transparent");
      navLogo.classList.remove("text-primary");
      navLogo.classList.add("text-white");
      navLinks.forEach((link) => {
        link.classList.remove("text-text-dark");
        link.classList.add("text-white");
      });
      hamburgerLines.forEach((line) => {
        line.classList.remove("bg-primary");
        line.classList.add("bg-white");
      });
      navWrapper.classList.remove("py-4");
      navWrapper.classList.add("py-5");
    }
  }

  // Handle scroll
  function handleScroll() {
    isScrolled = window.scrollY > 50;
    updateNavbarColors();
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Show menu
      mobileMenu.style.display = "block";
      setTimeout(() => {
        mobileMenu.style.opacity = "1";
      }, 10);

      // Animate hamburger
      hamburgerLines[0].style.transform = "rotate(45deg) translateY(8px)";
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[2].style.transform = "rotate(-45deg) translateY(-8px)";
    } else {
      // Hide menu
      mobileMenu.style.opacity = "0";
      setTimeout(() => {
        mobileMenu.style.display = "none";
      }, 200);

      // Reset hamburger
      hamburgerLines[0].style.transform = "";
      hamburgerLines[1].style.opacity = "1";
      hamburgerLines[2].style.transform = "";
    }

    updateNavbarColors();
  }

  // Close menu when clicking a link
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) {
        toggleMobileMenu();
      }
    });
  });

  // Event listeners
  window.addEventListener("scroll", handleScroll, { passive: true });
  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  // Initial state
  updateNavbarColors();
}

// Initialize components when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar-placeholder", "components/navbar.html");
  await loadComponent("footer-placeholder", "components/footer.html");

  // Initialize navbar after it's loaded
  setTimeout(() => {
    initNavbar();
    setActiveNavLink();
    fixRelativePaths();
  }, 100);

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
