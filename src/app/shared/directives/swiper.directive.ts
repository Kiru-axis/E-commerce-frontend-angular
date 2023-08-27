import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Directive({
  selector: '[appSwiper]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  @Input() config?: SwiperOptions;

  private swiperElement: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = this.el.nativeElement;
  }

  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement, this.config);

    // @ts-ignore
    this.el.nativeElement.initialize();
  }
}
