# PortfolioX - Abhishek Kumar

🚀 **Full Stack Developer • Product Builder • AI Enthusiast • Freelancer**

A modern, responsive developer portfolio showcasing services, skills, projects, and experience. Built with pure HTML, CSS, and JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌐 Live Demo

**[https://abhishek-geeks.github.io/PortfolioX/](https://abhishek-geeks.github.io/PortfolioX/)**

---

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek green accent with glassmorphism effects
- 📱 **Fully Responsive** - Mobile-first with hamburger navigation
- 🚀 **Animated Hero** - CSS patterns, glowing badge, photo avatar with ring animation
- 💼 **Services Section** - 6 service cards with hover effects
- 🛠️ **Skills Showcase** - Categorized tech stack (Frontend, Backend, DevOps, AI/ML, Tools)
- 📈 **Experience Timeline** - Visual journey from 2022-2025
- 🎯 **Project Filters** - Filter by category (Full Stack, AI/ML, DevOps, No-Code)
- 📊 **Stats Counter** - Animated counters with IntersectionObserver
- 📬 **Contact Form** - Inquiry form with project type & budget selection
- 🔍 **SEO Ready** - JSON-LD structured data, meta tags, Open Graph
- 📊 **Analytics Ready** - Google Analytics integration placeholder
- ⚡ **Zero Dependencies** - Pure HTML/CSS/JS, no frameworks

---

## 📁 Project Structure

```
PortfolioX/
├── index.html          # Main HTML (hero, about, services, skills, projects, contact)
├── styles.css          # All styling (1800+ lines, CSS variables, animations)
├── script.js           # JavaScript (nav toggle, typing, counters, filters)
├── Abhi.jpg            # Profile photo
├── README.md           # Documentation
├── SUGGESTIONS.md      # Future enhancement ideas
├── package.json        # Project metadata
└── .gitignore          # Git ignore rules
```

---

## 🎯 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated badge, photo avatar, typing effect, stats, Book a Call CTA |
| **About** | Professional summary with highlight metrics |
| **Services** | 6 cards - MVP, Full Stack, AI Integration, API, No-Code, Consulting |
| **Skills** | 5 categories with tech stack grid |
| **Experience** | Timeline from Student → Freelancer → Product Builder |
| **Projects** | 6 projects with category filtering |
| **Contact** | Inquiry form with project type & budget fields |
| **Footer** | Social links, freelance messaging |

---

## 🎨 Design System

### Colors
```css
--accent: #22c55e        /* Primary green */
--accent-light: #4ade80  /* Light green */
--bg-primary: #020617    /* Dark background */
--bg-secondary: #0f172a  /* Card background */
--text-primary: #f1f5f9  /* Main text */
```

### Animations
- `floatPattern` - Floating CSS shapes in hero
- `superBadgeGlow` - Pulsing badge glow effect
- `avatarRingGlow` - Photo ring gradient animation
- `textGlow` - Badge text glow animation
- `fadeInUp` - Section reveal on scroll

---

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishek-geeks/PortfolioX.git
   cd PortfolioX
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html or use a local server
   npx serve .
   ```

3. **Customize**
   - Replace `Abhi.jpg` with your photo
   - Update content in `index.html`
   - Modify colors in `styles.css` (`:root` variables)
   - Add your projects in `script.js`

---

## 📝 Customization

### Update Profile
```html
<!-- index.html - Hero section -->
<span class="title-name">Your Name</span>
```

### Add Projects
```javascript
// script.js
const projects = [
  {
    title: "Project Name",
    description: "Description here",
    category: "fullstack",
    tags: ["React", "Node.js"],
    link: "#"
  }
];
```

### Change Theme Colors
```css
/* styles.css */
:root {
  --accent: #22c55e;  /* Change to your preferred color */
}
```

---

## 📊 Analytics Setup

Replace the placeholder in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

---

## 🔗 Connect

- **GitHub**: [@abhishek-geeks](https://github.com/abhishek-geeks)
- **LinkedIn**: [abhishekgeeks](https://linkedin.com/in/abhishekgeeks)
- **Twitter**: [@abhishekgeeks](https://twitter.com/abhishekgeeks)
- **Email**: contact@abhishekgeeks.dev

---

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

**Made with 💚 by Abhishek Kumar**
