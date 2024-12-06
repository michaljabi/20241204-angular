import { Routes } from '@angular/router';
import { auctionRoutes } from './auction/auction.routes';
import { NotFoundPageComponent } from './not-found-page.component';
import { routes as adviceRoutes } from './advice/advice.routes';

export const routes: Routes = [
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  ...auctionRoutes,
  ...adviceRoutes,
  { path: '**', component: NotFoundPageComponent },
];
