/**
 * Interactive Script for Portfolio
 * Smooth scroll & Mobile menu toggle
 */
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
    });

    // Close menu when clicking any nav link
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
      });
    });
  }
});

