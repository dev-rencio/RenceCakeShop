// Get the toggle button and nav items
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// to the toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'show' class to show/hide the nav items
  navLinks.classList.toggle('show');
});
