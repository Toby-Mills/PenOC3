import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResultsCardComponent } from './event-results-card.component';

describe('EventResultsCardComponent', () => {
  let component: EventResultsCardComponent;
  let fixture: ComponentFixture<EventResultsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResultsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
