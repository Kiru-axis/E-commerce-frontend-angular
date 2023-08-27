import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from '@app/shared';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, ProductSliderComponent],
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {}
