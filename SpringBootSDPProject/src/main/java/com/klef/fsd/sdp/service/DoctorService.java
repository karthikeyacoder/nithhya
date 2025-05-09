package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.Appointment;
import com.klef.fsd.sdp.model.Doctor;

public interface DoctorService {
    Doctor checkDoctorLogin(String username, String password);

    Doctor saveDoctor(Doctor doctor);

    List<Appointment> viewAppointments(int doctorId);

    boolean acceptAppointment(int appointmentId);

    boolean cancelAppointment(int appointmentId);

    boolean completeAppointment(int appointmentId);

    List<Doctor> getAllDoctors();
}
