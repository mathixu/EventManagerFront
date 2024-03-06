import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventCreationComponentComponent } from './event-creation-component.component';
import { EventDto } from '../../../types/eventDto';
import {By} from "@angular/platform-browser";

describe('EventCreationComponentComponent', () => {
  let component: EventCreationComponentComponent;
  let fixture: ComponentFixture<EventCreationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, EventCreationComponentComponent, FormsModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate the form with empty fields', () => {
    const invalidEvent: EventDto = {
      title: '',
      description: '',
      date: '',
      location: ''
    };

    expect(component.isValidEvent(invalidEvent)).toBeFalse();
    expect(component.validationErrors.length).toBeGreaterThan(0);
  });

  it('should validate the form with all fields filled', () => {
    const validEvent: EventDto = {
      title: 'Event Title',
      description: 'Event Description',
      date: '2024-03-06T12:00',
      location: 'Event Location'
    };

    expect(component.isValidEvent(validEvent)).toBeTrue();
    expect(component.validationErrors.length).toBe(0);
  });

  it('should emit event data when form is valid and submitted', () => {
    const titleInput = fixture.debugElement.query(By.css('input[formControlName="title"]')).nativeElement;
    const descriptionInput = fixture.debugElement.query(By.css('input[formControlName="description"]')).nativeElement;
    const dateInput = fixture.debugElement.query(By.css('input[formControlName="date"]')).nativeElement;
    const locationInput = fixture.debugElement.query(By.css('input[formControlName="location"]')).nativeElement;

    titleInput.value = 'Test Event';
    descriptionInput.value = 'This is a test event';
    dateInput.value = '2024-03-06T12:00';
    locationInput.value = 'Test Location';

    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));
    dateInput.dispatchEvent(new Event('input'));
    locationInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    let submittedEventData: EventDto | null = null;
    component.eventSubmit.subscribe((data: EventDto) => submittedEventData = data);

    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);

    expect(submittedEventData).not.toBeNull();
  });
});
