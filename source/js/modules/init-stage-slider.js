

















let swiper;
let swiperExist = false;

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
  let desktop = window.matchMedia('(min-width: 1024px)');

  // Enable (for mobile)
  if (mobile.matches) {
    if (!swiperExist) {
      swiperExist = true;
      swiper = new Swiper('.stage__swiper', {
        pagination: {
          el: '.stage__pagination',
          clickable: true,
        },
        loop: false,
        navigation: {
          nextEl: '.stage__btn-next',
          prevEl: '.stage__btn-prev',
        },
        slidesPerView: 1,
        spaceBetween: 0,
      });
    }
  } else if (tablet.matches) {
    if (swiperExist) {
      swiper.destroy();
      swiperExist = false;
    }
  } else if (desktop.matches) {
    if (swiperExist) {
      swiper.destroy();
      swiperExist = false;
    }
  }
}

/* On Load
**************************************************************/
window.addEventListener('load', function () {
  swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function () {
  swiperMode();
});

export {swiperMode};
