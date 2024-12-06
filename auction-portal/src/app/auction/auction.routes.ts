import {Routes} from '@angular/router';
import {AuctionsPageComponent} from './auctions-page/auctions-page.component';
import {PromotionsPageComponent} from './promotions-page/promotions-page.component';
import {AddAuctionPageComponent} from './add-auction-page/add-auction-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';

export const auctionRoutes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'cart', component: CartPageComponent },
];
