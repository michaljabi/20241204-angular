import {Routes} from '@angular/router';
import {AdvicesPageComponent} from './advices-page/advices-page.component';
import {AdviceDetailsComponent} from './advices-page/advice-details.component';

export const routes: Routes = [
  { path: 'advices', component: AdvicesPageComponent },
  { path: 'advices/:adviceId', component: AdviceDetailsComponent }, // TO be continued.
];
