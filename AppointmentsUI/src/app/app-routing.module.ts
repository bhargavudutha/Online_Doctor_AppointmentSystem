import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ShowAppointmentsCalenderComponent } from './show-appointments-calender/show-appointments-calender.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HeaderComponent } from './header/header.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { DoctorListAdminComponent } from './doctor-list-admin/doctor-list-admin.component';
import { AdminPatientListComponent } from './admin-patient-list/admin-patient-list.component';
import { AppointmentListPerDoctorComponent } from './appointment-list-per-doctor/appointment-list-per-doctor.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { NewsComponent } from './news/news.component';
import { UpdatePatientAdminComponent } from './update-patient-admin/update-patient-admin.component';

const routes: Routes = [
	{ path: 'adminregister', component: AdminRegisterComponent },
	{ path: 'patientlogin', component: PatientLoginComponent },
	{ path: 'patientregister', component: PatientRegisterComponent },
	{ path: 'doctorlogin', component: DoctorLoginComponent },
	{ path: 'scheduleappointment', component: BookAppointmentComponent },
	{ path: 'showcalendar', component: ShowAppointmentsCalenderComponent },
	{ path: 'adminlogin', component: AdminLoginComponent },
	{ path: 'doctorList', component: DoctorListComponent },
	{ path: '', component: HeaderComponent },
	{ path: 'patientdashboard', component: PatientDashboardComponent },
	{ path: 'appointmentlist', component: AppoinmentListComponent },
	{ path: 'admindashboard', component: AdminDashboardComponent },
	{ path: 'adl', component: DoctorListAdminComponent },
	{ path: 'apl', component: AdminPatientListComponent },
	{ path: 'appointmentlistperid', component: AppointmentListPerDoctorComponent },
	{ path: 'appointmenthistory', component: AppointmentHistoryComponent },
	{ path: 'addDoctor', component: AddDoctorComponent },
	{ path: 'updatepatient', component: UpdatePatientComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'updatepatientadmin', component: UpdatePatientAdminComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
