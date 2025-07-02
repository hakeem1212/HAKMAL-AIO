import "./style.css";

// for swiper pagination

/**============= swipper jss================= */
const swiper = new Swiper(".wrapper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // responsive pour les petit ecran et grande ecran
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    727: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1397: {
      slidesPerView: 4,
    },
  },
});

// fin for swiper pagination
