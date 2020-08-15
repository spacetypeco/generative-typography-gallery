document.addEventListener("DOMContentLoaded", function(event) {
  const images = document.getElementsByTagName("img");
  for (let image of images) {
    image.onload = fadeImg;
  }
  
  function fadeImg () {
    this.classList.add("fadeUp")
  }
});

