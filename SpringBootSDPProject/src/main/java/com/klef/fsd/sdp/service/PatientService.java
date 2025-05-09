package com.klef.fsd.sdp.service;

import com.klef.fsd.sdp.model.Patient;
import com.klef.fsd.sdp.model.ServiceBooking;

public interface PatientService {
    Patient checkPatientLogin(String username, String password);
    String bookService(ServiceBooking serviceBooking);
}
