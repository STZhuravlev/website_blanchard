/*select*/

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'bottom'
})

/*yandex map*/

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.8721, 2.3542],
    zoom: 16
  });
  var myPlacemark = new ymaps.Placemark([48.8721, 2.3542], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Yandex_icon.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [0, -50]
  });
  myMap.geoObjects.add(myPlacemark);
}

/*validation-inputmask*/

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

/*validation*/

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      value: /^[а-яА-ЯёЁa-zA-Z]+$/,
      minLength: 2,
      maxLength: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return Number(phone) && phone.length === 10;
      }
    },
    mail: {
      required: true,
      email: true
    },

  },
  colorWrong: '#FF5C00',
  messages: {
    name: {

      minLength: "Имя не может быть короче 2 символов",
      maxLength: "Имя не божет быть длиннее 15 символов"
    },
    tel: {
      required: "Вы не ввели телефон",
      function: "Телефон должен содержать 10 цифр"
    },
    mail: {
      required: "Вы не ввели e-mail",
      email: "Введите корректный e-mail"
    },
  },
});



