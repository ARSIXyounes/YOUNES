document.addEventListener('DOMContentLoaded', function () {
  // Animation de texte
  const textElement = document.querySelector('.animated-text .text');
  if (textElement) {
    const words = ["Younes Elanbri"];
    if (words.length > 0) {
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
          textElement.textContent = currentWord.slice(0, charIndex + 1);
          charIndex++;

          if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
          } else {
            setTimeout(type, 100);
          }
        } else {
          textElement.textContent = currentWord.slice(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
          } else {
            setTimeout(type, 50);
          }
        }
      }

      type();
    }
  }

  // Smooth scrolling pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error("La cible du lien d'ancrage n'existe pas :", this.getAttribute('href'));
      }
    });
  });

  // Bouton "Voir plus de projets"
  const voirPlusButton = document.getElementById('voir-plus');
  if (voirPlusButton) {
    const additionalProjects = document.querySelectorAll('.additional-project');
    if (additionalProjects.length > 0) {
      voirPlusButton.addEventListener('click', function () {
        additionalProjects.forEach((project, index) => {
          setTimeout(() => {
            project.style.display = 'block';
            project.classList.add('visible');
          }, index * 700);
        });
        this.style.display = 'none';
      });
    } else {
      voirPlusButton.style.display = 'none';
    }
  }
});