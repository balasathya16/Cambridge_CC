// Add an "active" class to the nav links container when the menu button is clicked
var menuBtn = document.querySelector(".menu-btn");
var navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].classList.add("active");
  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


