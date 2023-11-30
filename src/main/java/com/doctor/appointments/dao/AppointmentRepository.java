package com.doctor.appointments.dao;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.doctor.appointments.dto.AppointmentsDto;
import com.doctor.appointments.entity.Appointment;

//import jakarta.transaction.Transactional;
import com.doctor.appointments.entity.Doctor;
import com.doctor.appointments.entity.Patient;

import javax.transaction.Transactional;


@Repository
@Transactional
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

	List<Appointment> findAllById(int patientID);
	
	List<Appointment> findAllByDoctor(Doctor doctor);

	List<Appointment> findAllByPatient(Patient patient);

	Appointment findByStartTime(String startTime);

	Appointment findByEndTime(String endTime);

	Appointment findByStartTimeAndDoctor(String startTime, Doctor doctor);

	Appointment findByEndTimeAndDoctor(String endTime, Doctor doctor);

	Appointment findByDateAndStartTimeAndDoctor(String date,String localTime, Doctor doctor);

	Appointment findByDateAndEndTimeAndDoctor(String date, String endTime, Doctor doctor);

	Optional<Appointment> findById(int appointmentId);

}
