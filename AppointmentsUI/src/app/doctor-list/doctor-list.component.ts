import { Component } from '@angular/core';
import { Doctor } from '../Doctor';
import { DoctorServiceService } from '../doctor-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PatientServiceService } from '../patient-service.service';

@Component({
	selector: 'app-doctor-list',
	templateUrl: './doctor-list.component.html',
	styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent {
	doctors: Doctor[] = [];
	doctor= new Doctor();

	constructor(private doctorService: DoctorServiceService, private patientService: PatientServiceService, private router: Router, private location: Location) { }

	ngOnInit(): void {
		this.fetchDoctors();
	}

	fetchDoctors(): void {
		this.doctorService.getDoctors().subscribe(
			(data: Doctor[]) => {
				this.doctors = data;
			},
			(error) => {
				console.error('Error fetching doctors:', error);
			}
		);
	}
	
	
	goBack(){
		this.location.back();
	}
	
	logout(){
		this.patientService.logOut();
		this.router.navigateByUrl("").then(()=> window.location.reload())
	}
	
	updatepatient() {
		
		this.router.navigateByUrl("/updatepatient")
	}
	
	bookAppointment(id:number){
		this.doctorService.id= id;
		this.router.navigateByUrl("/scheduleappointment")
	}
	
	viewAppointmentHistory(){
		this.router.navigateByUrl("/appointmenthistory")
	}
}
