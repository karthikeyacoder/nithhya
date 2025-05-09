package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.ServiceProvider;

public interface AdminService 
{
  public Admin checkadminlogin(String username,String password);
  
  public String addserviceprovider(ServiceProvider serviceProvider);
  public List<ServiceProvider> displayserviceproviders();
  public String deleteserviceprovider(int spid);
  
  public List<Customer> displaycustomers();
  public String deletecustomer(int cid);
  
  public long displaycustomercount();
  public long displayserviceprovidercount();
  public long displayservicecount();

  public String addadmin(Admin admin);

  public long displaymanagercount();
  public long displayeventcount();

  public long displaypatientcount();
}
