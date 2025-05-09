package com.klef.fsd.sdp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.sdp.model.ServiceBooking;
import com.klef.fsd.sdp.model.Patient;
import com.klef.fsd.sdp.model.Doctor;

@Repository
public interface ServiceBookingRepository extends JpaRepository<ServiceBooking, Long> {

    List<ServiceBooking> findByPatient(Patient patient);

    List<ServiceBooking> findByDoctor(Doctor doctor);
}
