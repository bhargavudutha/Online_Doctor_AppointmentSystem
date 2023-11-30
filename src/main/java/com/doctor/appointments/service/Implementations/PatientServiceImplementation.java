package com.doctor.appointments.service.Implementations;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctor.appointments.dao.AppointmentRepository;
import com.doctor.appointments.dao.PatientRepository;
import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.entity.Appointment;
import com.doctor.appointments.entity.Patient;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.IPatientService;

import javax.transaction.Transactional;

//import jakarta.transaction.Transactional;

@Service
@Transactional
public class PatientServiceImplementation implements IPatientService {

	@Autowired
	PatientRepository patientRepository;

	@Autowired
	AppointmentRepository appointmentRepository;

	@Override
	public String registerPatient(Patient patient) {
		Patient patientValue = patientRepository.findByEmail(patient.getEmail());
		if (patientValue == null) {
			patientRepository.saveAndFlush(patient);
			return "Patient Registered Successfully.";
		} else {
			return "Patient Id already exists";
		}

	}

	@Override
	public Patient loginPatient(String email, String password) throws ValidationExceptionHandler {
		Patient patient = new Patient();
		patient = patientRepository.findByEmailAndPassword(email, password);
		if (patient == null) {
			throw new ValidationExceptionHandler("User Id does not exists");
		}
		if (patient.getEmail().equals(email) && patient.getPassword().equals(password)) {
			return patient;
		} else
			throw new ValidationExceptionHandler("Password does not match");
	}

	@Override
	public List<AppointmentsDto> appointmentsByPatientId(String email) {
		Patient patient = patientRepository.findByEmail(email);
		
		List<Appointment> appointmentList = appointmentRepository.findAllByPatient(patient);
		System.out.println(appointmentList);
		List<AppointmentsDto> appointmentsDtos = new ArrayList<>();
		for (Appointment appointment : appointmentList) {
			AppointmentsDto appointmentDto = new AppointmentsDto();
			appointmentDto.setId(appointment.getId());
			appointmentDto.setDoctorName(appointment.getDoctor().getName());
			appointmentDto.setStatus(appointment.getStatus());
			appointmentDto.setDoctorSpecialization(appointment.getDoctor().getDoctorSpecialization());
			appointmentDto.setDate(appointment.getDate());
			appointmentDto.setTime(appointment.getStartTime());
			appointmentDto.setEndTime(appointment.getEndTime());
			appointmentDto.setPatientName(appointment.getPatient().getName());
			appointmentsDtos.add(appointmentDto);
		}

		return appointmentsDtos;
	}

	@Override
	public Patient findPatient(int id) {
		Patient patient = patientRepository.findByID(id);
		return patient;
	}

	@Override
	public Long findPatientCount() {
		Long count = patientRepository.count();
		System.out.println("patient count" + count);
		return count;
	}

}