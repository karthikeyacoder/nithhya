package com.klef.fsd.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.sdp.model.Appointment;
import com.klef.fsd.sdp.model.Doctor;
import com.klef.fsd.sdp.service.DoctorService;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/add")
    public ResponseEntity<?> addDoctor(@RequestBody Doctor doctor) {
        try {
            Doctor savedDoctor = doctorService.saveDoctor(doctor);
            return ResponseEntity.status(201).body(savedDoctor);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to add doctor: " + e.getMessage());
        }
    }

    @PostMapping("/checkdoctorlogin")
    public ResponseEntity<?> checkDoctorLogin(@RequestBody Doctor loginRequest) {
        Doctor doctor = doctorService.checkDoctorLogin(loginRequest.getUsername(), loginRequest.getPassword());
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

    @GetMapping("/viewappointments/{doctorId}")
    public ResponseEntity<List<Appointment>> viewAppointments(@PathVariable int doctorId) {
        List<Appointment> appointments = doctorService.viewAppointments(doctorId);
        return ResponseEntity.ok(appointments);
    }

    @PostMapping("/acceptappointment/{appointmentId}")
    public ResponseEntity<String> acceptAppointment(@PathVariable int appointmentId) {
        boolean success = doctorService.acceptAppointment(appointmentId);
        if (success) {
            return ResponseEntity.ok("Appointment accepted.");
        } else {
            return ResponseEntity.badRequest().body("Failed to accept appointment.");
        }
    }

    @PostMapping("/cancelappointment/{appointmentId}")
    public ResponseEntity<String> cancelAppointment(@PathVariable int appointmentId) {
        boolean success = doctorService.cancelAppointment(appointmentId);
        if (success) {
            return ResponseEntity.ok("Appointment cancelled.");
        } else {
            return ResponseEntity.badRequest().body("Failed to cancel appointment.");
        }
    }

    @PostMapping("/completeappointment/{appointmentId}")
    public ResponseEntity<String> completeAppointment(@PathVariable int appointmentId) {
        boolean success = doctorService.completeAppointment(appointmentId);
        if (success) {
            return ResponseEntity.ok("Appointment marked as completed.");
        } else {
            return ResponseEntity.badRequest().body("Failed to complete appointment.");
        }
    }

    @GetMapping("/alldoctors")
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.getAllDoctors();
        return ResponseEntity.ok(doctors);
    }
}
