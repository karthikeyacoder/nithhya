package com.klef.fsd.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Billing;
import com.klef.fsd.sdp.repository.BillingRepository;

@Service
public class BillingServiceImpl implements BillingService {

    @Autowired
    private BillingRepository billingRepository;

    @Override
    public Billing createOrUpdateBilling(Billing billing) {
        return billingRepository.save(billing);
    }

    @Override
    public Billing getBillingByServiceBookingId(int serviceBookingId) {
        return billingRepository.findByServiceBookingId(serviceBookingId);
    }

    @Override
    public List<Billing> getAllBillings() {
        return billingRepository.findAll();
    }
}
