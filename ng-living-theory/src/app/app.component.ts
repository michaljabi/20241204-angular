import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu.component';
import { SampleCounterComponent } from './sample-counter/sample-counter.component';
import { CommunicateWithLongDistanceComponent } from './b-dependency-injection/communicate-with-long-distance.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuComponent,
    SampleCounterComponent,
    CommunicateWithLongDistanceComponent,
  ],
  template: `
    <main class="container mb-5">
      <header class="hero is-info">
        <div class="hero-body">
          <h1 class="title">Angular Live Theory</h1>
          <h4 class="subtitle">sprawdź jak działa {{ title }}!...</h4>
        </div>
      </header>
      <app-sample-counter />
      <app-sample-counter />
      <app-sample-counter />
      <section class="columns mt-5">
        <app-menu></app-menu>
        <div class="column is-9 content">
          <router-outlet></router-outlet>
        </div>
      </section>

      <section class="columns">
        <div class="column is-6">
          <app-communicate-with-long-distance />
        </div>
        <div class="column is-6">
          <app-communicate-with-long-distance />
        </div>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'ng-living-theory';
}
