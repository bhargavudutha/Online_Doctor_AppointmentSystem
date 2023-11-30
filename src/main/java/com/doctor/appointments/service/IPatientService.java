package com.doctor.appointments.service;

import java.util.List;

import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.entity.Patient;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;

public interface IPatientService {

	public String registerPatient(Patient patient);
	public Patient loginPatient(String email, String password) throws ValidationExceptionHandler;
	public List<AppointmentsDto> appointmentsByPatientId(String email);
	Patient findPatient(int id);
	Long findPatientCount();

}