// Select the navigation bar
const navBar = document.querySelector('.nav-bar');

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
});
