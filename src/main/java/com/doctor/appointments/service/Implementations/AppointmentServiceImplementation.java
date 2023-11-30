package com.doctor.appointments.service.Implementations;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

//import org.hibernate.engine.jdbc.env.internal.BlobAndClobCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctor.appointments.dao.AppointmentRepository;
import com.doctor.appointments.dao.DoctorRepository;
import com.doctor.appointments.dao.PatientRepository;
import com.doctor.appointments.entity.Appointment;
import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.entity.Patient;
import com.doctor.appointments.exceptions.ValidationExceptionHandler;
import com.doctor.appointments.service.IAppointmentService;

import javax.transaction.Transactional;

//import jakarta.transaction.Transactional;

@Service
@Transactional
public class AppointmentServiceImplementation implements IAppointmentService {

	@Autowired
	AppointmentRepository appointmentRepository;

	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	DoctorRepository doctorRepository;

	@Autowired
	EmailService emailService;

	@Override
	public String cancelAppointment(int appointmentId) {
		Optional<Appointment> appointment = appointmentRepository.findById(appointmentId);
		Appointment appointment2 = appointment.get();
		appointment2.setCancel(true);
		appointment2.setStatus("Cancelled");
		return "Appointment Cancelled Successfully";
	}

	
	@Override
	public String ScheduleAppointment(Appointment appointment) throws ValidationExceptionHandler {
		Doctor doctor = doctorRepository.findByID(appointment.getDoctor().getID());
		System.out.println(doctor);
		Patient patient = patientRepository.findByID(appointment.getPatient().getID());
		Appointment appointment4 = appointmentRepository.findByDateAndStartTimeAndDoctor(appointment.getDate(),appointment.getStartTime(), appointment.getDoctor());
		Appointment appointment3 = appointmentRepository.findByDateAndEndTimeAndDoctor(appointment.getDate(),appointment.getEndTime(), appointment.getDoctor());
		System.out.println(appointment4);
		System.out.println(appointment3);
		 LocalDate dateFromFrontend = LocalDate.parse(appointment.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		 LocalDate currentDate = LocalDate.now();
		 boolean value = !dateFromFrontend.isBefore(currentDate);
		if(appointment4 !=null) {
			System.out.println("Appointment Cannot be booked during this slot. Slot not available");
			return "Appointment Cannot be booked during this slot. Slot not available";
		}
		if(value) {
		LocalTime selectedTime = LocalTime.parse(appointment.getStartTime(), DateTimeFormatter.ofPattern("HH:mm"));
		LocalTime blockedTime = selectedTime.plusMinutes(30);
		String blockedTimeString = blockedTime.format(DateTimeFormatter.ofPattern("HH:mm"));
		Appointment appointment2 = new Appointment();
		appointment2.setEmailString(appointment.getEmailString());
		appointment2.setAdditionalInfo(appointment.getAdditionalInfo());
		appointment2.setDate(appointment.getDate());
		appointment2.setStartTime(appointment.getStartTime());
		appointment2.setEndTime(blockedTimeString);
		appointment2.setRelation(appointment.getRelation());
		appointment2.setPatient(patient);
		appointment2.setDoctor(doctor);
		appointment2.setGender(appointment.getGender());
		appointment2.setCancel(false);
		appointment2.setStatus("Booked");
		appointment2.setSymptoms(appointment.getSymptoms());
		appointmentRepository.save(appointment2);
		System.out.println("Appointment saved");
		String messageString = "Appointment has been scheduled. Please check the details:\n\n Doctor Name: " + doctor.getName() +
				"\n Patient Name: " + patient.getName() + "\n Time: " + appointment2.getStartTime() + "\n Date: " 
				+ appointment2.getDate() + "\n\nRegards \n USHCC";
		String resultString = emailService.sendEmail(appointment2.getPatient().getEmail(), messageString);
		System.out.println(resultString);
		return "Appointment Scheduled Successfully";
		}else {
			return "Previous dates cannot be selected. Please select Valid date";
		}
		
	}

	@Override
	public String deleteAppointment(int id) {
		appointmentRepository.deleteById(id);
		return "Record Deleted Successfully";
	}

	@Override
	public Long getCount() {
		Long countLong= appointmentRepository.count();
		return countLong;
	}

}
