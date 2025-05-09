package com.klef.fsd.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.sdp.model.Billing;
import com.klef.fsd.sdp.service.BillingService;

@RestController
@RequestMapping("/billing")
@CrossOrigin("*")
public class BillingController {

    @Autowired
    private BillingService billingService;

    @PostMapping("/createorupdate")
    public ResponseEntity<Billing> createOrUpdateBilling(@RequestBody Billing billing) {
        Billing savedBilling = billingService.createOrUpdateBilling(billing);
        return ResponseEntity.ok(savedBilling);
    }

    @GetMapping("/bybooking/{bookingId}")
    public ResponseEntity<Billing> getBillingByBooking(@PathVariable int bookingId) {
        Billing billing = billingService.getBillingByServiceBookingId(bookingId);
        if (billing != null) {
            return ResponseEntity.ok(billing);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Billing>> getAllBillings() {
        List<Billing> billings = billingService.getAllBillings();
        return ResponseEntity.ok(billings);
    }
}
