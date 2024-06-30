const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
