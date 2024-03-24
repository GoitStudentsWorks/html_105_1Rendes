import Swiper from 'swiper';
import 'swiper/css/bundle';

var header = document.getElementById('header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const swiper = new Swiper('.swiper', {
  // Настройки Swiper
  slidersPerView: 3,
  // slidesPerGroup:3,
  loop: true, // Бесконечная прокрутка
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // Делает пагинацию кликабельной
  },
  navigation: {
    nextEl: '.btn-prevt',
    prevEl: '.btn-next',
  },
  breakpoints:{
      1280: {
          slidesPerView: 4,
      },
      768: {
          slidesPerView: 3,
          // spaceBetween: 16,
      },
      320: {
          slidesPerView: 2,
          // spaceBetween: 20,
      },
  },
});
