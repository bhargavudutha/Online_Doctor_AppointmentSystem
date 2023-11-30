import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from './patient-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AppointmentsUI';
  
  userName:string=''
  submitted:boolean=false
  loggedInUser:string = '';
  
  constructor(public patientService:PatientServiceService, public router:Router){
  }
  ngOnInit(){
  }
  
  getUserName() {
	  this.submitted=this.patientService.submitted
	  this.userName=this.patientService.email;
  }
  
  selectedMode: string = ''; // To keep track of the selected mode

  onSelectMode(mode: string) {
    this.selectedMode = mode;
}
}
