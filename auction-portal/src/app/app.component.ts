import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainMenuComponent, SharedModule],
  template: `
    <app-header />
    <app-search-bar />
    <!--
    <app-header appTitle="Inny tytuł appki..." />
    <app-header [appTitle]="sth" [userInfo]="{ name: 'Marian', isAdmin: true }" />
    -->
    <main class="container">
        <app-main-menu />
        <div class="alert alert-info"> Masz już {{0}} aukcji w koszyku </div>
        <router-outlet />
    </main>
  `,
  styles: [``],
  // standalone: true // to be continued...
})
export class AppComponent {
  sth= 'Something else'
}
