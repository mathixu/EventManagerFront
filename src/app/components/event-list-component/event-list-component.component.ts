import {Component, OnInit} from '@angular/core';
import {EventService} from "../../core/event.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {Event} from "../../../types/event";

@Component({
  selector: 'app-event-list-component',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
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

}