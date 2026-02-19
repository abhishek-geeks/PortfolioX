# Abhishek Kumar - Developer Portfolio

A modern, responsive developer portfolio website showcasing projects, skills, and experience.

## ✨ Features

- 🎨 **Dark/Light Mode** - Theme toggle with localStorage persistence
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **Project Filters** - Filter projects by category (Full Stack, AI/ML, DevOps)
- 📊 **Statistics Dashboard** - Display key metrics and achievements
- 📬 **Working Contact Form** - Email submissions with validation
- ✨ **Smooth Animations** - Scroll-triggered reveals and hover effects
- ⚡ **Fast Performance** - Optimized and lightweight
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Ready for Deployment** - Production-ready code with no external dependencies

## 📁 Project Structure

```
├── index.html          # Main HTML file with all sections
├── styles.css          # Responsive styling with CSS variables
├── script.js           # All functionality (themes, forms, filters)
├── README.md           # Documentation
├── package.json        # Project metadata
└── .gitignore          # Git ignore rules
```

## 🎯 Sections

- **Hero** - Striking introduction with typing animation
- **About** - Professional summary
- **Statistics** - Key metrics and achievements
- **Skills** - Interactive tech stack showcase
- **Experience** - Journey and background
- **Projects** - Featured projects with filtering
- **Contact** - Working contact form with validation
- **Social Links** - Connected to GitHub, LinkedIn, Twitter

## ⚙️ Features Explained

### Dark/Light Mode Toggle
- Click the theme toggle button in navbar
- Preference saved in localStorage
- Smooth transition between themes

### Project Filtering
- Filter projects by: All, Full Stack, AI/ML, DevOps
- Smooth animations when switching filters
- Each project shows relevant tech tags

### Working Contact Form
- Form validation
- Submissions stored in browser localStorage
- Success/error messages
- Accessible and user-friendly

### Statistics Section
- 4 key metrics displaying achievements
- Hover animations for engagement

## 🚀 Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Customize content in `index.html` and `script.js`

## 🎨 Customization

### Update Contact Information
Edit the contact links in the footer and contact section:
```html
<a href="mailto:your-email@domain.com">your-email@domain.com</a>
```

### Update Projects
Edit the `projects` array in `script.js`:
```javascript
const projects = [
  {
    name: "Your Project",
    description: "Description here",
    category: "fullstack", // or "ai" or "devops"
    tags: ["Tag1", "Tag2"],
    github: "https://github.com/yourrepo",
    demo: "https://live-demo-url"
  }
];
```

### Update Skills
Edit the `skills` array in `script.js`:
```javascript
const skills = ["Java", "Python", "JavaScript", ...];
```

### Update Statistics
Edit the stats section in `index.html`:
```html
<div class="stat-card">
  <div class="stat-number">Your Number</div>
  <div class="stat-label">Your Label</div>
</div>
```

### Change Colors (Theme)
Edit CSS variables in `styles.css`:
```css
:root {
  --accent: #22c55e;
  --accent-light: #4ade80;
  /* ... other variables */
}
```

## 🌐 Deployment

### Deploy to GitHub Pages
1. Create repo: `{username}.github.io`
2. Push this code
3. Live at: `https://{username}.github.io`

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repo to Netlify
2. Deploy with one click
3. Automatic deployments on push

### Deploy to Any Web Server
- Simply upload files to your hosting
- No build process or dependencies needed

## 📦 What's Included

✅ Pure HTML, CSS, and JavaScript - No frameworks
✅ No external dependencies or API keys needed
✅ Form submissions saved to localStorage
✅ Full offline functionality
✅ Mobile-first responsive design
✅ Production-ready code

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

© 2026 Abhishek Kumar. All rights reserved.

## 👤 Author

**Abhishek Kumar**
- Email: abhishekgeeks@gmail.com
- GitHub: [github.com/abhishekgeeks](https://github.com/abhishekgeeks)
- LinkedIn: [linkedin.com/in/abhishekgeeks](https://linkedin.com/in/abhishekgeeks)

---

Built with ❤️ using pure HTML, CSS, and JavaScript
