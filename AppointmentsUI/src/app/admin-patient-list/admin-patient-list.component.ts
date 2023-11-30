import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Patient } from '../Patient';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-patient-list',
	templateUrl: './admin-patient-list.component.html',
	styleUrls: ['./admin-patient-list.component.scss']
})
export class AdminPatientListComponent {

	patients: Patient[] = [];

	constructor(private adminService: AdminServiceService, private location: Location, private router: Router) { }

	ngOnInit(): void {
		this.fetchPatients();
	}

	fetchPatients() {
		this.adminService.getPatientList().subscribe(
			(data: Patient[]) => {
				this.patients = data;
			},
			(error) => {
				console.error('Error fetching patients:', error);
				// Handle error scenarios (e.g., show error message)
			}
		);
	}

	goBack() {
		this.location.back();
	}

	updatepatient(id: number) {
		this.adminService.patientId = id;
		this.router.navigateByUrl("/updatepatientadmin")
		
	}

}
