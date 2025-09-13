document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Configuration du viewport
    function adjustViewport() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // Ajuster la taille du contenu en fonction de la hauteur
        slides.forEach(slide => {
            const content = slide.querySelector('.slide-content');
            if (content) {
                // Ajuster la taille du texte en fonction de la largeur de l'écran
                if (window.innerWidth <= 480) {
                    content.style.fontSize = '14px';
                    content.querySelector('h2').style.fontSize = '1.5rem';
                    content.querySelector('p').style.fontSize = '1rem';
                } else if (window.innerWidth <= 768) {
                    content.style.fontSize = '16px';
                    content.querySelector('h2').style.fontSize = '2rem';
                    content.querySelector('p').style.fontSize = '1.1rem';
                } else {
                    content.style.fontSize = '18px';
                    content.querySelector('h2').style.fontSize = '2.5rem';
                    content.querySelector('p').style.fontSize = '1.2rem';
                }

                // Ajuster la hauteur maximale du contenu
                const maxHeight = window.innerHeight * 0.7;
                content.style.maxHeight = `${maxHeight}px`;
            }
        });
    }

    // Fonction pour afficher une slide
    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (dots[i]) dots[i].classList.remove("active");

            // Animation de sortie
            slide.style.transform = i < n ? 'translateX(-100%)' : 'translateX(100%)';
            slide.style.opacity = '0';
        });

        // Animation d'entrée
        slides[n].classList.add("active");
        if (dots[n]) dots[n].classList.add("active");
        slides[n].style.transform = 'translateX(0)';
        slides[n].style.opacity = '1';

        index = n;

        // Animer le contenu
        const activeContent = slides[n].querySelector('.slide-content');
        if (activeContent) {
            activeContent.style.transform = 'translateY(0)';
            activeContent.style.opacity = '1';
        }
    }

    // Navigation
    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    // Gestionnaires d'événements tactiles
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const touchDiff = touchStartX - touchEndX;
        if (Math.abs(touchDiff) > 50) {
            if (touchDiff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Auto défilement avec pause au survol
    let slideInterval = setInterval(nextSlide, 5000);

    function pauseSlider() {
        clearInterval(slideInterval);
    }

    function resumeSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Initialisation
    function init() {
        // Appliquer les ajustements de viewport
        adjustViewport();

        // Événements des boutons
        if (nextBtn) nextBtn.addEventListener("click", () => {
            pauseSlider();
            nextSlide();
            resumeSlider();
        });

        if (prevBtn) prevBtn.addEventListener("click", () => {
            pauseSlider();
            prevSlide();
            resumeSlider();
        });

        // Navigation par points
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                pauseSlider();
                showSlide(i);
                resumeSlider();
            });
        });

        // Événements tactiles
        slides.forEach(slide => {
            slide.addEventListener('touchstart', handleTouchStart);
            slide.addEventListener('touchmove', handleTouchMove);
            slide.addEventListener('touchend', handleTouchEnd);
        });

        // Pause au survol
        slides.forEach(slide => {
            slide.addEventListener('mouseenter', pauseSlider);
            slide.addEventListener('mouseleave', resumeSlider);
        });

        // Ajuster le viewport lors du redimensionnement
        window.addEventListener('resize', adjustViewport);
        window.addEventListener('orientationchange', adjustViewport);

        // Afficher la première slide
        showSlide(index);
    }

    // Lancer l'initialisation
    init();
});
