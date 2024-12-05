import { Component } from '@angular/core';
// import {NgClass} from '@angular/common';

interface MenuItem {
  link: string;
  name: string;
}

@Component({
  selector: 'app-main-menu',
  imports: [
    // NgClass
  ],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button class="navbar-toggler" type="button" (click)="handleMenuToggle()">
        <span class="navbar-toggler-icon"></span>
      </button>
<!--      <div class="collapse navbar-collapse" [ngClass]="{ show: isMenuOpen }">-->
      <div class="collapse navbar-collapse" [class.show]="isMenuOpen">
        <ul class="navbar-nav">
          @for(item of menuItems; track item.link) {
            <li class="nav-item">
              <a class="nav-link" [style.color]="linkColor" [href]="item.link">{{item.name}}</a>
            </li>
          }
        </ul>
      </div>
    </nav>
  `,
  styles: ``
})
export class MainMenuComponent {

  menuItems: MenuItem[] = [
    { link: '/auctions', name: 'Aukcje' },
    { link: '/promotions', name: 'Promocje' },
    { link: '/advices', name: 'Podpowiadamy'}
  ]
  isMenuOpen = false
  linkColor = '#f00'

  constructor() {
    // arrow function tutaj konieczne !
    setTimeout(() => {
      this.linkColor = '#000' // tobe continued... (wszelkie operacje async w komponencie musimy "ubijać" jak niszczymy komponent)
      // Chodzi o problem "Memory leak"
    }, 2000)
  }

  handleMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
