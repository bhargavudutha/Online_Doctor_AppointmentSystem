import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';
import { AdminDetails } from './AdminDetails';
import { Patient } from './Patient';
import { Appointment } from './Appointment';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AdminServiceService {

	constructor(private httpClient: HttpClient, private router: Router) { }
	submitted: boolean = false;
	admin = new AdminDetails();
	email: string = ''
	userID: number = 0
	password: string = ''
	id: number = 0
	size: number = 0
	doctor: Doctor[] = []
	patient: Patient[] = []
	appointment: Appointment[] = []
	patientId: number=0

	private baseUrl: string = 'http://3.139.237.163:9090';

	login(adminDetails: AdminDetails): Observable<any> {

		return this.httpClient.post(`${this.baseUrl}/api/admin/login`, adminDetails);
	}

	addDoctors(doctor: Doctor): Observable<any> {
		return this.httpClient.post(`${this.baseUrl}/api/admin/addDoctors`, doctor,{responseType:'text'});
	}

	getAppointmentList(): Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/api/admin/allAppointments`)
	}

	getPatientList(): Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/api/admin/allPatients`)
	}
	isUserLoggedIn() {
		let user = sessionStorage.getItem('email');
		console.log(!(user === null))
		return !(user === null)
	}

	deleteDoctor(id: number): Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/api/admin/deletedoctors?id=${id}`, {responseType:'text'})
	}

	logOut() {
		localStorage.removeItem('email')
		this.router.navigateByUrl("").then(()=> window.location.reload())

	}

	getUserId() {
		return this.patientId;
	}

	getdoctorListSize() {

		return this.doctor.length;

	}

	getPatientListSize() {
		return this.patient.length;
	}
	getAppoinmentListSize() {
		return this.appointment.length;
	}
}
