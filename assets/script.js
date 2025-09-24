// JavaScript para el carousel y menú móvil
document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Cerrar menú al hacer clic en un enlace
  const navLinksArray = document.querySelectorAll('.nav-links a');
  if (navLinksArray.length > 0) {
    navLinksArray.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks) {
          navLinks.classList.remove('active');
        }
      });
    });
  }
  
  // Carousel
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let slides = document.getElementsByClassName("slides");
    
    // Ocultar todas las slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Avanzar índice
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    // Mostrar slide actual
    if (slides.length > 0 && slides[slideIndex-1]) {
      slides[slideIndex-1].style.display = "block";
    }
    
    // Cambiar cada 5 segundos
    setTimeout(showSlides, 5000);
  }
});