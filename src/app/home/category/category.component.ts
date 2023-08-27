import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categories } from './data';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categories = Categories;
}
