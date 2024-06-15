// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll to sections
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Smooth scroll to "About Me" section on button click
    document.getElementById('aboutMeButton').addEventListener('click', () => {
        const aboutMeSection = document.getElementById('aboutMe');

        window.scrollTo({
            top: aboutMeSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Add animations to the "About Me" section
    const aboutMeSection = document.getElementById('aboutMe');
    const aboutMeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutMeSection.classList.add('animate');
            }
        });
    });

    aboutMeObserver.observe(aboutMeSection);
});
