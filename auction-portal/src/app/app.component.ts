import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {CartService} from './auction/cart.service';

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
        @let count = cartService.getItemsCount();
        @if(count) {
            <div class="alert alert-info"> Masz już {{count}} aukcji w koszyku </div>
        }
        <router-outlet />
    </main>
  `,
  styles: [``],
  // standalone: true // to be continued...
})
export class AppComponent {
  sth= 'Something else'

  // tak nie zadziała, bo to typ prosty !
  //num = 0

  constructor(public cartService: CartService) {
    // this.num = cartService.getItemsCount()

    // aby to zawsze zadziałało, to cart.service musi być napisany jako RxJS store stream albo Signal store
  }

}
