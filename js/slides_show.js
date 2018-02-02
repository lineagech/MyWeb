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

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
//   for (i = 0; i < dots.length; i++) {
//     polygons[i].className = polygons[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block"; 

  setTimeout(showSlides, 3000, slideIndex=slideIndex+1); // Change image every 2 seconds
//   dots[slideIndex-1].className += " active";
}