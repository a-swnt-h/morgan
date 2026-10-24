/**
 * ==========================================================================
 * ALEX MORGAN - PORTFOLIO INTERACTION SCRIPT (script.js)
 * Features:
 *  - Responsive Mobile Navigation Toggle
 *  - Header Blur & Shrink on Scroll
 *  - Active Navigation Highlight (ScrollSpy)
 *  - Scroll-triggered Reveal Animations & Skill Bars
 *  - Form Validation & Interactive Feedback Simulation
 *  - Back-to-Top Button
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DOM Elements Selection
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');
  const contactForm = document.getElementById('contact-form');
  const currentYearSpan = document.getElementById('current-year');
  const revealItems = document.querySelectorAll('.reveal-item');
  const skillBars = document.querySelectorAll('.progress-bar-fill');

  // Dynamic Year in Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle & Accessibility
  // --------------------------------------------------------------------------
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Header Scroll Effect & Back-to-Top Button Visibility
  // --------------------------------------------------------------------------
  const handleScrollEffects = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header styling on scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back-to-top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects(); // Initial check on page load

  // Smooth scroll back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. Active Navigation Link on Scroll (ScrollSpy)
  // --------------------------------------------------------------------------
  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = header ? header.offsetHeight : 80;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight - 120;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 5. Scroll Reveal Animations & Skill Bars (IntersectionObserver)
  // --------------------------------------------------------------------------
  if ('IntersectionObserver' in window) {
    // Observer for fade-in & slide-up elements
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });

    // Observer to animate Skill Progress Bars when Skills section is in view
    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillBars.forEach((bar) => {
            bar.classList.add('animated');
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsObserver.observe(skillsSection);
    }
  } else {
    // Fallback for older browsers without IntersectionObserver
    revealItems.forEach((item) => item.classList.add('revealed'));
    skillBars.forEach((bar) => bar.classList.add('animated'));
  }

  // --------------------------------------------------------------------------
  // 6. Contact Form Validation & Submission Handling
  // --------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('btn-submit-form');
    const formAlert = document.getElementById('form-alert');

    // Email validation helper regex
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    };

    // Helper to display error state
    const setError = (input, hasError) => {
      const group = input.closest('.form-group');
      if (group) {
        group.classList.toggle('has-error', hasError);
      }
    };

    // Remove error class on real-time typing
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          setError(input, false);
          if (formAlert) {
            formAlert.className = 'form-alert';
            formAlert.textContent = '';
          }
        });
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasErrors = false;

      // Validate Name
      if (!nameInput.value.trim()) {
        setError(nameInput, true);
        hasErrors = true;
      } else {
        setError(nameInput, false);
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        setError(emailInput, true);
        hasErrors = true;
      } else {
        setError(emailInput, false);
      }

      // Validate Message (minimum 10 characters)
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setError(messageInput, true);
        hasErrors = true;
      } else {
        setError(messageInput, false);
      }

      if (hasErrors) {
        if (formAlert) {
          formAlert.className = 'form-alert error';
          formAlert.textContent = 'Please fill out all fields correctly before submitting.';
        }
        return;
      }

      // If valid: simulate sending state
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
      }

      // Simulated AJAX delay
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        }

        // Display Success Message
        if (formAlert) {
          formAlert.className = 'form-alert success';
          formAlert.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been sent successfully. I will get back to you shortly.`;
        }

        // Reset form inputs
        contactForm.reset();

        // Clear success message after 7 seconds
        setTimeout(() => {
          if (formAlert) {
            formAlert.className = 'form-alert';
            formAlert.textContent = '';
          }
        }, 7000);
      }, 1200);
    });
  }
});
