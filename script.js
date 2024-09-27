// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav .nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
// Animation des compétences lors du défilement
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            bar.style.width = bar.style.width;
        });
    }
});
