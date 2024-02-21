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
  // -- Below is the 1st set of images that are rotating
  const images_1 = [
    './images/rotating_1.png',
    './images/rotating_2.png',
    './images/rotating_3.png',
  ];

  // -- Below is the 2nd set of images that are rotating
  const images_2 = [
    './images/rotating_4.png',
    './images/rotating_5.png',
    './images/rotating_6.png',
    './images/rotating_7.png',
  ];

  // -- Below is the 3rd set of images that are rotating
  const images_3 = [
    './images/white_rotating_1.png',
    './images/white_rotating_2.png',
    './images/white_rotating_3.png',
    './images/white_rotating_4.png',
    './images/white_rotating_5.png',
    './images/white_rotating_6.png',
  ];
  const images_4 = [
    './images/white_rotating_tall_1.png',
    './images/white_rotating_tall_2.png',
    './images/white_rotating_tall_3.png',
  ];

  let currentIndex_1 = 0; // Declaring currentIndex for 1st set
  let currentIndex_2 = 0; // Declaring currentIndex for 2nd set
  let currentIndex_3 = 0; // Declaring currentIndex for 2nd set
  let currentIndex_4 = 0; // Declaring currentIndex for 2nd set

  const imageElement_1 = document.getElementById('image1'); //Grabbing by ID and changing image1
  const imageElement_2 = document.getElementById('image10'); //Grabbing by ID and changing image10
  const imageElement_3 = document.getElementById('image15'); //Grabbing by ID and changing image15
  const imageElement_4 = document.getElementById('image19'); //Grabbing by ID and changing image1

  function changeImage_1() {
    imageElement_1.src = images_1[currentIndex_1]; // accessing the images array
    currentIndex_1 = (currentIndex_1 + 1) % images_1.length; //Counting + choosing the correct image
  }
  function changeImage_2() {
    imageElement_2.src = images_2[currentIndex_2]; // accessing the images array
    currentIndex_2 = (currentIndex_2 + 1) % images_2.length; //Counting + choosing the correct image
  }
  function changeImage_3() {
    imageElement_3.src = images_3[currentIndex_3]; // accessing the images array
    currentIndex_3 = (currentIndex_3 + 1) % images_3.length; //Counting + choosing the correct image
  }
  function changeImage_4() {
    imageElement_4.src = images_4[currentIndex_4]; // accessing the images array
    currentIndex_4 = (currentIndex_4 + 1) % images_4.length; //Counting + choosing the correct image
  }

  // Calling changeImage initially
  changeImage_1();
  changeImage_2();
  changeImage_3();
  changeImage_4();
  // Set up interval to change image every 1.5 seconds
  setInterval(changeImage_1, 1500);
  setInterval(changeImage_2, 1500);
  setInterval(changeImage_3, 1500);
  setInterval(changeImage_4, 1500);
});
