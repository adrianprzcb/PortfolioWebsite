document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    const targetHref = link.getAttribute('href');

    // Check if the link is internal (starts with "#")
    if (targetHref.startsWith('#')) {
      event.preventDefault(); // Prevent default link behavior
      const target = document.querySelector(targetHref);

      if (target) {
        const offset = 100; // Adjust this value to set how much space you want above the title
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        console.error(`No element found with ID: ${targetHref}`);
      }
    } else {
      // Allow external links (e.g., "index.html#about") to navigate normally
      return;
    }
  });
});



// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement; // Select the <html> tag

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
if (savedTheme === 'light') {
  root.classList.remove('dark'); // Light theme
  themeToggle.textContent = '🌙'; // Moon icon for light mode
} else {
  root.classList.add('dark'); // Dark theme
  themeToggle.textContent = '☀️'; // Sun icon for dark mode
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  if (root.classList.contains('dark')) {
    root.classList.remove('dark'); // Switch to light theme
    themeToggle.textContent = '🌙'; // Moon icon for light mode
    localStorage.setItem('theme', 'light'); // Save preference
  } else {
    root.classList.add('dark'); // Switch to dark theme
    themeToggle.textContent = '☀️'; // Sun icon for dark mode
    localStorage.setItem('theme', 'dark'); // Save preference
  }
});
