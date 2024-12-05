import { Component } from '@angular/core';

interface MenuItem {
  link: string;
  name: string;
}

@Component({
  selector: 'app-main-menu',
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav">
          @for(item of menuItems; track item.link) {
            <li class="nav-item">
              <a class="nav-link" [href]="item.link">{{item.name}}</a>
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
}
