

package com.klef.fsd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.ServiceProvider;
import com.klef.fsd.sdp.repository.AdminRepository;
import com.klef.fsd.sdp.repository.CustomerRepository;
import com.klef.fsd.sdp.repository.ServiceProviderRepository;
import com.klef.fsd.sdp.repository.ServiceRepository;
import com.klef.fsd.sdp.repository.PatientRepository;

@Service
public class AdminServiceImpl implements AdminService
{
	@Autowired
    private AdminRepository adminRepository;
	
	@Autowired
    private ServiceProviderRepository serviceProviderRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ServiceRepository serviceRepository;

	@Autowired
	private PatientRepository patientRepository;
	
	@Override
	public Admin checkadminlogin(String username, String password) 
	{
		return adminRepository.findByUsernameAndPassword(username, password);
	}

	@Override
	public String addserviceprovider(ServiceProvider serviceProvider) 
	{
		serviceProviderRepository.save(serviceProvider);
		return "Service Provider Added Successfully";
	}

	@Override
	public List<ServiceProvider> displayserviceproviders() 
	{
		return serviceProviderRepository.findAll();
	}

	@Override
	public List<Customer> displaycustomers() 
	{
		return customerRepository.findAll();
	}

	@Override
	public String deletecustomer(int cid) 
	{
	    Optional<Customer> customer = customerRepository.findById(cid);
	    
	    if (customer.isPresent()) 
	    {	
	        customerRepository.deleteById(cid);
	        return "Customer Deleted Successfully";
	    } 
	    else 
	    {
	        return "Customer ID Not Found";
	    }
	}

	@Override
	public String deleteserviceprovider(int spid) 
	{
        Optional<ServiceProvider> serviceProvider = serviceProviderRepository.findById(spid);
	    
	    if (serviceProvider.isPresent()) 
	    {	
	        serviceProviderRepository.deleteById(spid);
	        return "Service Provider Deleted Successfully";
	    } 
	    else 
	    {
	        return "Service Provider ID Not Found";
	    }
	}

	@Override
	public long displaycustomercount() 
	{
		return customerRepository.count();
	}

	@Override
	public long displayserviceprovidercount() 
	{
		return serviceProviderRepository.count();
	}

	@Override
	public long displayservicecount() 
	{
		return serviceRepository.count();
	}

	@Override
	public String addadmin(Admin admin)
	{
		adminRepository.save(admin);
		return "Admin Added Successfully";
	}

	@Override
	public long displaymanagercount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long displayeventcount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long displaypatientcount() {
		return patientRepository.count();
	}
}
