document.addEventListener('DOMContentLoaded', function () {
  const screens = document.querySelectorAll('.screen');

  let prevScrollY = window.scrollY;

  function updateScreens() {
    const currentScrollY = window.scrollY;

    // Check if scrolling down or up
    if (currentScrollY > prevScrollY) {
      // Scrolling down
      screens.forEach((screen, index) => {
        if (screen.offsetTop <= currentScrollY + window.innerHeight) {
          screen.classList.add('sticky');
          screen.style.zIndex = index + 1;
        } else {
          screen.classList.remove('sticky');
        }
      });
    } else {
      // Scrolling up
      let zIndex = 1; // Start with the lowest zIndex
      screens.forEach((screen, index) => {
        if (screen.offsetTop <= currentScrollY + window.innerHeight) {
          screen.classList.add('sticky');
          screen.style.zIndex = zIndex;
          zIndex++; // Increment zIndex for the next screen
        } else {
          screen.classList.remove('sticky');
        }
      });
    }

    prevScrollY = currentScrollY;
  }

  window.addEventListener('scroll', updateScreens);
});

//Rotating Images Event
document.addEventListener('DOMContentLoaded', function () {
  const images = [
    './images/rotating_1.png',
    './images/rotating_2.png',
    './images/rotating_3.png',
  ];

  let currentIndex = 0; // Declaring currentIndex
  const imageElement = document.getElementById('image1'); //Grabbing by ID and changing image1

  function changeImage() {
    imageElement.src = images[currentIndex]; // accessing the images array
    currentIndex = (currentIndex + 1) % images.length; //Counting + choosing the correct image
  }

  // Calling changeImage initially
  changeImage();

  // Set up interval to change image every 1.5 seconds
  setInterval(changeImage, 1500);
});
