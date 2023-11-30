import { Component } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { AppointmentDto } from '../AppointmentDto';
import { Location } from '@angular/common';
import { AppointmentServiceService } from '../appointment-service.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent {
	
	constructor(private patientService: PatientServiceService, private location: Location, private appointmentService: AppointmentServiceService) {}
	
	email: string = '';
	cancelled:boolean=false
	id:number=0
	appointments: AppointmentDto[] = []
	message:string=''

	ngOnInit() {
		this.getAppointmentsById();
	}


	getAppointmentsById() {
		this.patientService.appointmenthistory(this.patientService.email).subscribe(
			(data: AppointmentDto[]) => {
				console.log("Email:", this.patientService.email);
				this.appointments = data;
				console.log(data)

			},
			(error) => {
				console.log("Email:", this.patientService.email);
				console.error('Error fetching Appointmets:', error);
				// Handle error scenarios (e.g., show error message)
			}
		);
	}
	
	cancelAppointment(id: number) {
		this.id=id
		this.appointmentService.cancelAppointment(id).subscribe((data:string)=> {
			console.log("Appointment Cancelled Successfully");
			this.message = data
			this.cancelled =true
			alert(this.message)
			this.getAppointmentsById();
		},(error)=>{
				console.error('Error fetching Appointmets:', error);
				alert("Unable to cancel the Appointment")
				this.cancelled=false
				// Handle error scenarios (e.g., show error message)
			});
	}

	goBack() {
		this.location.back();
	}
	

}
