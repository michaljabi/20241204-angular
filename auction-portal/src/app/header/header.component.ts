import {Component, input/*, Input*/} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>{{ appTitle() }}</h1>
      @let user = userInfo();
      <!-- uproszczenie kodu z zastosowaniem @let - wyciągam wartość z sygnału jednorazowo -->
      <!-- https://angular.dev/api/core/@let -->
      @if(user.isAdmin) {
        <h4> hello admin - {{user.name}} </h4>
      } @else {
        <h4> --- </h4>
      }
    </header>
  `,
  styles: ``
})
export class HeaderComponent {
  // @Input() appTitle = 'Auction portal'
  appTitle = input('Auction portal')
  // props, który nie ma wartości domyślnej i jest wymagany:
  // appTitle = input.required<string>()
  userInfo = input({ name: '', isAdmin: false })
}
