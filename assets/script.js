document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let slides = document.getElementsByClassName("slides");
    
    // Ocultar todas las slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Avanzar al siguiente slide
    slideIndex++;
    
    // Reiniciar si llegamos al final
    if (slideIndex > slides.length) { 
      slideIndex = 1; 
    }
    
    // Mostrar la slide actual
    if (slides.length > 0) {
      slides[slideIndex-1].style.display = "block";
    }
    
    // Cambiar slide cada 4 segundos
    setTimeout(showSlides, 4000);
  }
});