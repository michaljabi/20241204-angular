import {Component, input} from '@angular/core';
import {AuctionItem} from '../auction-item';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-auction-card',
  imports: [FontAwesomeModule],
  template: `
    <div class="card">
      @let item = auction();
      <div class="card-header">{{item.title}}</div>
      <img class="card-img" [src]="item.imgUrl" [alt]="item.title" />
      <div class="card-body">
        <p class="card-text">{{item.description}}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{item.price}} zł</strong>
          <button class="btn btn-primary">
            <fa-icon [icon]="faCartPlus"></fa-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class AuctionCardComponent {
  faCartPlus = faCartPlus;
  auction = input.required<AuctionItem>()

  // alternatywa
  // @Input({required: true}) auction: AuctionItem;
}
