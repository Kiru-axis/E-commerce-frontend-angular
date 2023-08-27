import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { APP_ROUTES } from '@app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES, withHashLocation()),
    provideHttpClient(),
  ],
});
