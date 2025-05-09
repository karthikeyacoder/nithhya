package com.klef.fsd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Appointment;
import com.klef.fsd.sdp.model.Doctor;
import com.klef.fsd.sdp.repository.AppointmentRepository;
import com.klef.fsd.sdp.repository.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor checkDoctorLogin(String username, String password) {
        return doctorRepository.findByUsernameAndPassword(username, password);
    }

    @Override
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public List<Appointment> viewAppointments(int doctorId) {
        return appointmentRepository.findByDoctorId(doctorId);
    }

    @Override
    public boolean acceptAppointment(int appointmentId) {
        Optional<Appointment> appointmentOpt = appointmentRepository.findById(appointmentId);
        if (appointmentOpt.isPresent()) {
            Appointment appointment = appointmentOpt.get();
            appointment.setStatus("accepted");
            appointmentRepository.save(appointment);
            return true;
        }
        return false;
    }

    @Override
    public boolean cancelAppointment(int appointmentId) {
        Optional<Appointment> appointmentOpt = appointmentRepository.findById(appointmentId);
        if (appointmentOpt.isPresent()) {
            Appointment appointment = appointmentOpt.get();
            appointment.setStatus("cancelled");
            appointmentRepository.save(appointment);
            return true;
        }
        return false;
    }

    @Override
    public boolean completeAppointment(int appointmentId) {
        Optional<Appointment> appointmentOpt = appointmentRepository.findById(appointmentId);
        if (appointmentOpt.isPresent()) {
            Appointment appointment = appointmentOpt.get();
            appointment.setStatus("completed");
            appointmentRepository.save(appointment);
            return true;
        }
        return false;
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }
}
