import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '@app/shared/icons';
import { ProductsDb } from '@app/shared/db';
import { SwiperDirective } from '@app/shared/directives/swiper.directive';
import { swiperConfig } from './swiper-config';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, SwiperDirective],
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSliderComponent {
  constructor() {
    register();
  }

  icons = Icons;

  config = swiperConfig;

  products = ProductsDb;
}
