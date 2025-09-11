document.addEventListener("DOMContentLoaded", () => {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");
  let index = 0;

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });
    slides[n].classList.add("active");
    dots[n].classList.add("active");
    index = n;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Auto défilement toutes les 5s
  setInterval(nextSlide, 5000);

  // Vérifie que les boutons existent avant d'ajouter les events
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Navigation par points
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  // Afficher la première slide
  showSlide(index);
});
