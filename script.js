document.addEventListener('DOMContentLoaded', function () {

  // ── Sticky scroll ──────────────────────────────────────────────
  const screens = document.querySelectorAll('.screen');
  let prevScrollY = window.scrollY;

  function updateScreens() {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > prevScrollY;
    let zIndex = 1;

    screens.forEach((screen, index) => {
      if (screen.offsetTop <= currentScrollY + window.innerHeight) {
        screen.classList.add('sticky');
        screen.style.zIndex = scrollingDown ? index + 1 : zIndex++;
      } else {
        screen.classList.remove('sticky');
      }
    });

    prevScrollY = currentScrollY;
  }

  window.addEventListener('scroll', updateScreens, { passive: true });

  // ── Rotating images ────────────────────────────────────────────
  const rotators = [
    /*
    {
      id: 'image1',
      images: [
        './images/blue_rotating_1.png',
        './images/blue_rotating_2.png',
        './images/blue_rotating_3.png',
      ],
    },
    */
    {
      id: 'image10',
      images: [
        './images/rotating_4.png',
        './images/rotating_5.png',
        './images/rotating_6.png',
        './images/rotating_7.png',
      ],
    },
    {
      id: 'image15',
      images: [
        './images/white_rotating_1.png',
        './images/white_rotating_2.png',
        './images/white_rotating_3.png',
        './images/white_rotating_4.png',
        './images/white_rotating_5.png',
        './images/white_rotating_6.png',
      ],
    },
    {
      id: 'image19',
      images: [
        './images/white_rotating_tall_1.png',
        './images/white_rotating_tall_2.png',
        './images/white_rotating_tall_3.png',
      ],
    },
  ];

  rotators.forEach(({ id, images }) => {
    const el = document.getElementById(id);
    if (!el) return;

    let index = 0;

    // Preload images to prevent flicker
    images.forEach(src => { new Image().src = src; });

    function rotate() {
      el.src = images[index];
      index = (index + 1) % images.length;
    }

    rotate(); // set initial image immediately
    setInterval(rotate, 1500);
  });

});