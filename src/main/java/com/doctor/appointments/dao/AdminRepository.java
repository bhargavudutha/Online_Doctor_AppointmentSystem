package com.doctor.appointments.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.doctor.appointments.entity.AdminDetails;

import javax.transaction.Transactional;

//import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface AdminRepository extends JpaRepository<AdminDetails, Integer>{

	AdminDetails findByEmail(String Email);

	AdminDetails findByEmailAndPassword(String email, String password);


}
