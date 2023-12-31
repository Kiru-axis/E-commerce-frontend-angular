import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [LayoutComponent],
})
export class AppComponent {
  constructor(public http: HttpClient) {}
  ping() {
    this.http.get('http://example.com/api/things').subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
