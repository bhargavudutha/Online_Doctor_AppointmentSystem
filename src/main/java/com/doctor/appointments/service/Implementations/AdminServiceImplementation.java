package com.doctor.appointments.service.Implementations;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctor.appointments.dao.AdminRepository;
import com.doctor.appointments.dao.AppointmentRepository;
import com.doctor.appointments.dao.DoctorRepository;
import com.doctor.appointments.dao.PatientRepository;
import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.entity.AdminDetails;
import com.doctor.appointments.entity.Appointment;
import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.entity.Patient;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.IAdminService;

import javax.transaction.Transactional;

//import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImplementation implements IAdminService {

	@Autowired
	AdminRepository adminRepository;

	@Autowired
	DoctorRepository doctorRepository;

	@Autowired
	AppointmentRepository appointmentRepository;

	@Autowired
	PatientRepository patientRepository;

	@Override
	public AdminDetails loginAdmin(String email, String password) throws ValidationExceptionHandler {
		AdminDetails admin = new AdminDetails();
		admin = adminRepository.findByEmailAndPassword(email, password);
		if (admin == null) {
			throw new ValidationExceptionHandler("Admin Id does not exists");
		}
		if (admin.getEmail().equals(email) && admin.getPassword().equals(password)) {
			return admin;
		} else
			throw new ValidationExceptionHandler("Invalid Credentials");
	}

	@Override
	public String registerAdmin(AdminDetails adminDetails) {
		AdminDetails adminDetails2 = adminRepository.findByEmail(adminDetails.getEmail());
		AdminDetails admin = new AdminDetails();
		if (adminDetails2 == null) {
			admin = adminRepository.save(adminDetails);
		} else {
			return "The Email ID Already exists";
		}

		return "Registered Successfully with the ID :" + admin.getID();
	}

	@Override
	public String addDoctorDetails(Doctor doctor) {
		Doctor existingDoctor = doctorRepository.findByEmail(doctor.getEmail());
		if (existingDoctor == null) {
			doctorRepository.saveAndFlush(doctor);
			return "Doctor details added successfully";
		} else {
			return "This Email Id already Exists";
		}
	}

	@Override
	public String updateDoctorDetails(Doctor doctor) throws ValidationExceptionHandler {
		Optional<Doctor> existingDoctor = doctorRepository.findById(doctor.getID());
		if (existingDoctor.isPresent()) {
			Doctor doctor1 = existingDoctor.get();
			doctor1.setName(doctor.getName());
			doctor1.setEmail(doctor.getEmail());
			doctor1.setExperience(doctor.getExperience());
			doctor1.setPassword(doctor.getPassword());
			doctor1.setPhoneNumber(doctor.getPhoneNumber());
			doctorRepository.save(doctor1);
			return "Updated the doctor details successsfully";
		} else {
			return "Doctor Details not found";
		}
	}

	@Override
	public String deleteDoctorDetails(int Id) {
		doctorRepository.deleteById(Id);
		return "Doctor details with ID " + Id + " deleted successfully";
	}

	@Override
	public List<AppointmentsDto> listAppointment() {
		List<Appointment> appointments = appointmentRepository.findAll();
		List<AppointmentsDto> appointmentsDtos = new ArrayList<>();
		
		for (Appointment appointment : appointments) {
			Patient patient = patientRepository.findByID(appointment.getPatient().getID());
			Doctor doctor = doctorRepository.findByID(appointment.getDoctor().getID());
			AppointmentsDto appointmentsDto = new AppointmentsDto();
			appointmentsDto.setId(appointment.getId());
			appointmentsDto.setPatientName(patient.getName());
			appointmentsDto.setDoctorName(doctor.getName());
			appointmentsDto.setDoctorSpecialization(doctor.getDoctorSpecialization());
			appointmentsDto.setStatus(appointment.getStatus());
			appointmentsDto.setDate(appointment.getDate());
			appointmentsDto.setTime(appointment.getStartTime());
			appointmentsDto.setEndTime(appointment.getEndTime());
			appointmentsDtos.add(appointmentsDto);
		}
		return appointmentsDtos;
	}

	@Override
	public List<AppointmentsDto> listAppointmentByPatientID(int patientID) {
		List<Appointment> appointments = appointmentRepository.findAllById(patientID);
		AppointmentsDto appointmentsDto = new AppointmentsDto();
		
		List<AppointmentsDto> appointmentsDtos = new ArrayList<>();
		for (Appointment appointment : appointments) {
			appointmentsDto.setTime(appointment.getStartTime());
			appointmentsDto.setDoctorName(appointment.getDoctor().getName());
			appointmentsDto.setPatientName(appointment.getPatient().getName());
			appointmentsDto.setDate(appointment.getDate());
			appointmentsDto.setStatus(appointment.getStatus());
			appointmentsDto.setDoctorSpecialization(appointment.getDoctor().getDoctorSpecialization());
			appointmentsDto.setGender(appointment.getGender());
			appointmentsDtos.add(appointmentsDto);
		}

		return appointmentsDtos;
	}

	@Override
	public Patient searchPatient(int id) {
		Patient patient = patientRepository.findByID(id);
		return patient;
	}

	@Override
	public Doctor searchDoctor(int id) {
		Doctor doctor = doctorRepository.findByID(id);
		return doctor;
	}

	@Override
	public List<Patient> patientsList() {
		List<Patient> patients = patientRepository.findAll();
		return patients;
	}

	@Override
	public Long getCount() {
		Long countLong = appointmentRepository.count();
		return countLong;
	}

}