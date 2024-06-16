const initChampionSlider = () => {
  const championSlider = new Swiper('.slider__swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.slider__btn-next',
      prevEl: '.slider__btn-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};

export {initChampionSlider};
