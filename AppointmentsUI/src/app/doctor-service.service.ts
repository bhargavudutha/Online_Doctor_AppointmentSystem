import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './Doctor';
import { Router } from '@angular/router';
import { AppointmentDto } from './AppointmentDto';

@Injectable({
	providedIn: 'root'
})
export class DoctorServiceService {

	submitted: boolean = false;
	doctorDetails = new Doctor();
	email: string = ''
	userID: number = 0
	password: string = ''
	id: number = 0
	length:number=0

	getUserName() {
		return this.email;
	}

	private baseUrl = "http://3.139.237.163:9090";

	constructor(private httpClient: HttpClient, private router: Router) { }

	login(doctorDetails: Doctor): Observable<Doctor> {
		return this.httpClient.post<Doctor>(`${this.baseUrl}/api/doctor/login`, doctorDetails);
	}

	getDoctors(): Observable<Doctor[]> {
		return this.httpClient.get<Doctor[]>(`${this.baseUrl}/api/doctor/list`);

	}

	getAppointmentsById(email: string): Observable<any> {
		return this.httpClient.get<AppointmentDto[]>(`${this.baseUrl}/api/doctor/viewAppointmentsbyId?email=${email}`)
	}

	getDoctor(ID: number): Observable<Doctor> {
		return this.httpClient.get<Doctor>(`${this.baseUrl}/api/doctor?id=${ID}`)
	}

	getCount(): Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/api/doctor/count`, {responseType:'text'});
	}

	getUserID() {
		return this.id;
	}

	logout(){
		sessionStorage.removeItem('email');
		sessionStorage.removeItem('password');
	}

}
