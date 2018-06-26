import { Routes } from '@angular/router';
import { QueryComponent } from '../query/query.component';
import { HomeComponent } from '../home/home.component';

export const AppRoutes: Routes = [
  { path: 'query', component: QueryComponent },
  { path: 'home',      component: HomeComponent } //,
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
