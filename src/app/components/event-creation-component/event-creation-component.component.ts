import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {EventDto} from "../../../types/eventDto";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-event-creation-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './event-creation-component.component.html',
  styleUrl: './event-creation-component.component.scss'
})
export class EventCreationComponentComponent {
  @Output() eventSubmit = new EventEmitter<EventDto>();

  eventForm: FormGroup;

  constructor() {
    this.eventForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(''),
      location: new FormControl('')
    });
  }

  onSubmit() {
    if (this.isValidEvent(this.eventForm.value)) {
      this.eventSubmit.emit(this.eventForm.value);
    }
  }

  validationErrors: string[] = [];

  private isValidEvent(event: EventDto): boolean {
    this.validationErrors = [];
    if (!event.title) {
      this.validationErrors.push('Title is required');
    }
    if (!event.description) {
      this.validationErrors.push('Description is required');
    }
    if (!event.date) {
      this.validationErrors.push('Date is required');
    }
    if (!event.location) {
      this.validationErrors.push('Location is required');
    }

    return this.validationErrors.length === 0;
  }

}

