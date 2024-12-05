import { Component } from '@angular/core';
import {AuctionsService} from '../auctions.service';
import {AuctionItem} from '../auction-item';
import {JsonPipe} from '@angular/common';

@Component({
  imports: [
    JsonPipe
  ],
  template: `
    <div class="row">
      @for(i of [1,2,3,4,5,6,7,8,9,10]; track i) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          [auction-card] (i)
        </div>
      }
      {{auctions | json}}
    </div>
  `,
  styles: ``
})
export class AuctionsPageComponent {

  auctions: AuctionItem[] = [];

  // dostarcz tutaj instancje AuctionService
  constructor(private auctionService: AuctionsService) {

    // Happy Path (co zrobię jeśli strumień zwróci wartość)
    auctionService.getAll().subscribe(auctions => {
      console.log(auctions)
      this.auctions = auctions;
    })

    // All paths: (co zrobię jeśli jest error, jest wartość albo strumień skończył działanie)
    auctionService.getAll().subscribe({
      next: auctions => console.log(auctions),
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
}
