import { Routes } from '@angular/router';
import { auctionRoutes } from './auction/auction.routes';
import { NotFoundPageComponent } from './not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  ...auctionRoutes,
  { path: '**', component: NotFoundPageComponent },
];
