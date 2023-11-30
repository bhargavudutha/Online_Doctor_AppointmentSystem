import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorServiceService } from '../doctor-service.service';
import { Doctor } from '../Doctor';

@Component({
	selector: 'app-doctor-login',
	templateUrl: './doctor-login.component.html',
	styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent {

	doctor = new Doctor();

	doctors: Doctor[] = []

	model: any = {}
	loginStatus: boolean = false
	email: string = ''
	userID: number = 0
	message: string = ""
	password: string = ''

	isLoggedIn: boolean = false

	invalidLogin = false

	constructor(private router: Router, public loginservice: DoctorServiceService) { }

	ngOnInit() {

	}

	checkLogin() {
		this.loginservice.login(this.doctor)
			.subscribe(
				data => {
					this.loginservice.email = this.doctor.email;
					this.loginservice.password = this.doctor.password;
					this.message = "Login Success";
					this.isLoggedIn = true
					console.log('Login successful:', data);

					this.router.navigateByUrl("/appointmentlistperid")
					// Handle successful login (e.g., store token, redirect, etc.)
				},
				error => {
					console.error('Login failed:', error);
					this.message = "Invalid Credentials";
					this.invalidLogin = true
					// Handle login failure (e.g., display error message)
				}
			);
	}

	getStatus() {
		this.isLoggedIn = this.loginservice.submitted
		console.log(this.isLoggedIn)
		this.email = this.loginservice.email
		this.message = "Welcome " + this.email
		return this.isLoggedIn;
	}

	getUserName() {
		return this.loginservice.email;
	}
	logout() {
		this.loginservice.submitted = false
		localStorage.removeItem(this.email)
		this.router.navigateByUrl("");
	}



}
