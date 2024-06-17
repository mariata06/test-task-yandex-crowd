import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initChampionSlider} from './modules/init-champion-slider.js';
import {swiperMode} from './modules/init-stage-slider.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initChampionSlider();
    swiperMode();
  });

  window.addEventListener('resize', () => {
    swiperMode();
  });
});

// ---------------------------------
