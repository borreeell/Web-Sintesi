document.addEventListener("DOMContentLoaded", () => {
    // Desplaçament per els enllaços de navegacio
    const navLinks = document.querySelectorAll('.menu-items a');
    navLinks.forEach("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
})

// Resaltar l'element del menu actiu basat en la pagina actual
const currentPath = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPath)) {
        link.classList.add('active');
    }
})