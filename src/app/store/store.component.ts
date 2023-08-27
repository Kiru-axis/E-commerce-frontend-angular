import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface/interface.component';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, InterfaceComponent, FiltersComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {}
