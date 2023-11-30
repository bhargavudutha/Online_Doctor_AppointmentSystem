package com.doctor.appointments.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.doctor.appointments.entity.Doctor;

import javax.transaction.Transactional;

//import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

	Doctor findByEmailAndPassword(String email, String password);

	Doctor findByID(int Id);

	Doctor findByEmail(String email);

	List<Doctor> findAllByEmail(String email);

}
