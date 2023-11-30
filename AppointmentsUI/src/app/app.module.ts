import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShowAppointmentsCalenderComponent } from './show-appointments-calender/show-appointments-calender.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { NewsComponent } from './news/news.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { DoctorListAdminComponent } from './doctor-list-admin/doctor-list-admin.component';
import { AdminPatientListComponent } from './admin-patient-list/admin-patient-list.component';
import { AppointmentListPerDoctorComponent } from './appointment-list-per-doctor/appointment-list-per-doctor.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdatePatientAdminComponent } from './update-patient-admin/update-patient-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminDashboardComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    DoctorLoginComponent,
    BookAppointmentComponent,
    ShowAppointmentsCalenderComponent,
    DoctorListComponent,
    PatientDashboardComponent,
    NewsComponent,
    AddDoctorComponent,
    AppoinmentListComponent,
    DoctorListAdminComponent,
    AdminPatientListComponent,
    AppointmentListPerDoctorComponent,
    AppointmentHistoryComponent,
    UpdatePatientComponent,
    UpdatePatientAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
