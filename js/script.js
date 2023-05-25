/*När man klickar på logo så kommer menu länkarna upp(nav-links)*/ 
function toggleNav() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  }

 
  