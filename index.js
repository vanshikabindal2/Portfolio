// AOS initialize
AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

// Elements
const html = document.documentElement;
const themeBtns = [
  document.getElementById('theme-toggle'),
  document.getElementById('theme-toggle-mobile')
];
const mobileMenuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const skillBars = document.querySelectorAll('.skill-bar');

// Toggle theme
function toggleTheme() {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
}

// Theme button click
themeBtns.forEach(btn => btn?.addEventListener('click', toggleTheme));

// Set initial theme
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

// Mobile menu toggle
mobileMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Skill bar animation
skillBars.forEach(bar => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) bar.style.width = bar.dataset.width;
    });
  }, { threshold: 0.5 });
  observer.observe(bar);
});

// Feather icons
feather.replace();

