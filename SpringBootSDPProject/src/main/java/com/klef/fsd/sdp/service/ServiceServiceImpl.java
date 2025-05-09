package com.klef.fsd.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.repository.ServiceRepository;

@Service
public class ServiceServiceImpl implements ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public String addService(com.klef.fsd.sdp.model.Service service) {
        serviceRepository.save(service);
        return "Service added successfully";
    }

    @Override
    public List<com.klef.fsd.sdp.model.Service> viewAllServices() {
        return serviceRepository.findAll();
    }

    @Override
    public com.klef.fsd.sdp.model.Service viewServiceById(int id) {
        return serviceRepository.findById(id).orElse(null);
    }
}
