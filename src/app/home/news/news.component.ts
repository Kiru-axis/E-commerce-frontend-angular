import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
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
