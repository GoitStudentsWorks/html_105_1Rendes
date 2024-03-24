 
const swiper = new Swiper('.swiper', {
    // Настройки Swiper
    slidersPerView: 3,
    
    loop: true, // Бесконечная прокрутка
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
