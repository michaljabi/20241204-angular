import {Component, OnInit} from '@angular/core';
import {AuctionsService} from '../auctions.service';
import {AuctionItem} from '../auction-item';
import {AuctionCardComponent} from '../auction-card/auction-card.component';

// ZAWSZE this. jeśli chcesz odnieść się do pola klasy!
// const auctionService = {}

@Component({
  imports: [
    AuctionCardComponent
  ],
  template: `
    <div class="row">
      <!-- <div [hidden]="!isLoading">🔎...dziwne u mnie działa...💡</div> -->
      @for(item of auctions; track item.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <app-auction-card [auction]="item" />
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

  // dostarcz tutaj instancje AuctionService
  constructor(private auctionService: AuctionsService) {

    // // Happy Path (co zrobię jeśli strumień zwróci wartość)
    // auctionService.getAll().subscribe(auctions => {
    //   console.log(auctions)
    //   this.auctions = auctions;
    // })

  }

  ngOnInit(): void {
    this.loadAuctions()
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
}
