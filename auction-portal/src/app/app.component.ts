import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    HELLO WORLD... {{title}}
    <h1 class="bg-warning">Auction Portal</h1>
    <router-outlet />
  `,
  styles: [``]
})
export class AppComponent {
  title = 'auction-portal';
}
