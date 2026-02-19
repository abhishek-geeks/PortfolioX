// ===== MOBILE NAVIGATION =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  navOverlay.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMobileMenu);
navOverlay.addEventListener('click', toggleMobileMenu);

// Close menu when clicking a nav link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleMobileMenu();
    }
  });
});

// ===== TYPING ANIMATION =====
const text = "Full Stack Developer • Product Builder • AI Enthusiast • Freelancer";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}

// ===== SCROLL REVEAL ANIMATION =====
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger && !el.classList.contains('active')) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// ===== ANIMATED COUNTER =====
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat-number');
  const speed = 100;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const increment = target / speed;
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

// Trigger counters when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      heroObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) heroObserver.observe(heroSection);

// ===== PROJECTS DATA =====
const projects = [
  {
    name: "GenZ",
    subtitle: "Social Platform",
    description: "A modern social platform for Gen Z with real-time feeds, messaging, and content discovery. 5K+ active users.",
    category: "product",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "GeeksEstate",
    subtitle: "Real Estate Marketplace",
    description: "Client project: Advanced property marketplace with listings, virtual tours, and intelligent matching.",
    category: "client",
    tags: ["React", "Firebase", "Maps API", "Payments"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "InvoiceFlow",
    subtitle: "Business SaaS",
    description: "Invoice generation SaaS with templates, automated tracking, and PDF export. Used by 50+ businesses.",
    category: "product",
    tags: ["Next.js", "Stripe", "PostgreSQL", "PDF"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "AI Assistant API",
    subtitle: "LLM Integration",
    description: "Production-ready AI assistant API with memory, context awareness, and multi-language support.",
    category: "ai",
    tags: ["OpenAI", "LangChain", "FastAPI", "Redis"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "StartupX MVP",
    subtitle: "Client Project",
    description: "Built complete MVP for a funded startup in 6 weeks. From idea to production deployment.",
    category: "client",
    tags: ["Next.js", "TypeScript", "Prisma", "AWS"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "CloudDeploy",
    subtitle: "DevOps Toolkit",
    description: "Open-source CI/CD toolkit for automated deployments. 200+ GitHub stars.",
    category: "opensource",
    tags: ["Docker", "GitHub Actions", "Kubernetes", "Terraform"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  }
];

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
  const projectsGrid = document.getElementById('projects-grid');
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  projectsGrid.innerHTML = filtered.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      <div class="project-subtitle">${p.subtitle}</div>
      <p>${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.github}" target="_blank">GitHub</a>
        <a href="${p.demo}" target="_blank">Live Demo</a>
      </div>
    </div>
  `).join("");
}

// ===== PROJECT FILTERS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  });
});

// ===== SKILLS RENDERING =====
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  const skillCategories = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    "Backend": ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
    "AI/ML": ["OpenAI API", "LangChain", "TensorFlow", "PyTorch"],
    "DevOps": ["Docker", "AWS", "Kubernetes", "CI/CD", "Linux"],
    "Tools": ["Git", "Figma", "VS Code", "Postman"]
  };
  
  if (skillsContainer) {
    skillsContainer.innerHTML = Object.entries(skillCategories).map(([category, skills]) => `
      <div class="skill-category">
        <h4 class="skill-category-title">${category}</h4>
        <div class="skill-badges">
          ${skills.map(s => `<span class="skill-badge">${s}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
}

// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
      timestamp: new Date().toISOString()
    };

    // Store in localStorage (for demonstration)
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Show success message
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
    
    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.remove('success');
    }, 5000);

  } catch (error) {
    formMessage.classList.remove('success');
    formMessage.classList.add('error');
    formMessage.textContent = '✗ Error sending message. Please try again.';
    console.error('Form error:', error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== INITIALIZE ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  type();
  renderSkills();
  renderProjects('all');
  revealOnScroll();
  
  // Add scroll event listener for reveal
  window.addEventListener('scroll', revealOnScroll);
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll event
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    revealOnScroll();
  }, 100);
});
