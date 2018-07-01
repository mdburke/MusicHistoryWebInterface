import { Routes } from '@angular/router';
import { QueryComponent } from '../components/query/query.component';
import { HomeComponent } from '../components/home/home.component';
import { EntryComponent } from "../components/entry/entry.component";

export const AppRoutes: Routes = [
  { path: 'query', component: QueryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'entry', component: EntryComponent }
];
