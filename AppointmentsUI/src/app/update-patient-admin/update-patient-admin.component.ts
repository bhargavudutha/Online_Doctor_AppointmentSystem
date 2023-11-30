import { Component } from '@angular/core';
import { PatientDto } from '../PatientDto';
import { Patient } from '../Patient';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { AdminServiceService } from '../admin-service.service';
import { Location } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update-patient-admin',
  templateUrl: './update-patient-admin.component.html',
  styleUrls: ['./update-patient-admin.component.scss']
})
export class UpdatePatientAdminComponent {
	
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
			id:['',Validators.required],
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
			this.id = +params[this.adminService.id]; // Extract patient ID from route
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
		this.patientService.updatePatient(this.adminService.getUserId(), this.patient).subscribe((data) => {
			this.message = "Data Updated Successfully";
			console.log("Data updated successfully");
			alert("Data Updated successfully")
			this.router.navigateByUrl("/admindashboard")
			this.getPatientDetails();
		},

			error => {
				this.message = "Data Updated Successfully";
				console.log("Data cannot be updated.");
				alert("Data cannot be updated")
				this.router.navigateByUrl("/admindashboard")
			});
	}

	goBack() {
		this.location.back();
	}
	

}
