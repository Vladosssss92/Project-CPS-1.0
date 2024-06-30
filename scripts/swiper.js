const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    501: {
      enabled: false,
    },
  },
});

// window.addEventListener("resize", function () {
//   if (screenWidth > 500) {
//     swiper.disable();
//   } else {
//     new Swiper(".swiper-container", {
//       slidesPerView: "auto",
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
//   }
// });
