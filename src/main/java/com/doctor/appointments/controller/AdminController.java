package com.doctor.appointments.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.doctor.appointments.entity.AdminDetails;
import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.IAdminService;

@RestController
@CrossOrigin
public class AdminController {

	@Autowired
	IAdminService adminService;


	@PostMapping("/api/admin/register")
	public ResponseEntity<String> registerAdmin(@RequestBody AdminDetails adminDetails) {
		return new ResponseEntity<>(adminService.registerAdmin(adminDetails), HttpStatus.OK);
	}

	@PostMapping("/api/admin/login")
	public ResponseEntity<AdminDetails> loginAdmin(@RequestBody AdminDetails adminDetails) throws ValidationExceptionHandler {
		String email = adminDetails.getEmail();
		String password = adminDetails.getPassword();
		return new ResponseEntity<>(adminService.loginAdmin(email, password), HttpStatus.OK);
	}

	@PostMapping("/api/admin/addDoctors")
	public ResponseEntity<String> addDoctors(@RequestBody Doctor doctor) {
		return new ResponseEntity<>(adminService.addDoctorDetails(doctor), HttpStatus.OK);
	}

	@GetMapping("/api/admin/allAppointments")
	public ResponseEntity<List> viewAllAppointments() {
		return new ResponseEntity<>(adminService.listAppointment(), HttpStatus.OK);
	}
	
	
	@GetMapping("/api/admin/allPatients")
	public ResponseEntity<List> viewAllPatients() {
		return new ResponseEntity<>(adminService.patientsList(), HttpStatus.OK);
	}

	@GetMapping("/api/admin/viewAppointmentsbyPatientId")
	public ResponseEntity<List> viewAppointmentsByPatientID(@RequestParam int patientId) {
		return new ResponseEntity<>(adminService.listAppointmentByPatientID(patientId), HttpStatus.OK);
	}

	@DeleteMapping("/api/admin/deletedoctors")
	public ResponseEntity<String> deleteDoctor(@RequestParam int id) {
		return new ResponseEntity<>(adminService.deleteDoctorDetails(id), HttpStatus.OK);
	}

	@GetMapping("/api/admin/searchDoctor")
	public ResponseEntity<Doctor> searchDoctor(@RequestParam int id) {
		return new ResponseEntity<>(adminService.searchDoctor(id), HttpStatus.OK);
	}
}
