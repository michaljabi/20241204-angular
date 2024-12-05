import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainMenuComponent],
  template: `
    <app-header />
    <!--
    <app-header appTitle="Inny tytuł appki..." />
    <app-header [appTitle]="sth" [userInfo]="{ name: 'Marian', isAdmin: true }" />
    -->
    <main class="container">
        <app-main-menu />
        <router-outlet />
    </main>
  `,
  styles: [``],
  // standalone: true // to be continued...
})
export class AppComponent {
  sth= 'Something else'
}
