const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
})


let tabsButton = document.querySelectorAll('.work__btn');
let tabsItem = document.querySelectorAll('.work__block');

tabsButton.forEach(function (elBtn) {
  elBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsButton.forEach(function (btn) { btn.classList.remove('work__btn--active') });
    e.currentTarget.classList.add('work__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('work__block--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__block--active');
  });
});


$('.accordion').accordion();
$(".accordion").accordion({
  collapsible: true
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');


burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active')

    menu.classList.remove('header__nav--active')

    document.body.classList.remove('stop-scroll')
  })

})


const searchBtn = document.querySelector(".search__btn");
const cancelBtn = document.querySelector(".cancel__btn");
const searchBox = document.querySelector(".search__box");
const searchInput = document.querySelector("input");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
}

cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
}



