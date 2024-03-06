import {Component} from '@angular/core';
import {
  EventCreationComponentComponent
} from "../../components/event-creation-component/event-creation-component.component";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {EventDto} from "../../../types/eventDto";
import {EventService} from "../../core/event.service";

@Component({
  selector: 'app-event-edition-page',
  standalone: true,
  imports: [
    EventCreationComponentComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './event-edition-page.component.html',
  styleUrl: './event-edition-page.component.scss'
})
export class EventEditionPageComponent {
  eventId: string = '';

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
    });
  }

  apiErrors: string[] = [];

  handleEditEvent(editedEvent: EventDto): void {
    this.eventService.updateEvent(this.eventId, editedEvent).subscribe({
      next: () => {
        this.router.navigate(['/events']);
      },
      error: (error) => {
        this.apiErrors.push(error.error.error);
      }
    });
  }
}
