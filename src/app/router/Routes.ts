import { Routes } from '@angular/router';
import { QueryComponent } from '../components/query/query.component';
import { HomeComponent } from '../components/home/home.component';

export const AppRoutes: Routes = [
  { path: 'query', component: QueryComponent },
  { path: 'home', component: HomeComponent }
];
