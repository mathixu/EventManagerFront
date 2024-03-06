import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {EventCreationPageComponent} from "./pages/event-creation-page/event-creation-page.component";
import {EventsListPageComponent} from "./pages/events-list-page/events-list-page.component";
import {EventEditionPageComponent} from "./pages/event-edition-page/event-edition-page.component";

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'events', component: EventsListPageComponent },
  { path: 'events/add', component: EventCreationPageComponent },
  { path: 'events/edit/:id', component: EventEditionPageComponent },
];
