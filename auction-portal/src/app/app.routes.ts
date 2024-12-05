import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auction/auctions-page/auctions-page.component';
import {PromotionsPageComponent} from './auction/promotions-page/promotions-page.component';

export const routes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
];
