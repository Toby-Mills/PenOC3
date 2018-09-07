import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheClubComponent } from './about-the-club.component';

describe('AboutTheClubComponent', () => {
  let component: AboutTheClubComponent;
  let fixture: ComponentFixture<AboutTheClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
