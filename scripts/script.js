const buttonShowText = document.querySelector(".button-more-text"),
  buttonHiddenText = document.querySelector(".button-less-text"),
  textAbout = document.querySelectorAll(".section-about__text"),
  buttonShowBrands = document.querySelector(".button-more-brands"),
  buttonHiddenBrands = document.querySelector(".button-less-brands"),
  brandsCard = document.querySelectorAll(".slider-brands__item"),
  buttonShowTypeRem = document.querySelector(".button-more-type-rem"),
  buttonHiddenTypeRem = document.querySelector(".button-less-type-rem"),
  typeRemCard = document.querySelectorAll(".slider-appliances__item"),
  buttonShowMenu = document.querySelector(".nav-list__item--link-menu"),
  buttonCloseMenu = document.querySelector(".menu__header--button-close"),
  asideMenu = document.querySelector(".menu"),
  mainDocument = document.querySelector(".main"),
  buttonsCall = document.querySelectorAll(".button-call"),
  buttonsMessage = document.querySelectorAll(".button-message"),
  feedback = document.querySelector(".feedback"),
  orderCall = document.querySelector(".order-call"),
  buttonsCloseModal = document.querySelectorAll(".button-close-modal");

// функция показать текст
buttonShowText.addEventListener("click", function () {
  for (const item of textAbout) {
    item.classList.remove("about-tablet");
    item.classList.remove("about-desktop");
    item.classList.remove("about-all");
  }
  buttonHiddenText.classList.remove("button-hidden");
  buttonShowText.classList.add("button-hidden");
});

// функция скрыть текст
buttonHiddenText.addEventListener("click", function () {
  for (const item of textAbout) {
    if (item.classList.contains("tablet")) {
      item.classList.add("about-tablet");
    }
    if (item.classList.contains("desktop")) {
      item.classList.add("about-desktop");
    }
    if (item.classList.contains("desktop-all")) {
      item.classList.add("about-all");
    }
  }
  buttonHiddenText.classList.add("button-hidden");
  buttonShowText.classList.remove("button-hidden");
});

// функция показать карточки брендов
buttonShowBrands.addEventListener("click", function () {
  for (const item of brandsCard) {
    item.classList.remove("hidden-tablet");
    item.classList.remove("hidden-desktop");
  }
  buttonHiddenBrands.classList.remove("button-hidden");
  buttonShowBrands.classList.add("button-hidden");
});

// функция скрыть карточки брендов
buttonHiddenBrands.addEventListener("click", function () {
  for (const item of brandsCard) {
    if (item.classList.contains("tablet")) {
      item.classList.add("hidden-tablet");
    }
    if (item.classList.contains("desktop")) {
      item.classList.add("hidden-desktop");
    }
  }
  buttonHiddenBrands.classList.add("button-hidden");
  buttonShowBrands.classList.remove("button-hidden");
});

// функция показать карточки тип ремонта
buttonShowTypeRem.addEventListener("click", function () {
  for (const item of typeRemCard) {
    item.classList.remove("hidden-tablet");
    item.classList.remove("hidden-desktop");
  }
  buttonHiddenTypeRem.classList.remove("button-hidden");
  buttonShowTypeRem.classList.add("button-hidden");
});

// функция скрыть карточки тип ремонта
buttonHiddenTypeRem.addEventListener("click", function () {
  for (const item of typeRemCard) {
    if (item.classList.contains("tablet")) {
      item.classList.add("hidden-tablet");
    }
    if (item.classList.contains("desktop")) {
      item.classList.add("hidden-desktop");
    }
  }
  buttonHiddenTypeRem.classList.add("button-hidden");
  buttonShowTypeRem.classList.remove("button-hidden");
});

// функция открытия меню для мобилок и планшетов
buttonShowMenu.addEventListener("click", function () {
  // asideMenu.classList.remove("menu-hidden");
  mainDocument.classList.add("main-opacity");
  asideMenu.classList.add("menu-animation-open");
  asideMenu.classList.remove("menu-animation-close");
});

// функция для закрытия меню

function closeMenu() {
  // asideMenu.classList.add("menu-hidden");
  mainDocument.classList.remove("main-opacity");
  asideMenu.classList.remove("menu-animation-open");
  asideMenu.classList.add("menu-animation-close");
}

// закрытие меню по клику
buttonCloseMenu.addEventListener("click", closeMenu);

// закрытие меню по клавише esc
document.addEventListener("keydown", function (event) {
  if (event.code == "Escape") {
    closeMenu();
  }
});

// функция открытия окна, заказать звонок
for (const buttonCall of buttonsCall) {
  buttonCall.addEventListener("click", function () {
    orderCall.classList.remove("order-call-animation-close");
    orderCall.classList.add("order-call-animation-open");
    asideMenu.classList.add("menu-opacity");
    mainDocument.classList.add("main-opacity");
  });
}

// функция открытия окна обратной связи
for (const buttonMessage of buttonsMessage) {
  buttonMessage.addEventListener("click", function () {
    feedback.classList.add("feedback-animation-open");
    feedback.classList.remove("feedback-animation-close");
    asideMenu.classList.add("menu-opacity");
    mainDocument.classList.add("main-opacity");
  });
}

// функция закрытия модальных окон
function closeModal() {
  asideMenu.classList.remove("menu-opacity");
  feedback.classList.remove("feedback-animation-open");
  feedback.classList.add("feedback-animation-close");
  orderCall.classList.remove("order-call-animation-open");
  orderCall.classList.add("order-call-animation-close");
  mainDocument.classList.remove("main-opacity");
}

for (const buttonCloseModal of buttonsCloseModal) {
  buttonCloseModal.addEventListener("click", closeModal);
  console.log(!feedback.classList.contains("feedback-hidden"));
}

document.addEventListener("keydown", function (event) {
  if (event.code == "Escape") {
    closeModal();
  }
});

// слайдер
// for (let i = 0; i < dotsSlider.length; i++) {
//   dotsSlider[i].addEventListener("click", function () {
//     sliderList.scrollLeft =
//       (+widthElemSlider.replace("px", "") + +gapElemsSlider.replace("px", "")) *
//       i;
//     for (let elem of dotsSlider) {
//       elem.classList.remove("active");
//     }
//     dotsSlider[i].classList.add("active");
//   });
// }
