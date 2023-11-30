import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { Patient } from '../Patient';

@Component({
	selector: 'app-patient-login',
	templateUrl: './patient-login.component.html',
	styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent {

	patientDetails = new Patient();

	model: any = {}
	loginStatus: boolean = false
	email: string = ''
	id: number = 0
	message: string = ""
	isLoggedIn: boolean = false;
	patient = new Patient();

	invalidLogin = false

	constructor(private router: Router, public loginService: PatientServiceService) { }

	ngOnInit(): void {

	}

	checkLogin() {
		this.loginService.login(this.patientDetails)
			.subscribe(
				data => {
					this.loginService.email = this.patientDetails.email;
					this.loginService.password = this.patientDetails.password;
					this.loginService.submitted = true
					this.patient = data
					this.loginStatus = true;
					this.invalidLogin = false;
					localStorage.setItem('loggedInUser', this.patientDetails.email)
					this.loginService.id = this.patient.id;
					console.log('Login successful:', data);
					this.message = "Login Success";
					this.router.navigateByUrl("/doctorList")
					// Handle successful login (e.g., store token, redirect, etc.)
				},
				error => {
					console.error('Login failed:', error);
					this.message = "Invalid Credentials. Login Failed"
					this.invalidLogin = true;
					this.loginStatus = false
					// Handle login failure (e.g., display error message)
				}
			);
	}

	getStatus() {
		this.isLoggedIn = this.loginService.submitted
		console.log(this.isLoggedIn)
		this.email = this.loginService.email
		this.message = "Welcome " + this.email
		return this.isLoggedIn;


	}
	logout() {
		sessionStorage.removeItem(this.email)
		this.loginService.submitted = false
		this.router.navigateByUrl("");
	}

}
