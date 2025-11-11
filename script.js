// ===================================
// Navbar Scroll Effect
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link
// ===================================
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===================================
// Contact Form Handling
// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Show success message (you can customize this)
        alert('Благодаря за съобщението! Ще се свържа с теб скоро.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    }
});

// ===================================
// Service Card Click Handler
// ===================================
document.querySelectorAll('.service-card-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const serviceName = this.getAttribute('data-service');
        const subjectField = document.getElementById('subject');
        
        // Pre-fill the subject field with the service name
        if (subjectField && serviceName) {
            setTimeout(() => {
                subjectField.value = `Консултация: ${serviceName}`;
                subjectField.focus();
            }, 500);
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .blog-card, .about-text, .about-image');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Stats Counter Animation
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(start) + '+';
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const value = parseInt(stat.textContent);
                animateCounter(stat, value);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// Parallax Effect for Services Section
// ===================================
window.addEventListener('scroll', function() {
    const servicesBg = document.querySelector('.services::before');
    const servicesSection = document.querySelector('.services');
    
    if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const sectionTop = servicesSection.offsetTop;
        const parallaxSpeed = 0.3;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (scrolled - sectionTop) * parallaxSpeed;
            servicesSection.style.backgroundPosition = `center ${offset}px`;
        }
    }
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-text p');
if (footerYear) {
    footerYear.innerHTML = `&copy; ${currentYear} Anelia Takova. All rights reserved.`;
}

// ===================================
// Prevent Default on Empty Links
// ===================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    });
});
