import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreationComponentComponent } from './event-creation-component.component';

describe('EventCreationComponentComponent', () => {
  let component: EventCreationComponentComponent;
  let fixture: ComponentFixture<EventCreationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCreationComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
