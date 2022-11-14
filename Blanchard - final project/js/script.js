/*dropdown*/

const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


/* Слайдер в hero-блоке */

const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
})


/*select*/

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'bottom'
})



/* Слайдер в галерее*/

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery .btn-next",
      prevEl: ".gallery .btn-prev"
    },


    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },

      560: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },

      1460: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 35
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});


/*аккордеон*/


(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// Табы
const param = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(param) {
  const tabBtns = document.querySelectorAll(`.${param.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${param.wrap}`);
    const currentContent = wrap.querySelector(`.${param.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${param.content}`);

    contents.forEach((el) => {
      el.classList.remove(param.active);
    });

    currentContent.classList.add(param.active);

    tabBtns.forEach((el) => {
      el.classList.remove(param.active);
    });

    this.classList.add(param.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(param);



/* Слайдер в developments-блоке */

const developments_container = document.querySelector(".container")
const developments_swiper = new Swiper('.developments__swiper', {
  speed: 300,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".developments .btn-next",
    prevEl: ".developments .btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.developments__pagination',
        type: 'bullets',
        clickable: true
      }
    },

    591: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      pagination: {
        el: '.developments__pagination',
        type: 'bullets',
        clickable: true
      }
    },

    841: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 28,
      pagination: {
        el: '.developments__pagination',
        type: 'bullets',
        clickable: true
      }
    },

    1180: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})

/* Tooltip */

tippy('.js-tooltip-btn', {
  theme: 'projects-tooltip',
  maxWidth: 270,
});

/* Слайдер в projects-блоке */

const projects_container = document.querySelector(".container")
const projects_swiper = new Swiper('.projects__swiper', {
  speed: 300,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".projects .btn-next",
    prevEl: ".projects .btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1180: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})


/*validation-inputmask*/

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

/*validation*/

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return Number(phone) && phone.length === 10;
      }
    }

  },
  colorWrong: '#D11616',
  messages: {
    name: {
      required: "Вы не ввели имя",
      minLength: "Имя не может быть короче 2 символов",
      maxLength: "Имя не божет быть длиннее 15 символов"
    },
    tel: {
      required: "Вы не ввели телефон",
      function: "Телефон должен содержать 10 цифр"
    }
  },
});


/*yandex map*/

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    },
  );

  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Yandex_icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, -50],
  })
  myMap.geoObjects.add(myPlacemark);
}

/*Модальное окно*/


var modalButtons = document.querySelectorAll('.js-open-modal'),
  overlay = document.querySelector('.js-overlay-modal'),
  closeButtons = document.querySelectorAll('.js-modal-close');


modalButtons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var modalId = this.getAttribute('data-modal'),
      modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.toggle('stop-scroll');
  });
});


closeButtons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var parentModal = this.closest('.modal');
    parentModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('stop-scroll')
  });
});


overlay.addEventListener('click', function () {
  document.querySelector('.modal.active').classList.remove('active');
  this.classList.remove('active');
  document.body.classList.remove('stop-scroll')
});


/* Открытие и закрытие поиска */

const searchBtn = document.querySelector(".top__search");
const cancelBtn = document.querySelector(".search__cancel");
const searchBox = document.querySelector(".top__search-box");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
}

cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
}


/* Бургер меню */

let burger = document.querySelector('.burger');
let menu = document.querySelector('.top__blog');
let menuLinks = menu.querySelectorAll('.nav__link');
let Btnsearch = document.querySelector('.top__search');


burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('top__blog--active');
    Btnsearch.classList.toggle('top__search--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active')

    menu.classList.remove('top__blog--active')

    Btnsearch.classList.remove('top__search--active')

    document.body.classList.remove('stop-scroll')
  })

})


