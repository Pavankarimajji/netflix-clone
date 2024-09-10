// Function to add or remove the 'scrolled' class based on scroll position
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Change this value based on when you want to trigger the color change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);
