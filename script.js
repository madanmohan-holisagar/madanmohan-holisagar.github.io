// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for your message! I will get back to you soon.');
    this.reset();
});
