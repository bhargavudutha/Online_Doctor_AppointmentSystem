import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {


  private baseUrl = "http://3.139.237.163:9090/api/appointments";

	constructor(private httpClient: HttpClient) { }

	getPatientslist(): Observable<Appointment[]> {
		return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
	}

	createAppointment(appointment: Appointment): Observable<any> {
		return this.httpClient.post(`${this.baseUrl}/create`, appointment,{responseType:'text'});
	}

	deleteAppointment(id:number) : Observable<any> {
		return this.httpClient.delete(`${this.baseUrl}/delete?id=${id}`, {responseType:'text'});
	}

	getCount():Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/count`,{responseType:'text'})
	}

	cancelAppointment(appointmentid:number):Observable<any>{
		return this.httpClient.put(`${this.baseUrl}/cancel?id=${appointmentid}`,'', {responseType:'text'});
	}

/*	// Call this after updating the list
	refreshList(): void {
    // Update your list here
    // ...

    // Force change detection
    this.cdr.detectChanges();
}*/

}
