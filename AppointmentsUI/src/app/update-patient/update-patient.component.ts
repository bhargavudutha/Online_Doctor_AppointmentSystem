import { Component } from '@angular/core';
import { Patient } from '../Patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { AdminServiceService } from '../admin-service.service';
import { Location } from '@angular/common';
import { PatientDto } from '../PatientDto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-update-patient',
	templateUrl: './update-patient.component.html',
	styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent {

	patient = new PatientDto();
	id: number = 0
	patient1 = new Patient();
	message:string=''
	phoneNumberString:string=''
	bloodgroup:string=''
	email:string=''
	name:string=''
	updateForm: FormGroup = this.formBuilder.group({});;
	constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute,
		private location: Location, private patientService: PatientServiceService, private adminService: AdminServiceService) {
		this.updateForm = this.formBuilder.group({
			name: ['', Validators.required],
			age: ['', Validators.required],
			bloodgroup: ['', Validators.required],
			password: ['', Validators.required],
			email: ['', Validators.required],
			phoneNumberString: ['', Validators.required],
			address: ['', Validators.required]
		});
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.id = +params[this.patientService.getUserID()]; // Extract patient ID from route
			this.getPatientDetails();
		});
	}


	getPatientDetails(): void {
		this.patientService.getPatientById(this.patientService.getUserID()).subscribe(
			(data: Patient) => {
				this.patient1 = data;
				this.updateForm.patchValue(this.patient1); // Populate form with patient details
			},
			error => {
				// Handle error
			}
		);
	}

	updatePatient() {
		 const updatedPatientData = this.updateForm.value as Patient;
		this.patientService.updatePatient(this.patientService.getUserID(), this.patient).subscribe((data) => {
			this.message = "Data Updated Successfully";
			console.log("Data updated successfully");
			alert("Data Updated successfully")
			this.router.navigateByUrl("/doctorList")
		},

			error => {
				this.message = "Data Updated Successfully";
				console.log("Data cannot be updated.");
				alert("Data cannot be updated")
				this.router.navigateByUrl("/doctorList")
			});
	}

	goBack() {
		this.location.back();
	}
	


}
