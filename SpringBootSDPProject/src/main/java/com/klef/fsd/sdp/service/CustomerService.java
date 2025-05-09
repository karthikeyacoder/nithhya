package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.ServiceBooking;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.HomeService;

public interface CustomerService 
{
  public String customerregistration(Customer customer);
  public Customer checkcustomerlogin(String username,String password);
  
  public String customerupdateprofile(Customer customer);
  
  public List<HomeService> viewallservices();
  
  public Customer getCustomerById(int cid);
  public HomeService getServiceById(int sid);
  
  public String bookservice(ServiceBooking serviceBooking);
  public List<ServiceBooking> getbookedservicesByCustomer(int cid);
  
}
