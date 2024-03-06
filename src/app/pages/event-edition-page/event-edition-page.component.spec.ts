import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEditionPageComponent } from './event-edition-page.component';

describe('EventEditionPageComponent', () => {
  let component: EventEditionPageComponent;
  let fixture: ComponentFixture<EventEditionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEditionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEditionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
