import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentCoursesComponent } from './permanent-courses.component';

describe('PermanentCoursesComponent', () => {
  let component: PermanentCoursesComponent;
  let fixture: ComponentFixture<PermanentCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
