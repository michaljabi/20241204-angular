import { Component } from '@angular/core';
import {AuctionsService} from '../auctions.service';
import {AuctionItem} from '../auction-item';
import {AuctionCardComponent} from '../auction-card/auction-card.component';

@Component({
  imports: [
    AuctionCardComponent
  ],
  template: `
    <div class="row">
      @for(item of auctions; track item.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <app-auction-card [auction]="item" />
        </div>
      } @empty {
         <div>Brak aukcji</div>
      }
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
