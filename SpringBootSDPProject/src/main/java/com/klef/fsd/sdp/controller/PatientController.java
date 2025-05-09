package com.klef.fsd.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.sdp.model.Patient;
import com.klef.fsd.sdp.model.ServiceBooking;
import com.klef.fsd.sdp.service.PatientService;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/checkpatientlogin")
    public ResponseEntity<?> checkPatientLogin(@RequestBody Patient patient) {
        try {
            Patient p = patientService.checkPatientLogin(patient.getUsername(), patient.getPassword());
            if (p != null) {
                return ResponseEntity.ok(p);
            } else {
                return ResponseEntity.status(401).body("Invalid username or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
        }
    }

    @PostMapping("/bookservice")
    public ResponseEntity<String> bookService(@RequestBody ServiceBooking serviceBooking) {
        try {
            String result = patientService.bookService(serviceBooking);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Booking failed: " + e.getMessage());
        }
    }
}
