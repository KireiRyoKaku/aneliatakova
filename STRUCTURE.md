# Project Structure & Components Guide

## 🎨 UI Library: Tailwind CSS + Alpine.js

This project uses:

- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- **Alpine.js** (via CDN) - Lightweight JavaScript for interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Poppins, Playfair Display, Tangerine

## 📁 New Project Structure

```
aneliatakova/
├── index.html              # Homepage (use index-new.html)
├── za-men.html             # About page (use za-men-new.html)
├── konsultacii.html        # Services page
├── kontakti.html           # Contact page (use kontakti-new.html)
├── 404.html                # Error page
│
├── components/             # Reusable HTML snippets
│   ├── head.html           # Common <head> content
│   ├── navbar.html         # Navigation component
│   └── footer.html         # Footer component
│
├── blog/
│   ├── index.html          # Blog listing
│   ├── post-1.html
│   ├── post-2.html
│   └── post-3.html
│
└── assets/
    └── images/
```

## 🎨 Color Palette (Tailwind Config)

| Name        | Hex     | Usage                   |
| ----------- | ------- | ----------------------- |
| primary     | #f4acb7 | Pink - Main brand color |
| secondary   | #c03221 | Red - CTAs, accents     |
| accent      | #9cb380 | Green - Success states  |
| accent-dark | #3e363f | Dark - Footer           |
| text-dark   | #2e282a | Primary text            |
| text-light  | #6b5f70 | Secondary text          |

## 🔧 Custom Components

### Buttons

```html
<!-- Primary Button (Red) -->
<a href="#" class="btn-primary">Запази час</a>

<!-- Secondary Button (Outline white - for dark backgrounds) -->
<a href="#" class="btn-secondary">Learn More</a>

<!-- Outline Button (Secondary color outline) -->
<a href="#" class="btn-outline">View All</a>
```

### Cards

```html
<div class="card">
  <!-- Card content -->
</div>
```

### Section Headers

```html
<span class="section-label">Label Text</span>
<h2 class="section-title">Title Text</h2>
```

## 📱 Responsive Design

Tailwind breakpoints used:

- `sm:` - 640px
- `md:` - 768px (tablet)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px

## 🔄 Navigation States

### Transparent Navbar (Hero Pages)

Uses Alpine.js to detect scroll:

```html
<nav
  x-data="{ scrolled: false, open: false }"
  @scroll.window="scrolled = (window.scrollY > 50)"
  :class="scrolled ? 'bg-white shadow-lg' : 'bg-transparent'"
></nav>
```

### Solid Navbar (Inner Pages)

Simply starts with solid background:

```html
<nav x-data="{ open: false }" class="bg-white shadow-lg"></nav>
```

## ✏️ How to Edit

### Adding a New Page

1. Copy the structure from `kontakti-new.html` (inner page template)
2. Update the `<title>` and meta content
3. Change the active nav link
4. Add your content sections

### Changing Colors

Edit the Tailwind config in the `<head>`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#f4acb7", // Change this
        secondary: "#c03221", // Or this
      },
    },
  },
};
```

### Adding New Components

Add to the `<style>` block:

```css
@layer components {
  .my-new-component {
    @apply px-4 py-2 bg-primary rounded-lg;
  }
}
```

## 🚀 Migration from Old to New

To complete the migration:

1. Rename `index-new.html` → `index.html` (backup old first)
2. Rename `kontakti-new.html` → `kontakti.html`
3. Rename `za-men-new.html` → `za-men.html`
4. Update `konsultacii.html` with new structure
5. Update blog pages
6. Delete old `styles.css` and `script.js` (no longer needed)

## ⚡ Benefits of New Structure

- **No build step** - Works directly in browser
- **CDN-based** - Fast loading, no npm needed
- **Maintainable** - All styles are in-line with Tailwind classes
- **Responsive** - Mobile-first design built-in
- **Interactive** - Alpine.js handles all JS needs
- **Consistent** - Same component patterns across pages
