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
