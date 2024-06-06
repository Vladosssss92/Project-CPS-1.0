const buttonShow = document.querySelector(".show-all-brand"),
  buttonHidden = document.querySelector(".hidden-all-brand"),
  sliderItems = document.querySelectorAll(".slider-list-item"),
  classRemoveTablet = document.querySelectorAll(".tablet"),
  classRemoveDesktop = document.querySelectorAll(".desktop"),
  dotsSlider = document.querySelectorAll(".dots-list-item"),
  sliderList = document.querySelector(".slider-list-brands"),
  widthElemSlider = getComputedStyle(sliderItems[1]).width,
  gapElemsSlider = getComputedStyle(sliderList).gap;

// функция показать
buttonShow.addEventListener("click", function () {
  for (const item of sliderItems) {
    item.classList.remove("hidden-tablet");
    item.classList.remove("hidden-desktop");
  }
  buttonHidden.classList.remove("button-hidden");
  buttonShow.classList.add("button-hidden");
});

// функция скрыть
buttonHidden.addEventListener("click", function () {
  for (const tablet of classRemoveTablet) {
    tablet.classList.add("hidden-tablet");
  }
  for (const desktop of classRemoveDesktop) {
    desktop.classList.add("hidden-desktop");
  }
  buttonHidden.classList.add("button-hidden");
  buttonShow.classList.remove("button-hidden");
});

// слайдер
for (let i = 0; i < dotsSlider.length; i++) {
  dotsSlider[i].addEventListener("click", function () {
    sliderList.scrollLeft =
      (+widthElemSlider.replace("px", "") + +gapElemsSlider.replace("px", "")) *
      i;
    for (let elem of dotsSlider) {
      elem.classList.remove("active");
    }
    dotsSlider[i].classList.add("active");
  });
}
