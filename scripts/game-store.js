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

