// script.js

// Opcional: Adiciona scroll suave ao clicar nos links internos (âncoras)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Ignora links que são apenas '#'
        if (this.getAttribute('href').length > 1) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});