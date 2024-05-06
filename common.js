
let slideIndex = 1;

//diapositive
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

// effetto ingrandimento
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Funzione per mostrare una diapositiva specifica
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Eventi dei bottoni del catalogo aggiornato
document.querySelector(".usa-button").addEventListener("click", function() {
  window.location.href = "pagina_stati_uniti.html";
});

document.querySelector(".germany-button").addEventListener("click", function() {
  window.location.href = "catalogo.html";
});

document.querySelector(".ussr-button").addEventListener("click", function() {
  window.location.href = "pagina_unione_sovietica.html";
});

