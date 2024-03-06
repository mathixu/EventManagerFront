import { Component } from '@angular/core';
import {EventListComponentComponent} from "../../components/event-list-component/event-list-component.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-events-list-page',
  standalone: true,
  imports: [
    EventListComponentComponent,
    RouterLink
  ],
  templateUrl: './events-list-page.component.html',
  styleUrl: './events-list-page.component.scss'
})
export class EventsListPageComponent {

}
