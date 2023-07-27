// Button Swipper for Popular Destination Section
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container-1", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 3.55,
      },
    },
  });
});

// Button Swipper for Event Section
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container-2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2.35,
      },
    },
  });
});
