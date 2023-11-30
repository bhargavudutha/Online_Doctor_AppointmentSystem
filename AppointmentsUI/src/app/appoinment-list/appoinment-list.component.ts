import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdminServiceService } from '../admin-service.service';
import { AppointmentDto } from '../AppointmentDto';
import { AppointmentServiceService } from '../appointment-service.service';
/*import { forkJoin } from 'rxjs';*/

@Component({
	selector: 'app-appoinment-list',
	templateUrl: './appoinment-list.component.html',
	styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent {

	appointments: AppointmentDto[] = [];

	constructor(private appointmentService: AdminServiceService, private appointment: AppointmentServiceService,
		private router: Router, private location: Location) { }

	ngOnInit(): void {

		this.getAppointments();
	}

	private getAppointments() {
		this.appointmentService.getAppointmentList().subscribe(data => {
			this.appointments = data;
		});
	}

	goBack() {
		this.location.back();
	}

	/*  deleteAppointment(id: number){ 
		this.appointment.deleteAppointment(id).subscribe( data => { 
		  console.log(data);
		  this.getAppointments();
		  window.location.reload();
		  
		})
	  }*/

	deleteAppointment(id: number): void {
		this.appointment.deleteAppointment(id).subscribe(
			(data) => {
				console.log(data);
				alert("Appointment deleted successfully");
				this.getAppointments(); // Refresh the list after successful deletion
			},
			(error) => {
				console.error('Error deleting appointment:', error);
				alert("Appointment cannot be deleted");
			}
		);
	}

	/*  deleteAndRefresh(id: number): void {
		const deleteOperation = this.appointment.deleteAppointment(id); // Replace doctorId with the ID of the doctor to be deleted
		const refreshOperation = this.appointment.refreshList(); // Assuming this method triggers a refresh of the list
	
		forkJoin([deleteOperation, refreshOperation]).subscribe(
		  ([deleteResult]) => {
			// Handle the results or perform additional actions after both operations are completed successfully
			console.log('Delete operation result:', deleteResult);
			//console.log('Refresh operation result:', refreshResult);
		  },
		  error => {
			// Handle errors if any operation fails
			console.error('Error occurred:', error);
		  }
		);
	  }*/


}
