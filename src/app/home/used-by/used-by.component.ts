import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperDirective } from '@app/shared';
import { swiperConfig } from './swiper-config';
import { register } from 'swiper/element';

@Component({
  selector: 'app-used-by',
  standalone: true,
  imports: [CommonModule, SwiperDirective],
  templateUrl: './used-by.component.html',
  styleUrls: ['./used-by.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsedByComponent {
  constructor() {
    register();
  }
  config = swiperConfig;
  brands = [
    'assets/images/brand-01.png',
    'assets/images/brand-02.png',
    'assets/images/brand-03.png',
    'assets/images/brand-04.png',
    'assets/images/brand-05.png',
    'assets/images/brand-06.png',
    'assets/images/brand-07.png',
    'assets/images/brand-08.png',
  ];
}
