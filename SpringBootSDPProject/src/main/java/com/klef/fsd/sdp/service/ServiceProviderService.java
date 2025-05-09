package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.ServiceBooking;
import com.klef.fsd.sdp.model.Service;
import com.klef.fsd.sdp.model.ServiceProvider;

public interface ServiceProviderService 
{
  public ServiceProvider checkServiceProviderLogin(String username,String password);
  
  public String addService(Service service);
  public List<Service> viewServicesByProvider(int serviceProviderId);
  
  public ServiceProvider getServiceProviderById(int serviceProviderId);
  
  public List<ServiceBooking> getBookingsByProvider(int serviceProviderId);
  
  public String updateBookingStatus(int id,String status);

  public String registration(ServiceProvider serviceProvider);
}
