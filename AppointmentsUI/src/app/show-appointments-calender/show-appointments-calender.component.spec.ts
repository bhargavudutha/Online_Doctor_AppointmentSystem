import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppointmentsCalenderComponent } from './show-appointments-calender.component';

describe('ShowAppointmentsCalenderComponent', () => {
  let component: ShowAppointmentsCalenderComponent;
  let fixture: ComponentFixture<ShowAppointmentsCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAppointmentsCalenderComponent]
    });
    fixture = TestBed.createComponent(ShowAppointmentsCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
