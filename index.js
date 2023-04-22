window.onload = function() {
  var imageContainer = document.getElementById("image-container");
  var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg"
  ];
  var currentImageIndex = 0;
  var currentImage = document.getElementById("image" + (currentImageIndex + 1));
  var nextImageIndex = 1;
  var nextImage = document.getElementById("image" + (nextImageIndex + 1));
  var animationDuration = 4000;

  function fadeOut(image, duration, callback) {
    var opacity = 1;
    var interval = setInterval(function() {
      opacity -= 1 / duration * 10;
      if (opacity < 0) {
        opacity = 0;
        clearInterval(interval);
        if (callback) {
          callback();
        }
      }
      image.style.opacity = opacity;
    }, 10);
  }

  function fadeIn(image, duration, callback) {
    var opacity = 0;
    var interval = setInterval(function() {
      opacity += 1 / duration * 10;
      if (opacity > 1) {
        opacity = 1;
        clearInterval(interval);
        if (callback) {
          callback();
        }
      }
      image.style.opacity = opacity;
    }, 10);
  }

  function transitionImages() {
    fadeOut(currentImage, animationDuration / 2, function() {
      currentImage.style.display = "none";
      nextImage.style.display = "block";
      nextImage.style.opacity = 0;
      fadeIn(nextImage, animationDuration / 2, function() {
        currentImageIndex = nextImageIndex;
        nextImageIndex = (nextImageIndex + 1) % images.length;
        currentImage = document.getElementById("image" + (currentImageIndex + 1));
        nextImage = document.getElementById("image" + (nextImageIndex + 1));
        setTimeout(transitionImages, 4000);
      });
    });
  }

  currentImage.style.display = "block";
  currentImage.style.opacity = 1;
  setTimeout(transitionImages, 2500);
}

function fadeOut(element, duration, callback) {
  var opacity = 1;
  var interval = setInterval(function() {
      opacity -= 1 / duration * 10;
      if (opacity < 0) {
          opacity = 0;
          clearInterval(interval);
          if (callback) {
              callback();
          }
      }
      element.style.opacity = opacity;
  }, 10);
}

function fadeIn(element, duration, callback) {
  var opacity = 0;
  var interval = setInterval(function() {
      opacity += 1 / duration * 10;
      if (opacity > 1) {
          opacity = 1;
          clearInterval(interval);
          if (callback) {
              callback();
          }
      }
      element.style.opacity = opacity;
  }, 10);
}



/* Set the width of the side navigation to 250px */
function openNav() {
document.getElementById("mySidenav").style.width = "70%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}