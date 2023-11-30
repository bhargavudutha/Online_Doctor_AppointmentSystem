package com.doctor.appointments.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.doctor.appointments.dao.AppointmentRepository;
import com.doctor.appointments.entity.Appointment;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.IAdminService;
import com.doctor.appointments.service.IAppointmentService;

@RestController
@CrossOrigin
public class AppointmentController {

	@Autowired
	IAdminService adminService;

	@Autowired
	AppointmentRepository appointmentRepository;

	@Autowired
	IAppointmentService appointmentService;

	@PostMapping("/api/appointments/create")
    public ResponseEntity<String> scheduleAppointment(@RequestBody Appointment appointment) {
        try {
            return new ResponseEntity<>(appointmentService.ScheduleAppointment(appointment), HttpStatus.CREATED);
        } catch (ValidationExceptionHandler e) {
            return new ResponseEntity<>("Error scheduling appointment", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

	@PutMapping("/api/appointments/cancel")
	public ResponseEntity<String> cancelAppointment(@RequestParam int id) {
		return new ResponseEntity<>(appointmentService.cancelAppointment(id), HttpStatus.OK);
	}
	
	
	@DeleteMapping("/api/appointments/delete")
	public ResponseEntity<String> deleteAppointment(@RequestParam int id) {
		return new ResponseEntity<String>(appointmentService.deleteAppointment(id), HttpStatus.OK);
	}
	
	
	@GetMapping("/api/appointments/count")
	public ResponseEntity<Long> getCount(){
		return new ResponseEntity<Long>(appointmentService.getCount(), HttpStatus.OK);
	}



}