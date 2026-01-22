# World Changer Group of Developers

**Production-ready React + Vite + Tailwind website for WCGD.**

---

## Features

✅ **Enterprise-grade architecture**: React Router, component-based, clean structure  
✅ **SEO optimized**: Unique title/description per page, Open Graph tags, semantic HTML  
✅ **Conversion-focused**: CTAs, forms, consultation booking, testimonials, metrics  
✅ **13 pages**: Home, About, Services (4 deep pages), Events, Community, Blog, Portfolio, Contact, Consultation, 404  
✅ **Mobile-first responsive design** with Tailwind CSS  
✅ **Performance**: Vite HMR, code splitting, optimized builds  
✅ **Content systems**: Blogs, events, testimonials, services—modular and extendable  

---

## Tech Stack

- **React 18** (Strict Mode)
- **React Router 6** (client-side routing)
- **Vite 5** (dev server & build tool)
- **Tailwind CSS 3** (utility-first styling)
- **PostCSS & Autoprefixer**

---

## Project Structure

```
wcgd-site/
├── index.html                # Vite entry with default SEO/OG meta
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── og-image.svg          # Open Graph image for social sharing
├── src/
│   ├── main.jsx              # React app mount
│   ├── App.jsx               # Layout with Navbar, Routes, Footer
│   ├── router.jsx            # All routes
│   ├── index.css             # Tailwind imports + custom styles
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SEO.jsx           # Dynamic meta tag updater
│   │   ├── CTA.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Metric.jsx
│   │   ├── Testimonial.jsx
│   │   ├── BlogCard.jsx
│   │   ├── EventCard.jsx
│   │   └── ContactForm.jsx
│   ├── data/
│   │   ├── services.js       # Service definitions
│   │   ├── events.js         # Upcoming & past events
│   │   ├── metrics.js        # Trust metrics
│   │   ├── testimonials.js   # Client testimonials
│   │   └── blogs.js          # Blog post data
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── WebDevelopment.jsx
│       ├── MobileApps.jsx
│       ├── SoftwareDevelopment.jsx
│       ├── DatabaseNetwork.jsx
│       ├── WebinarsEvents.jsx
│       ├── MentorshipCommunity.jsx
│       ├── Blog.jsx
│       ├── BlogPost.jsx
│       ├── Portfolio.jsx
│       ├── Contact.jsx
│       ├── Consultation.jsx
│       └── NotFound.jsx
```

---

## Installation

```bash
cd "wcgd-site"
npm install
```

---

## Development

Start the dev server with hot reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
npm run build
```

Output: `dist/` folder with optimized static files.

---

## Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally on port 4173.

---

## Deployment

Deploy the `dist/` folder to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag-and-drop `dist/`
- **AWS S3 + CloudFront**: `aws s3 sync dist/ s3://your-bucket`
- **Railway / Render**: Connect repo and set build command to `npm run build`

For SPA routing, configure redirects (e.g., `_redirects` for Netlify or CloudFront behaviors).

---

## Customization

### Update SEO defaults

Edit `index.html` `<meta>` tags and `src/components/SEO.jsx`.

### Add/edit content

- Services: `src/data/services.js`
- Events: `src/data/events.js`
- Blog posts: `src/data/blogs.js`
- Testimonials: `src/data/testimonials.js`
- Metrics: `src/data/metrics.js`

### Styling

Global styles: `src/index.css`  
Tailwind config: `tailwind.config.js` (colors, spacing, shadows)

### Forms & CTAs

- Contact form: `src/components/ContactForm.jsx` (uses `mailto:` by default—replace with backend endpoint or Formspree/Netlify Forms)
- Consultation booking: `src/pages/Consultation.jsx` (replace Calendly URL)

---

## SEO Checklist

✅ Unique `<title>` and `<meta name="description">` per page  
✅ Open Graph and Twitter Card tags  
✅ Semantic HTML (`<h1>`, `<h2>`, etc.)  
✅ Internal links between pages  
✅ Keywords naturally integrated  
✅ Fast Core Web Vitals  
✅ Mobile-first responsive  
✅ Image `alt` text  
✅ Clean URLs  

---

## License

Proprietary — World Changer Group of Developers © 2026

---

## Support

For questions or custom development:

📧 **projects@wcgd.dev**  
🌐 [Book a Consultation](/consultation)
