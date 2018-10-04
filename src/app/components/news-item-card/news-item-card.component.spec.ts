import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemCardComponent } from './news-item-card.component';

describe('NewsItemCardComponent', () => {
  let component: NewsItemCardComponent;
  let fixture: ComponentFixture<NewsItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
