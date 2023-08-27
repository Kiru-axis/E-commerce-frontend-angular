import { SwiperOptions } from 'swiper/types/swiper-options';
import { A11y, Pagination, Navigation, Mousewheel, Grid } from 'swiper/modules';

export const swiperConfig: SwiperOptions = {
  modules: [Pagination, Navigation, Mousewheel, A11y, Grid],
  spaceBetween: 10,
  navigation: false,
  slidesPerView: 1,
  // autoplay: true,
  loop: true,
  pagination: { clickable: true },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
};
