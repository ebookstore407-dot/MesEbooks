document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Survol de la carte
    card.addEventListener('mouseover', () => {
      const rotateX = (Math.random() - 0.5) * 5; // rotation aléatoire X
      const rotateY = (Math.random() - 0.5) * 5; // rotation aléatoire Y
      card.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.25)';
    });

    // Quand la souris quitte la carte
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
      card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });

    // Effet de clic léger
    card.addEventListener('mousedown', () => {
      card.style.transform += ' scale(0.98)';
    });

    card.addEventListener('mouseup', () => {
      card.style.transform = card.style.transform.replace(' scale(0.98)', '');
    });
  });
});
