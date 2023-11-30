import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListPerDoctorComponent } from './appointment-list-per-doctor.component';

describe('AppointmentListPerDoctorComponent', () => {
  let component: AppointmentListPerDoctorComponent;
  let fixture: ComponentFixture<AppointmentListPerDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentListPerDoctorComponent]
    });
    fixture = TestBed.createComponent(AppointmentListPerDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
