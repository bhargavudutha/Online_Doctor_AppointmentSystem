package com.doctor.appointments.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.doctor.appointments.dao.PatientRepository;
import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.dto.PatientDto;
import com.doctor.appointments.entity.Patient;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.Implementations.PatientServiceImplementation;

@RestController
@CrossOrigin
public class PatientController {

	@Autowired
	PatientServiceImplementation patientService;

	@Autowired
	PatientRepository patientRepository;

	@PostMapping(value = "/api/patient/register", consumes = "application/json")
	public ResponseEntity<String> registerPatient(@RequestBody Patient patient) {

		return new ResponseEntity<>(patientService.registerPatient(patient), HttpStatus.CREATED);
	}

	@PostMapping("/api/patient/login")
	public ResponseEntity<Patient> login(@RequestBody Patient patient) throws ValidationExceptionHandler {

		return new ResponseEntity<>(patientService.loginPatient(patient.getEmail(), patient.getPassword()),
				HttpStatus.OK);

	}

	@PutMapping("/api/patient")
	public ResponseEntity<String> updatePatient(@RequestParam int id, @RequestBody PatientDto updatedPatient) {
		Optional<Patient> existingPatient = patientRepository.findById(id);
		System.out.println(existingPatient);
		System.out.println(updatedPatient);
		if (existingPatient != null) {
			System.out.println("Patient is not empty");
			Patient patient = existingPatient.get();
			patient.setAddress(updatedPatient.getAddress());
			patient.setAge(updatedPatient.getAge());
			patient.setBloodgroup(updatedPatient.getBloodgroup());
			patient.setEmail(updatedPatient.getEmail());
			patient.setPhoneNumberString(updatedPatient.getPhoneNumber());
			patient.setName(updatedPatient.getName());
			patientRepository.save(patient);
			return new ResponseEntity<>("Updated the Details Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Patient Details not found", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/api/patient/appointments")
	public ResponseEntity<List<AppointmentsDto>> viewAppointments(@RequestParam String email) {
		return new ResponseEntity<>(patientService.appointmentsByPatientId(email), HttpStatus.OK);
	}

	@GetMapping("/api/patient")
	public ResponseEntity<Patient> getPatient(@RequestParam int id) {
		return new ResponseEntity<Patient>(patientService.findPatient(id), HttpStatus.OK);
	}
	
	@GetMapping("/api/patient/count")
	public ResponseEntity<Long> getPatientCount() {
		return new ResponseEntity<Long>(patientService.findPatientCount(), HttpStatus.OK);
	}
	
	

}
