import {Component, inject, OnInit} from '@angular/core';
import {AuctionsService} from '../auctions.service';
import {AuctionItem} from '../auction-item';
import {AuctionCardComponent} from '../auction-card/auction-card.component';
import {CartService} from '../cart.service';
import {SharedModule} from '../../shared/shared.module';

// ZAWSZE this. jeśli chcesz odnieść się do pola klasy!
// const auctionService = {}

@Component({
  imports: [
    AuctionCardComponent,
    SharedModule
  ],
  template: `
    <div class="row">
      <div class="col-12">
            <app-search-bar (search)="searchText = $event" />

<!--        Czy działa: {{searchText}}-->
      </div>
      <!-- <div [hidden]="!isLoading">🔎...dziwne u mnie działa...💡</div> -->
      @for(item of filteredAuctions; track item.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <app-auction-card [isPromoted]="$index === 1" [auction]="item" (addToCart)="handleAddToCart($event)" />
        </div>
      } @empty {
        @if(isLoading) {
          <div class="col-12">
            <div class="alert alert-info"> Poczekaj... ładuję aukcje... </div>
          </div>
        }
        @if(errorMessage) {
          <div class="col-12">
            <div class="alert alert-danger"> Nie udało się załadować aukcji 😭 ! {{errorMessage}} </div>
          </div>
        }
      }
    </div>
  `,
  styles: ``
})
export class AuctionsPageComponent implements OnInit {

  isLoading = true;
  errorMessage = "";
  auctions: AuctionItem[] = [];
  searchText = '';
  // cartService = inject(CartService);

  // dostarcz tutaj instancje AuctionService
  constructor(private auctionService: AuctionsService, private cartService: CartService) {

    // // Happy Path (co zrobię jeśli strumień zwróci wartość)
    // auctionService.getAll().subscribe(auctions => {
    //   console.log(auctions)
    //   this.auctions = auctions;
    // })

  }

  ngOnInit(): void {
    this.loadAuctions()
  }

  get filteredAuctions(): AuctionItem[] {
    return this.auctions.filter(a => a.title.toLowerCase().includes(this.searchText.toLowerCase()))
  }

  loadAuctions() {
    // All paths: (co zrobię jeśli jest error, jest wartość albo strumień skończył działanie)
    this.isLoading = true;
    this.auctions = [];
    this.errorMessage = "";
    this.auctionService.getAll().subscribe({
      next: auctions => {
        this.auctions = auctions;
        this.isLoading = false;
      },
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
      // complete: () => console.log('done')
    })
  }

  handleAddToCart(auction: AuctionItem) {
    this.cartService.addAuction(auction);
  }
}
