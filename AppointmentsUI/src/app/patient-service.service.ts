import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './Patient';
import { PatientDto } from './PatientDto';

@Injectable({
	providedIn: 'root'
})
export class PatientServiceService {


	private baseUrl = "http://3.139.237.163:9090/api/patient";

	constructor(private httpClient: HttpClient) { }
	submitted: boolean = false;
	patient = new Patient();
	email: string = ''
	userID: number = 0
	password: string = ''
	phoneNumberString: string = ''
	name: string = ''
	age: string = ''
	bloodgroup: string = ''
	address: string = ''
	id: number = 0
	patient1= new PatientDto();

	getUserName() {
		return this.email;
	}

	login(patientDetails: Patient): Observable<Patient> {
		return this.httpClient.post<Patient>(`${this.baseUrl}/login`, patientDetails)
	}

	getPatientslist(): Observable<Patient[]> {
		return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
	}

	register(patient: Patient): Observable<string> {
		return this.httpClient.post<string>(`${this.baseUrl}/register`, patient);
	}

	getPatientById(id: number): Observable<Patient> {
		return this.httpClient.get<Patient>(`${this.baseUrl}?id=${id}`);
	}

	updatePatient(id: number, patient: PatientDto): Observable<any> {
		return this.httpClient.put(`${this.baseUrl}?id=${id}`, patient, {responseType:'text'});
	}

	deletePatient(id: number): Observable<Object> {
		return this.httpClient.delete(`${this.baseUrl}/${id}`);
	}

	appointmenthistory(email: string): Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/appointments?email=${email}`)
	}

	getCount(): Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/count`,{responseType:'text'});
	}

	isUserLoggedIn() {
		let email = sessionStorage.getItem('email');
		this.submitted = true
		this.patient.email = email || '{}';
		this.patient.id = this.id;
		return !(email === null);
	}

	logOut() {
		sessionStorage.removeItem('email');
		sessionStorage.removeItem('password');
	}

	getCurrentUserName() {
		return this.patient.email;
	}

	getUserID() {
		return this.id;
	}

	getPatientId() {
		return this.patient.id;
	}
}
