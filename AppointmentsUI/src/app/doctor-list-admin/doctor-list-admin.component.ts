import { Component } from '@angular/core';
import { Doctor } from '../Doctor';
import { DoctorServiceService } from '../doctor-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
	selector: 'app-doctor-list-admin',
	templateUrl: './doctor-list-admin.component.html',
	styleUrls: ['./doctor-list-admin.component.scss']
})
export class DoctorListAdminComponent {

	doctors: Doctor[] = [];
	length1: number = 0

	constructor(private doctorService: DoctorServiceService, private adminService: AdminServiceService, private location: Location, private router: Router) { }

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
				// Handle error scenarios (e.g., show error message)
			}
		);
	}

	goBack() {
		this.location.back();
	}

	deleteDoctor(id: number) {
		this.adminService.deleteDoctor(id).subscribe((response: string) => {
			console.log("Record Deleted successfully");
		}, (error) => {
			console.log("Record cannot be deleted")
		});
	}

	viewAppointmentHistory() {
		this.router.navigateByUrl("/appointmenthistory");
	}

	getListSize() {
		this.length1 = this.doctors.length;
		this.doctorService.length = this.length1;
		return this.length1;
	}

}
