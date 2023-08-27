import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent, ProductSliderComponent } from '@app/shared';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, ProductSliderComponent, ProductCardComponent],
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent {}
