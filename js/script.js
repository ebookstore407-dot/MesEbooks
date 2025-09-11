document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const btn = card.querySelector('.btn');

    // Initialement : bouton caché
    if (btn) {
      btn.style.opacity = "0";
      btn.style.transform = "translateY(20px)";
      btn.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    }

    // Effet au survol
    card.addEventListener('mouseover', () => {
      const rotateX = (Math.random() - 0.5) * 5;
      const rotateY = (Math.random() - 0.5) * 5;
      card.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.25)';

      // Affichage progressif du bouton
      if (btn) {
        btn.style.opacity = "1";
        btn.style.transform = "translateY(0)";
      }
    });

    // Retour état initial
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
      card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';

      // Cacher à nouveau le bouton
      if (btn) {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(20px)";
      }
    });

    // Effet au clic
    card.addEventListener('mousedown', () => {
      card.style.transform += ' scale(0.98)';
    });

    card.addEventListener('mouseup', () => {
      card.style.transform = card.style.transform.replace(' scale(0.98)', '');
    });
  });
});
