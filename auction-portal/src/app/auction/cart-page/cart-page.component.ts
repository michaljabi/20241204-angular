import {Component, inject} from '@angular/core';
import {CartService} from '../cart.service';
import {JsonPipe} from '@angular/common';

// hot module replacement (HMR) -> pozwala na przeładowanie UI bez przeładowywania stanu.

@Component({
  imports: [
    JsonPipe
  ],
  template: `
    <div>
      <pre>
      {{ cartService.getItems() | json }}
      </pre>
    </div>
  `,
  styles: ``
})
export class CartPageComponent {
  cartService = inject(CartService);
}
