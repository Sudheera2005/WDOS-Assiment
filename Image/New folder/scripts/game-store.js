// navigation
function openNav() {
    document.getElementById("navigation-mySidenav").style.width = "250px";
    document.getElementById("navigation-icon").style.marginLeft = "250px";
    document.querySelector(".logo-text").style.marginLeft = "250px"; // Move the logo
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
function closeNav() {
    document.getElementById("navigation-mySidenav").style.width = "0";
    document.getElementById("navigation-icon").style.marginLeft= "0";
    document.querySelector(".logo-text").style.marginLeft = "0"; // Reset logo position
    document.body.style.backgroundColor = "#0D0D0D";
}
// navigation


// Game Page Slideshow
let gameSlideIndex = 1;
showGameSlides(gameSlideIndex);

function plusGameSlides(n) {
  showGameSlides(gameSlideIndex += n);
}

function currentGameSlide(n) {
  showGameSlides(gameSlideIndex = n);
}

function showGameSlides(n) {
  let i;
  let slides = document.getElementsByClassName("game-main-mySlides");
  let dots = document.getElementsByClassName("game-main-demo");
  let captionText = document.getElementById("game-main-caption");
  if (n > slides.length) { gameSlideIndex = 1; }
  if (n < 1) { gameSlideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" game-main-active", "");
  }
  slides[gameSlideIndex - 1].style.display = "block";
  dots[gameSlideIndex - 1].className += " game-main-active";
  captionText.innerHTML = dots[gameSlideIndex - 1].alt;
}

// Game Page Slideshow


// up coming 
let slideIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});

function showSlides() {
  console.log("showSlides function triggered");  // Debugging: Confirm function is running
  
  let i;
  let slides = document.getElementsByClassName("up-main-mySlides");
  let dots = document.getElementsByClassName("up-main-dot");

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;  // Increment the slide index
  if (slideIndex > slides.length) {
    slideIndex = 1;  // Reset to first slide if beyond range
  }

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" up-main-active", "");
  }

  // Show the current slide and add active class to the corresponding dot
  console.log(`Displaying slide ${slideIndex}`);  // Debugging: Show which slide is displayed
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " up-main-active"; 

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// up coming 