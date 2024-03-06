import {Component, OnInit} from '@angular/core';
import {EventService} from "../../core/event.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {Event} from "../../../types/event";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-event-list-component',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './event-list-component.component.html',
  styleUrl: './event-list-component.component.scss'
})
export class EventListComponentComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events: Event[] = [];

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  handleDelete(event: Event) {
    this.eventService.deleteEvent(event.id).subscribe(() => {
      this.events = this.events.filter(e => e.id !== event.id);
    });
  }

}
