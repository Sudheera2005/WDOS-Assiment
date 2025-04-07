///////////////////////// navigation
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
///////////////////////// navigation
var acc = document.getElementsByClassName("accordion");
var i;
////// freyuently ask question part

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
////// freyuently ask question part




////////////////// up coming 
function showSlides() {
  console.log("showSlides function triggered");  // Confirm function is running
  
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
  console.log(`Displaying slide ${slideIndex}`);  // Corrected
  console.log(slides, slideIndex);                // Corrected
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " up-main-active"; 

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




///////////////////// up coming 