// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Single orchestrated reveal on load (not per-scroll spam)
window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');
  items.forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), 80 * i);
  });
});

// Reveal sections as they enter view (for content below the fold)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form — no backend, so just acknowledge submission
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = 'Thanks — this form is a placeholder, wire it up to a real endpoint or mailto link.';
  form.reset();
});
