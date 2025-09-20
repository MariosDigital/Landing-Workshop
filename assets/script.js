// JavaScript para el carousel y menú móvil
document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
  
  // Carousel
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slides[slideIndex-1]) {
      slides[slideIndex-1].style.display = "block";
    }
    setTimeout(showSlides, 5000); // Cambia imagen cada 5 segundos
  }
});