import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CategoryComponent } from './category/category.component';
import { FeaturedComponent } from './featured/featured.component';
import { SpecialComponent } from './special/special.component';
import { UsedByComponent } from './used-by/used-by.component';
import { ServicesComponent } from './services/services.component';
import { PopularComponent } from './popular/popular.component';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CategoryComponent,
    FeaturedComponent,
    SpecialComponent,
    UsedByComponent,
    ServicesComponent,
    PopularComponent,
    NewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
