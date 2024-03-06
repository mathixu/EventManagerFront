import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-event-creation-component',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './event-creation-component.component.html',
  styleUrl: './event-creation-component.component.scss'
})
export class EventCreationComponentComponent {
  constructor() {}

  eventForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    date: new FormControl(),
    location: new FormControl()
  });
}
