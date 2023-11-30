import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Doctor } from '../Doctor';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {
  constructor(
    private router: Router,
    private adminService: AdminServiceService,
    private location: Location
  ) {}

  doctor = new Doctor();
  message: string = '';

  addDoctor() {
    this.adminService.addDoctors(this.doctor).subscribe(
      (response: string) => {
        console.log('Doctor Details added successfully');
        this.message = response;
        alert('Doctor added successfully'); // Show a popup indicating successful addition
        this.router.navigateByUrl('/admindashboard');
      },
      error => {
        console.error('Error adding doctor:', error);
        // Handle error: Display an error message or perform appropriate action
        // Example: Show an alert for the error
        alert('Failed to add doctor. Please try again.');
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
