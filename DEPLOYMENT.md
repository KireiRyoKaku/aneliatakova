# GitHub Pages Deployment Guide

## 🚀 Quick Setup

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `aneliatakova` (or your preferred name)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README (you already have one)
5. Click "Create repository"

### Step 2: Push Your Code
Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website with blog"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/aneliatakova.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Leave folder as **/ (root)**
6. Click **Save**

### Step 4: Wait & Access
- GitHub will build your site (takes 1-2 minutes)
- Your site will be available at: `https://YOUR_USERNAME.github.io/aneliatakova/`
- Or if repo name matches username: `https://YOUR_USERNAME.github.io/`

## 🌐 Custom Domain (Optional)

### If you want a custom domain like aneliatakova.com:

1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Add CNAME record pointing to: `YOUR_USERNAME.github.io`
3. In GitHub repo settings → Pages → Custom domain
4. Enter your domain and save
5. Wait for DNS propagation (24-48 hours)

**DNS Settings Example:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## 📁 Important Files for GitHub Pages

### Required Files (You have these):
- ✅ `index.html` - Homepage
- ✅ `styles.css` - Styles
- ✅ `script.js` - JavaScript
- ✅ `README.md` - Documentation

### Optional but Recommended:

#### 1. Create `.gitignore`
```
# OS Files
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Temp files
*.tmp
*.log
```

#### 2. Create `CNAME` (only if using custom domain)
```
aneliatakova.com
```

#### 3. Create `404.html` (custom error page)
```html
<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Страницата не е намерена</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px;">
        <div>
            <h1 style="font-size: 4rem; color: #685369;">404</h1>
            <p style="font-size: 1.5rem; color: #8A7088;">Страницата не е намерена</p>
            <a href="index.html" class="btn btn-primary" style="margin-top: 30px;">Обратно към началото</a>
        </div>
    </div>
</body>
</html>
```

## 🔄 Updating Your Site

After making changes:

```bash
# Add changed files
git add .

# Commit with message
git commit -m "Updated blog post / Added new content"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild (takes 1-2 minutes).

## ⚡ Performance Tips

### 1. Optimize Images
Before adding images to `assets/images/`:
- Resize to appropriate dimensions
- Compress (use TinyPNG, Squoosh, etc.)
- Target: under 500KB per image
- Consider WebP format

### 2. Minify CSS/JS (Optional)
For production, you can minify:
- Use online tools or build tools
- But not necessary for small sites

### 3. Use CDN for Fonts
Already using Google Fonts CDN ✅

## 🐛 Troubleshooting

### Site not showing up?
- Check Settings → Pages is enabled
- Verify branch is set to `main`
- Wait 2-3 minutes after pushing
- Check repository is Public

### Links not working?
- Use relative paths: `blog/post-1.html` not `/blog/post-1.html`
- Check file names match exactly (case-sensitive)

### Images not loading?
- Verify image paths are correct
- Images must be in repository
- Check file extensions (.jpg, .png, etc.)

### CSS not applying?
- Clear browser cache (Ctrl+Shift+R)
- Check CSS file path in HTML
- Verify styles.css is in repository

## 📊 Analytics (Optional)

### Add Google Analytics:
1. Create GA4 property
2. Get tracking ID
3. Add to `<head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Security

GitHub Pages is secure by default:
- ✅ Free HTTPS (SSL certificate)
- ✅ DDoS protection
- ✅ No server to manage

## 💰 Costs

**Completely FREE!**
- GitHub Pages hosting: Free
- HTTPS: Free
- Bandwidth: Generous
- Storage: 1GB limit (plenty for this site)

Only cost: Custom domain ($10-15/year) - Optional

## 📱 Mobile Testing

Test your site on mobile:
1. Open on your phone: `https://YOUR_USERNAME.github.io/aneliatakova/`
2. Or use Chrome DevTools (F12 → Device Toolbar)

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Add real images (profile, blog images)
- [ ] Update contact information (email, phone)
- [ ] Add social media links
- [ ] Test all navigation links
- [ ] Test blog post links
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Spell-check content
- [ ] Update meta descriptions
- [ ] Test in different browsers

## 🎉 You're Ready!

Your site structure is perfect for GitHub Pages. Just:
1. Add your images
2. Update personal info
3. Push to GitHub
4. Enable Pages
5. Share your link!

---

**Need help?** Check GitHub Pages documentation: https://docs.github.com/en/pages
