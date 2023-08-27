import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons, SwiperDirective } from '@app/shared';
import { swiperConfig } from './swiper-config';
import { register } from 'swiper/element';

@Component({
  selector: 'app-special',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SwiperDirective],
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SpecialComponent {
  constructor() {
    register();
  }
  config = swiperConfig;
  icons = Icons;
  dataset = [
    'assets/images/blog-1.jpg',
    'assets/images/blog-2.jpg',
    'assets/images/blog-3.jpg',
    'assets/images/blog-4.jpg',
    'assets/images/blog-5.jpg',
    'assets/images/blog-6.jpg',
    'assets/images/blog-7.jpg',
  ];
}
