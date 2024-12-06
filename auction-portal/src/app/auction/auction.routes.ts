import {Routes} from '@angular/router';
import {AuctionsPageComponent} from './auctions-page/auctions-page.component';
import {PromotionsPageComponent} from './promotions-page/promotions-page.component';

export const auctionRoutes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
];
