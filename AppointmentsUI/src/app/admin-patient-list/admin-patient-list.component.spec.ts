import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatientListComponent } from './admin-patient-list.component';

describe('AdminPatientListComponent', () => {
  let component: AdminPatientListComponent;
  let fixture: ComponentFixture<AdminPatientListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPatientListComponent]
    });
    fixture = TestBed.createComponent(AdminPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
