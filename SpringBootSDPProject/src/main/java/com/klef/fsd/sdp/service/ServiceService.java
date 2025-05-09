package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.Service;

public interface ServiceService {
    String addService(Service service);
    List<Service> viewAllServices();
    Service viewServiceById(int id);
}
