// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  themeToggle.textContent = '🌙'; // Set to moon icon for light mode
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLightTheme = body.classList.contains('light-theme');
  themeToggle.textContent = isLightTheme ? '🌙' : '☀️'; // Switch icons

  // Save theme choice to localStorage
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});
