// navigation
function openNav() {
    document.getElementById("navigation-mySidenav").style.width = "250px";
    document.getElementById("navigation-icon").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
function closeNav() {
    document.getElementById("navigation-mySidenav").style.width = "0";
    document.getElementById("navigation-icon").style.marginLeft= "0";
    document.body.style.backgroundColor = "#0d0d0d";
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("game-main-mySlides");
  let dots = document.getElementsByClassName("game-main-demo");
  let captionText = document.getElementById("game-main-caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" game-main-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " game-main-active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}