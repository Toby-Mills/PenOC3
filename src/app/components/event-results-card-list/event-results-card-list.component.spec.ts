import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResultsCardListComponent } from './event-results-card-list.component';

describe('EventResultsCardListComponent', () => {
  let component: EventResultsCardListComponent;
  let fixture: ComponentFixture<EventResultsCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResultsCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
