package com.doctor.appointments.service;

import com.doctor.appointments.entity.Appointment;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;

public interface IAppointmentService {

	String cancelAppointment(int patientId);

	String ScheduleAppointment(Appointment appointment) throws ValidationExceptionHandler;

	String deleteAppointment(int id);

	Long getCount();
}
