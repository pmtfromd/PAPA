// Fonction pour déclencher les animations au défilement
function handleScrollAnimation() {
    const elements = document.querySelectorAll(".fade-in-up, .zoom-in, .slide-in-left");
    const triggerBottom = window.innerHeight * 0.85;
  
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
  
      if (elementTop < triggerBottom) {
        element.classList.add("visible");
      }
    });
  }
  
  // Appel de la fonction lors du défilement
  window.addEventListener("scroll", handleScrollAnimation);
  window.addEventListener("load", handleScrollAnimation);
  