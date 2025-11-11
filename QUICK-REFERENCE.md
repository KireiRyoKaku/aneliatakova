# 📝 Quick Reference: Adding Blog Posts

## Method 1: Using Template (Easiest)

### Step 1: Copy Template
```bash
Copy: blog/blog-template.html
Paste as: blog/post-4.html
```

### Step 2: Find & Replace These Placeholders

| Placeholder | Replace With | Example |
|-------------|--------------|---------|
| `[BLOG TITLE]` | Your post title | Съвети за добър сън |
| `[CATEGORY]` | Post category | Съвети |
| `[DATE]` | Publication date | Ноември 15, 2025 |
| `[X]` (in "X мин") | Reading time | 5 |
| `[IMAGE]` | Image filename | blog-4.jpg |
| `[ALT TEXT]` | Image description | Бебе спи спокойно |

### Step 3: Write Your Content
Replace the placeholder content in the `<div class="post-content">` section.

### Step 4: Update Homepage
In `index.html`, find the blog section and update one of the blog cards:
```html
<a href="blog/post-4.html" class="blog-link">Прочети повече</a>
```

### Step 5: Add Featured Image
Add your image to: `assets/images/blog-4.jpg`

---

## Method 2: Copy Existing Post (Faster)

### Step 1: Duplicate
```bash
Copy: blog/post-1.html
Paste as: blog/post-4.html
```

### Step 2: Update These Sections
1. `<title>` tag (line ~6)
2. Meta description (line ~7)
3. Blog post header (category, date, title, excerpt)
4. Featured image path
5. Main content
6. Related posts links

### Step 3: Link from Homepage
Same as Method 1, Step 4.

---

## Blog Post Anatomy

```html
<!DOCTYPE html>
<html lang="bg">
<head>
    <title>Your Title - Анелия Такова</title>
    <meta name="description" content="Your description">
    <!-- Links to CSS, fonts -->
</head>
<body>
    <!-- Navigation (same on all pages) -->
    
    <!-- Header: Category, Date, Title, Excerpt -->
    
    <!-- Featured Image -->
    
    <!-- Main Content: Your article -->
    
    <!-- Author Box -->
    
    <!-- Related Posts -->
    
    <!-- CTA (Call to Action) -->
    
    <!-- Footer -->
</body>
</html>
```

---

## Content Writing Tips

### Headings
```html
<h2>Main Section</h2>
<h3>Subsection</h3>
<h4>Minor Point</h4>
```

### Paragraphs
```html
<p>Your text here. Keep paragraphs 2-4 sentences.</p>
```

### Lists
```html
<ul>
    <li>First point</li>
    <li>Second point</li>
</ul>
```

### Blockquote (for emphasis)
```html
<blockquote>
    <p>"Important quote or tip"</p>
</blockquote>
```

### Key Takeaways Box
```html
<div class="key-takeaways">
    <h4><i class="fas fa-lightbulb"></i> Ключови моменти:</h4>
    <ul>
        <li>Point one</li>
        <li>Point two</li>
    </ul>
</div>
```

---

## SEO Checklist

For each new post:
- [ ] Unique, descriptive title (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] H1 heading (post title)
- [ ] H2/H3 subheadings (for structure)
- [ ] Alt text for featured image
- [ ] Internal links (to other posts)
- [ ] Minimum 300 words (500-1000 is better)
- [ ] Keywords naturally in content

---

## Image Guidelines

### Featured Image
- **Size:** 1200 x 800 pixels
- **Format:** JPG or WebP
- **File size:** Under 500KB (compress!)
- **Name:** blog-X.jpg (e.g., blog-4.jpg)
- **Location:** assets/images/

### Optimization Tools
- **TinyPNG:** https://tinypng.com
- **Squoosh:** https://squoosh.app
- **Photopea:** https://photopea.com (free Photoshop alternative)

---

## Common Mistakes to Avoid

❌ **Don't:** Use absolute paths `/blog/post-1.html`  
✅ **Do:** Use relative paths `blog/post-1.html`

❌ **Don't:** Forget to update related posts  
✅ **Do:** Link to your other 2-3 relevant articles

❌ **Don't:** Leave placeholder text  
✅ **Do:** Replace ALL `[PLACEHOLDERS]`

❌ **Don't:** Use huge images  
✅ **Do:** Compress images before uploading

❌ **Don't:** Skip the meta description  
✅ **Do:** Write unique description for each post

---

## Publishing Checklist

Before pushing to GitHub:

- [ ] All placeholders replaced
- [ ] Title is descriptive and unique
- [ ] Meta description written
- [ ] Featured image added and optimized
- [ ] Content proofread (no typos)
- [ ] All links tested (open in browser)
- [ ] Looks good on mobile (test in browser)
- [ ] Related posts updated
- [ ] Homepage blog card updated
- [ ] Author bio is correct

---

## Git Commands (Quick Reference)

```bash
# Add your changes
git add .

# Commit with message
git commit -m "Added blog post: [Your Title]"

# Push to GitHub
git push

# GitHub Pages will rebuild automatically (2-3 min)
```

---

## Need Help?

📚 **Read the guides:**
- `blog/README.md` - Detailed blog guide
- `BLOG-SUMMARY.md` - Implementation overview
- `DEPLOYMENT.md` - GitHub Pages setup

🔍 **Check existing posts:**
- Look at `blog/post-1.html` for structure
- Copy what works!

---

## Quick Wins

### Want more posts quickly?
1. Start with the template
2. Write shorter posts (500 words)
3. Use stock photos (Unsplash, Pexels)
4. Repurpose social media content
5. Answer common client questions

### Content Ideas
- FAQ answers from clients
- Myth-busting articles
- Personal experiences
- Case studies (anonymized)
- Seasonal topics
- Research summaries
- Quick tips lists

---

**Remember:** Done is better than perfect. Publish and improve! 🚀
