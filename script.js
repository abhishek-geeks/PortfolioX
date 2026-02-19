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
const text = "Full Stack Developer • DevOps Engineer • AI Enthusiast";
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

// ===== PROJECTS DATA =====
const projects = [
  {
    name: "GenZ",
    subtitle: "Community & Content Platform",
    description: "A modern social platform designed for Gen Z users with real-time feeds, messaging, and content discovery features.",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "CatererGuy",
    subtitle: "Real Estate Platform",
    description: "GeeksEstate - Advanced real estate marketplace with property listings, virtual tours, and intelligent matching.",
    category: "fullstack",
    tags: ["React", "Firebase", "Maps API", "Payment Integration"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "Invoice Generator",
    subtitle: "Business Automation Tool",
    description: "Professional invoice generation system with customizable templates, automated tracking, and PDF export.",
    category: "fullstack",
    tags: ["React", "Express", "jsPDF", "MongoDB"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "AI Chat Assistant",
    subtitle: "Conversational Intelligence",
    description: "Conversational AI using modern LLM APIs with memory, context awareness, and multi-language support.",
    category: "ai",
    tags: ["OpenAI", "Express", "Socket.io", "NLP"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "Neural Visualizer",
    subtitle: "ML Visualization Tool",
    description: "Interactive neural-network visualization tool for understanding and debugging machine learning models.",
    category: "ai",
    tags: ["TensorFlow", "React", "D3.js", "Python"],
    github: "https://github.com/abhishekgeeks",
    demo: "#"
  },
  {
    name: "DevOps CI/CD Pipeline",
    subtitle: "Automation & Deployment",
    description: "End-to-end automated pipeline using GitHub Actions, Docker, and Kubernetes for seamless deployments.",
    category: "devops",
    tags: ["Docker", "GitHub Actions", "Kubernetes", "AWS"],
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
  const skills = ["Java", "Python", "JavaScript", "AWS", "Docker", "Linux", "MySQL", "Git", "DevOps", "AI/ML", "System Design", "REST APIs"];
  
  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(s => 
      `<span class="skill-badge">${s}</span>`
    ).join("");
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
