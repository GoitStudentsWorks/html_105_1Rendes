$('.one-time').slick({
    // dots: true,
    // prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
    // nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 2,
    adaptiveHeight: true,
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  