import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="container">
        [Menu]
        <router-outlet />
    </main>
  `,
  styles: [``]
})
export class AppComponent {}
