package com.doctor.appointments.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.IDoctorService;

@RestController
@CrossOrigin
public class DoctorController {

	@Autowired
	IDoctorService doctorService;

	@PostMapping("/api/doctor/login")
	public ResponseEntity<Doctor> doctorLogin(@RequestBody Doctor doctor) throws ValidationExceptionHandler {
		return new ResponseEntity<>(doctorService.doctorLogin(doctor.getEmail(), doctor.getPassword()), HttpStatus.OK);
	}

	@GetMapping("/api/doctor/list")
	public ResponseEntity<List<Doctor>> doctorList() {
		return new ResponseEntity<>(doctorService.getDoctorList(), HttpStatus.OK);
	}

	@GetMapping("/api/doctor/viewAppointmentsbyId")
	public ResponseEntity<List> viewAppointmentsByPatientID(@RequestParam String email) {
		return new ResponseEntity<>(doctorService.listAppointmentByID(email), HttpStatus.OK);
	}

	@GetMapping("/api/doctor")
	public ResponseEntity<Doctor> doctorByEmail(@RequestParam int id) {
		return new ResponseEntity<>(doctorService.findDoctor(id), HttpStatus.OK);
	}
	
	@GetMapping("/api/doctor/count")
	public ResponseEntity<Long> countOfdoctor() {
		return new ResponseEntity<Long>(doctorService.getDoctorListSize(), HttpStatus.OK);
	}

}
