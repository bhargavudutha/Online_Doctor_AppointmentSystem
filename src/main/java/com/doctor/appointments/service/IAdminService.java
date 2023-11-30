package com.doctor.appointments.service;

import java.util.List;

import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.entity.AdminDetails;
import com.doctor.appointments.entity.Appointment;
import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.entity.Patient;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;

public interface IAdminService {

	public AdminDetails loginAdmin(String email, String password) throws ValidationExceptionHandler;

	public String registerAdmin(AdminDetails adminDetails);

	public String addDoctorDetails(Doctor doctor);

	public String updateDoctorDetails(Doctor doctor) throws ValidationExceptionHandler;

	String deleteDoctorDetails(int Id);

	java.util.List<AppointmentsDto> listAppointment();

	List<AppointmentsDto> listAppointmentByPatientID(int patientID);

	Patient searchPatient(int id);

	Doctor searchDoctor(int id);

	public List<Patient> patientsList();

	public Long getCount();
	
	

}