import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {EventListComponentComponent} from "./components/event-list-component/event-list-component.component";
import {
  EventCreationComponentComponent
} from "./components/event-creation-component/event-creation-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EventListComponentComponent, EventCreationComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EventManagerFront';
}
