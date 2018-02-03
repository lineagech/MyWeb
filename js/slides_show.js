var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("wrapper");
  var polygons = document.getElementsByClassName("polygon");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(" animated fadeOutLeft", "");
  }
  for (i = 0; i < polygons.length; i++) {
    polygons[i].className = polygons[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  polygons[slideIndex - 1].className += " active";

  setTimeout(fadeoutleft, 2000, slideIndex);
  setTimeout(showSlides, 3000, slideIndex = slideIndex + 1); // Change image every 2 seconds

}

function fadeoutleft(n) {
  var slides = document.getElementsByClassName("wrapper");

  slides[n - 1].className += " animated fadeOutLeft";

}