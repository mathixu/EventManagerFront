import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {EventDto} from "../../types/eventDto";
import {Event} from "../../types/event";

@Injectable({ providedIn: 'root' })
export class EventService {
  constructor(private api: ApiService) {
  }

  getEvents(date?: string): Observable<Event[]> {
    return this.api.get(`/events${date ? `?date=${date}` : ''}`);
  }

  createEvent(event: EventDto): Observable<Event> {
    return this.api.post('/event', event);
  }

  updateEvent(id: string, event: EventDto): Observable<Event> {
    return this.api.put(`/events/${id}`, event);
  }

  deleteEvent(id: string): Observable<void> {
    return this.api.delete(`/events/${id}`);
  }
}
