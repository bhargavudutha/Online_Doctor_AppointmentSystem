import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientAdminComponent } from './update-patient-admin.component';

describe('UpdatePatientAdminComponent', () => {
  let component: UpdatePatientAdminComponent;
  let fixture: ComponentFixture<UpdatePatientAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePatientAdminComponent]
    });
    fixture = TestBed.createComponent(UpdatePatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
