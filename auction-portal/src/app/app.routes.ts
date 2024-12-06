import { Routes } from '@angular/router';
import { auctionRoutes } from './auction/auction.routes';
import { NotFoundPageComponent } from './not-found-page.component';
// Wyrzucamy import żeby mieć lazy loading !!!!
// import { routes as adviceRoutes } from './advice/advice.routes';

export const routes: Routes = [
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  ...auctionRoutes,
  // ...adviceRoutes,
  { path: 'advices', loadChildren: () => import('./advice/advice.routes').then((m) => m.routes) },
  { path: '**', component: NotFoundPageComponent },
];
