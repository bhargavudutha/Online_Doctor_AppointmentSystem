package com.doctor.appointments.dao;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.doctor.appointments.entity.Patient;
import javax.transaction.Transactional;

//import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface PatientRepository extends JpaRepository<Patient, Integer> {

    Patient findByID(int ID);

    Optional<Patient> findById(int id);

    Patient findByEmail(String email);

    Patient findByEmailAndPassword(String email, String password);

}
