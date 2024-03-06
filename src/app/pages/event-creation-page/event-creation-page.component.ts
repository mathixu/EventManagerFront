import { Component } from '@angular/core';
import {
  EventCreationComponentComponent
} from "../../components/event-creation-component/event-creation-component.component";
import {EventDto} from "../../../types/eventDto";
import {EventService} from "../../core/event.service";
import {Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-event-creation-page',
  standalone: true,
  imports: [
    EventCreationComponentComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './event-creation-page.component.html',
  styleUrl: './event-creation-page.component.scss'
})
export class EventCreationPageComponent {

  constructor(private eventService: EventService, private router: Router) {
  }

  apiErrors: string[] = [];

  handleEventCreationSubmit(eventDto: EventDto) {
    this.eventService.createEvent(eventDto).subscribe({
      next: () => {
        this.router.navigate(['/events']);
      },
      error: (error) => {
        this.apiErrors.push(error.error.error);
      }
    });
  }

}
