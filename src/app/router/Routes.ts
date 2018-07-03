import { Routes } from '@angular/router';
import { QueryComponent } from '../components/query/query.component';
import { EntryComponent } from "../components/entry/entry.component";
import { EventDetailComponent } from "../components/event-detail/event-detail.component";

export const AppRoutes: Routes = [
  { path: 'query', component: QueryComponent },
  { path: 'entry', component: EntryComponent },
  { path: 'edit/:eventID', component: EventDetailComponent },
  { path: '', redirectTo: '/query', pathMatch: 'full' }
];
