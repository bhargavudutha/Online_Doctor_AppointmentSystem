package com.doctor.appointments.service.Implementations;

import java.awt.print.Printable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctor.appointments.dao.AppointmentRepository;
import com.doctor.appointments.dao.DoctorRepository;
import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.entity.Appointment;
import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.IDoctorService;

import javax.transaction.Transactional;

//import jakarta.transaction.Transactional;

@Service
@Transactional
public class DoctorServiceImplementation implements IDoctorService {

	@Autowired
	DoctorRepository doctorRepository;

	@Autowired
	AppointmentRepository appointmentRepository;

	@Override
	public Doctor doctorLogin(String email, String password) throws ValidationExceptionHandler {
		Doctor doctor = new Doctor();
		doctor = doctorRepository.findByEmailAndPassword(email, password);
		if (doctor == null) {
			throw new ValidationExceptionHandler("Doctor ID does not exists");
		}
		if (doctor.getEmail().equals(email) && doctor.getPassword().equals(password)) {
			return doctor;
		} else
			throw new ValidationExceptionHandler("Password does not match");
	}

	@Override
	public List<Doctor> getDoctorList() {
		List<Doctor> doctorList = doctorRepository.findAll();
		return doctorList;
	}

	@Override
	public List<AppointmentsDto> listAppointmentByID(String email) {
		Doctor doctor = doctorRepository.findByEmail(email);
		
		List<Appointment> appointmentList = appointmentRepository.findAllByDoctor(doctor);
		List<AppointmentsDto> appointmentsDtos = new ArrayList<>();
		for (Appointment appointment : appointmentList) {
			AppointmentsDto appointmentDto = new AppointmentsDto();
			appointmentDto.setDoctorName(appointment.getDoctor().getName());
			appointmentDto.setStatus(appointment.getStatus());
			appointmentDto.setDoctorSpecialization(doctor.getDoctorSpecialization());
			appointmentDto.setPatientName(appointment.getPatient().getName());
			appointmentDto.setTime(appointment.getStartTime());
			appointmentDto.setDate(appointment.getDate());
			appointmentDto.setGender(appointment.getGender());
			appointmentsDtos.add(appointmentDto);
		}

		return appointmentsDtos;
	}

	@Override
	public Doctor findDoctor(int id) {
		Doctor doctor= doctorRepository.findByID(id);
		return doctor;
	}

	@Override
	public Long getDoctorListSize() {
		long count = doctorRepository.count();
		System.out.println("doctor count"+count);
		
		return count;
	}

}