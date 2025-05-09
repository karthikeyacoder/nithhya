package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.Billing;

public interface BillingService {
    Billing createOrUpdateBilling(Billing billing);
    Billing getBillingByServiceBookingId(int serviceBookingId);
    List<Billing> getAllBillings();
}
