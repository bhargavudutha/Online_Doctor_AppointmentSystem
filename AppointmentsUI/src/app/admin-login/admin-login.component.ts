import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { AdminDetails } from '../AdminDetails';

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

	adminDetails = new AdminDetails();

	model: any = {}
	loginStatus: boolean = false
	email: string = ''
	userID: number = 0
	message: string = ""
	password:string=''
	isLoggedIn:boolean = false
	invalidLogin = false

	constructor(private router: Router, public loginservice: AdminServiceService) { }

	ngOnInit(): void {

	}

	checkLogin() {
		this.loginservice.login(this.adminDetails)
			.subscribe(
				data => {
					this.loginservice.email = this.adminDetails.email;
					this.loginservice.password = this.adminDetails.password;
					console.log('Login successful:', data);
					this.isLoggedIn = true
					this.message = "Login Sucess"
					this.router.navigateByUrl("/admindashboard")
					// Handle successful login (e.g., store token, redirect, etc.)
				},
				error => {
					console.error('Login failed:', error);
					this.invalidLogin = true
					this.message="Invalid Credentials"
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
  logout() {
    this.loginservice.submitted = false
    localStorage.removeItem(this.email)
    this.router.navigateByUrl("");
    window.location.reload();
  }


}
