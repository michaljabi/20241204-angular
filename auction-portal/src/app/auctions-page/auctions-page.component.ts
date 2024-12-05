import { Component } from '@angular/core';

@Component({
  imports: [],
  template: `
    <div class="row">
      @for(i of [1,2,3,4,5,6,7,8,9,10]; track i) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          [auction-card] (i)
        </div>
      }
    </div>
  `,
  styles: ``
})
export class AuctionsPageComponent {

}
