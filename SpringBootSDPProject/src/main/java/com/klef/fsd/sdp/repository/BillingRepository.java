package com.klef.fsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.sdp.model.Billing;

@Repository
public interface BillingRepository extends JpaRepository<Billing, Integer> {
    Billing findByServiceBookingId(int serviceBookingId);
}
