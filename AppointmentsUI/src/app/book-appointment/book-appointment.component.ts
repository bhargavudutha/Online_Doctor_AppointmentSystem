import { Component } from '@angular/core';
import { Appointment } from '../Appointment'
import { AppointmentServiceService } from '../appointment-service.service';
import { Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { DoctorServiceService } from '../doctor-service.service';
import { Doctor } from '../Doctor';
import { Location } from '@angular/common';

@Component({
	selector: 'app-book-appointment',
	templateUrl: './book-appointment.component.html',
	styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent {
	appointment: Appointment = new Appointment();
	doctor: Doctor = new Doctor();
	ID: number = 0
	name:string=''
	phoneNumber:string=''
	age:string=''
	gender:string=''
	message:string=''
	

	constructor(private appointmentService: AppointmentServiceService, private patientService: PatientServiceService,
		private doctorService: DoctorServiceService,
		private router: Router, private location: Location) { }
		minDate:Date = new Date()

	ngOnInit(): void {
	}

	bookAppointment() {
		
		this.doctorService.getDoctor(this.doctorService.getUserID()).subscribe(data=> {
			console.log("Doctor Data",data);
			this.appointment.doctor = data;
			console.log(this.appointment.doctor.id)
			console.log(this.appointment.doctor)
		})
		this.patientService.getPatientById(this.patientService.getUserID()).subscribe(data => {
			console.log(data)
			this.appointment.patient = data;
		})
		this.appointmentService.createAppointment(this.appointment).subscribe((data: string)=> {
			console.log("Appointment Data:", data);
			
			this.message = data;
			this.goToAppointmentList();
			alert(this.message); // Show a popup indicating successful addition
			this.router.navigateByUrl("/doctorList")
		},
			error => console.log(error));
		
	  
  }

	goToAppointmentList() {
		this.router.navigate(['/appointmentlist'])
	}

	onSubmit() {
		console.log(this.appointment);
		this.bookAppointment();
	}
	
	goBack() {
		this.location.back();
	}
}
