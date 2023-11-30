package com.doctor.appointments.service;

import java.util.List;

import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;

public interface IDoctorService {

	public Doctor doctorLogin(String email, String passsword) throws ValidationExceptionHandler;

	public List<Doctor> getDoctorList();

	public List<AppointmentsDto> listAppointmentByID(String email);

	public Doctor findDoctor(int id);

	public Long getDoctorListSize();

}