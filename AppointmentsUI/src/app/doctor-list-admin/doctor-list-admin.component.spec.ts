import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListAdminComponent } from './doctor-list-admin.component';

describe('DoctorListAdminComponent', () => {
  let component: DoctorListAdminComponent;
  let fixture: ComponentFixture<DoctorListAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorListAdminComponent]
    });
    fixture = TestBed.createComponent(DoctorListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
