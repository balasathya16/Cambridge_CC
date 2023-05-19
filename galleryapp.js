var images = ["/gallery_images/1.jpg", "/gallery_images/2.jpg", "/gallery_images/3.jpg"]; // Add more image URLs as needed
var currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  var currentImage = document.getElementById('currentImage');
  currentImage.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  var currentImage = document.getElementById('currentImage');
  currentImage.src = images[currentIndex];
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  var currentImage = document.getElementById('currentImage');
  currentImage.src = images[currentIndex];
}