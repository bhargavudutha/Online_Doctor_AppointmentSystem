import { Component } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { Router } from '@angular/router';
import { Patient } from '../Patient';

import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import 'bootstrap';
import { DoctorServiceService } from '../doctor-service.service';
import { AdminServiceService } from '../admin-service.service';
import { AppointmentServiceService } from '../appointment-service.service';

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

	searchText: string = '';
	patient: Patient = new Patient;
	patients: Array<Patient> = [];
	length1: number = 0
	submitted: boolean = true
	patientLength: number = 0
	appointmentCount:number=0

	@ViewChild('doctorCountElement', { static: false }) doctorCountElement: ElementRef | undefined;
	@ViewChild('patientCountElement', { static: false }) patientCountElement: ElementRef | undefined;
	@ViewChild('appointmentCountElement', { static: false }) appointmentCountElement: ElementRef | undefined;

	constructor(private doctorService: DoctorServiceService,private appointmentService: AppointmentServiceService,
	 private router: Router, private adminService: AdminServiceService, private patientService: PatientServiceService) { }

	ngOnInit(): void {

		this.getDoctorCount();
		this.getPatientCount();
		this.getAppointmentCount();

	}
	getDoctorCount() {
		this.doctorService.getCount().subscribe(
			(response: any) => {
				this.length1 = +response; // Convert the response to a number if necessary
				if (this.doctorCountElement) {
					this.doctorCountElement.nativeElement.innerText = this.length1.toString();
				}
				console.log("Doctor Count: ", this.length1);
			},
			(error) => {
				console.error('Error fetching doctor count:', error);
			}
		);
	}

	getPatientCount() {
		this.patientService.getCount().subscribe((response: any) => {
			this.patientLength = +response;
			if (this.patientCountElement) {
				this.patientCountElement.nativeElement.innerText = this.patientLength.toString();
			}
			console.log("Patient Count: ", this.patientLength);
		}, (error) => {
			console.error('Error fetching Patient count:', error);
		});
	}
	
	getAppointmentCount() {
		this.appointmentService.getCount().subscribe((response: any) => {
			this.appointmentCount = +response;
			if (this.appointmentCountElement) {
				this.appointmentCountElement.nativeElement.innerText = this.appointmentCount.toString();
			}
			console.log("Apointment Count: ", this.appointmentCount);
		}, (error) => {
			console.error('Error fetching Appointment count:', error);
		});
	}


	private getPatients() {
		this.patientService.getPatientslist().subscribe(data => {
			this.patients = data;
		});
	}




	updatePatient(id: number) {

		this.router.navigate(['updatepatient', id]);

	}

	deletePatient(id: number) {
		this.patientService.deletePatient(id).subscribe(data => {
			console.log(data);
			this.getPatients();
			window.location.reload();
			this.getPatients();
		});
	}

	logout() {
		this.adminService.logOut();

	}



}
