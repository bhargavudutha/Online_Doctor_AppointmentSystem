import { Component } from '@angular/core';
import { DoctorServiceService } from '../doctor-service.service';
import { Location } from '@angular/common';
import { AppointmentDto } from '../AppointmentDto';
import { Router } from '@angular/router';

@Component({
	selector: 'app-appointment-list-per-doctor',
	templateUrl: './appointment-list-per-doctor.component.html',
	styleUrls: ['./appointment-list-per-doctor.component.scss']
})
export class AppointmentListPerDoctorComponent {

	email: string = '';
	
	appointments: AppointmentDto[] = []
	constructor(public loginservice: DoctorServiceService, private location: Location, private router: Router) { }

	ngOnInit() {
		this.getAppointmentsById();
	}


	getAppointmentsById() {
		this.loginservice.getAppointmentsById(this.loginservice.email).subscribe(
			(data: AppointmentDto[]) => {
				console.log("Email:", this.loginservice.email);
				this.appointments = data;
				console.log(data)

			},
			(error) => {
				console.log("Email:", this.loginservice.email);
				console.error('Error fetching Appointmets:', error);
				// Handle error scenarios (e.g., show error message)
			}
		);
	}
	
	goBack() {
		this.location.back;
	}
	
	logout() {
		this.loginservice.logout();
		this.router.navigateByUrl("").then(()=> window.location.reload())
	}

}
