import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [
    RouterLink
  ],
  template: `
    <div>
      <div class="alert alert-warning">
        Niestety 🥹 strona <code>{{pagePath}}</code> nie istnieje
      </div>
      <a routerLink="/" class="btn btn-outline-info">
        Powrót do 🏠
      </a>
    </div>
  `,
  styles: ``
})
export class NotFoundPageComponent {
  //todo: show path that is not found
  pagePath = '/hello/ok'
}
