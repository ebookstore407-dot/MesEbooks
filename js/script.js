document.addEventListener('DOMContentLoaded', () => {
  // Configuration des animations
  const config = {
    hoverScale: 1.05,
    maxRotate: 8,
    shadowColor: '0, 78, 146', // Bleu assorti à votre thème
    animationDuration: 0.4,
    buttonDelay: 0.15
  };

  // Fonction pour créer une animation fluide
  const animate = (element, properties) => {
    Object.entries(properties).forEach(([property, value]) => {
      element.style.transition = `all ${config.animationDuration}s cubic-bezier(0.4, 0, 0.2, 1)`;
      element.style[property] = value;
    });
  };

  // Fonction pour suivre la position de la souris
  const getMousePosition = (event, card) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {
      x: (x / rect.width) * 2 - 1,
      y: (y / rect.height) * 2 - 1
    };
  };

  // Initialisation des cartes
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const btn = card.querySelector('.btn');
    const title = card.querySelector('h3');
    const image = card.querySelector('img');

    // État initial
    if (btn) {
      animate(btn, {
        opacity: '0',
        transform: 'translateY(20px)'
      });
    }

    // Animation de l'image au chargement
    if (image) {
      image.style.transition = 'transform 0.5s ease';
      image.addEventListener('load', () => {
        image.style.transform = 'scale(1)';
      });
    }

    // Effet de parallaxe au survol
    card.addEventListener('mousemove', (e) => {
      const { x, y } = getMousePosition(e, card);
      const rotateX = y * config.maxRotate;
      const rotateY = -x * config.maxRotate;

      animate(card, {
        transform: `scale(${config.hoverScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        boxShadow: `
          0 15px 30px rgba(${config.shadowColor}, 0.2),
          0 5px 15px rgba(${config.shadowColor}, 0.1)
        `
      });

      // Effet sur le titre
      if (title) {
        animate(title, {
          transform: `translateZ(20px) translateX(${x * 5}px)`,
          textShadow: `2px 2px 4px rgba(0, 0, 0, 0.1)`
        });
      }

      // Animation du bouton
      if (btn) {
        setTimeout(() => {
          animate(btn, {
            opacity: '1',
            transform: `translateY(0) translateX(${x * 3}px)`,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          });
        }, config.buttonDelay * 1000);
      }
    });

    // Retour à l'état initial
    card.addEventListener('mouseleave', () => {
      animate(card, {
        transform: 'scale(1) rotateX(0) rotateY(0)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
      });

      if (title) {
        animate(title, {
          transform: 'translateZ(0) translateX(0)',
          textShadow: 'none'
        });
      }

      if (btn) {
        animate(btn, {
          opacity: '0',
          transform: 'translateY(20px) translateX(0)',
          boxShadow: 'none'
        });
      }
    });

    // Effet au clic
    card.addEventListener('mousedown', () => {
      animate(card, {
        transform: 'scale(0.98) rotateX(0) rotateY(0)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      });
    });

    card.addEventListener('mouseup', () => {
      animate(card, {
        transform: 'scale(1) rotateX(0) rotateY(0)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
      });
    });

    // Effet de focus pour l'accessibilité
    card.addEventListener('focus', () => {
      animate(card, {
        transform: 'scale(1.02)',
        boxShadow: `0 0 0 3px rgba(${config.shadowColor}, 0.3)`
      });
    });

    card.addEventListener('blur', () => {
      animate(card, {
        transform: 'scale(1)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
      });
    });
  });
});
