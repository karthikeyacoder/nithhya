package com.klef.fsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Patient;
import com.klef.fsd.sdp.model.ServiceBooking;
import com.klef.fsd.sdp.repository.PatientRepository;
import com.klef.fsd.sdp.repository.ServiceBookingRepository;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ServiceBookingRepository serviceBookingRepository;

    @Override
    public Patient checkPatientLogin(String username, String password) {
        return patientRepository.findByUsernameAndPassword(username, password);
    }

    @Override
    public String bookService(ServiceBooking serviceBooking) {
        serviceBookingRepository.save(serviceBooking);
        return "Service booked successfully";
    }
}
