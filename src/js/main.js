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
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.header-nav-a, .menu-nav-a');

  // Визначаємо, яка секція знаходиться в верхній частині вікна
  let currentSection = null;
  sections.forEach(section => {
    const top = section.offsetTop;
    if (window.scrollY + 100 >= top) {
      currentSection = section;
    }
  });

  // Додаємо клас .active до відповідного посилання в навігації
  navLinks.forEach(navLink => {
    if (navLink.getAttribute('href').substring(1) === currentSection.id) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
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
  breakpoints: {
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

// button show more///--------
//
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('toggleItemsButton');
  var hiddenItems = document.querySelectorAll('.hidden');

  button.addEventListener('click', function () {
    hiddenItems.forEach(function (item) {
      if (item.style.display === 'none') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    if (button.textContent === 'Show More') {
      button.textContent = 'Close';
    } else {
      button.textContent = 'Show More';
    }
  });
});
