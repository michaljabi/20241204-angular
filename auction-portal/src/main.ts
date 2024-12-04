import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Tak zadziała, bo i tak zbierze to Bundler (Webpack)
// import 'bootstrap/dist/css/bootstrap.css'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
