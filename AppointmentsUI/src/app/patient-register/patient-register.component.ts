import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.scss']
})
export class PatientRegisterComponent {
	
	patientDetails = new Patient();

	model: any = {}
	submitted: boolean = false;
	email: string = ''
	userID: number = 0
	password: string = ''
	phoneNumberString:string=''
	name:string=''
	age:string=''
	bloodgroup:string=''
	address:string=''
	invalidLogin = false
	message:string=''

	constructor(private router: Router, public patientService: PatientServiceService) { }

	ngOnInit(): void {

	}

	register() {
		this.patientService.register(this.patientDetails)
			.subscribe(
				response => {
					this.patientService.email = this.patientDetails.email;
					this.patientService.password = this.patientDetails.password;
					this.patientService.phoneNumberString=this.patientDetails.phoneNumberString;
					this.patientService.age=this.patientDetails.age;
					this.patientService.bloodgroup=this.patientDetails.bloodgroup;
					this.patientService.name=this.patientDetails.name;
					this.patientService.address= this.patientDetails.address
					this.patientService.userID = this.patientDetails.id;
					this.message = JSON.stringify(response)
					console.log('Registration successful:', response);
					this.router.navigateByUrl("/patientlogin");
					// Handle successful login (e.g., store token, redirect, etc.)
				},
				error => {
					console.error('Registration failed:', error);
					this.router.navigateByUrl("/patientlogin");
					// Handle login failure (e.g., display error message)
				}
			);
	}


}
