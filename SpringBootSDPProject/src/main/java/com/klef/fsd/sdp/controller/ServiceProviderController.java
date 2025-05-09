package com.klef.fsd.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klef.fsd.sdp.dto.ServiceDTO;
import com.klef.fsd.sdp.model.ServiceBooking;
import com.klef.fsd.sdp.model.Service;
import com.klef.fsd.sdp.model.ServiceProvider;
import com.klef.fsd.sdp.service.ServiceProviderService;

@RestController
@RequestMapping("/serviceprovider")
@CrossOrigin("*")
public class ServiceProviderController 
{
   @Autowired
   private ServiceProviderService serviceProviderService;
	   
   @PostMapping("/checklogin")
   public ResponseEntity<?> checkServiceProviderLogin(@RequestBody ServiceProvider serviceProvider) 
   {
       try 
       {
           ServiceProvider sp = serviceProviderService.checkServiceProviderLogin(serviceProvider.getUsername(), serviceProvider.getPassword());

           if (sp!=null) 
           {
               return ResponseEntity.ok(sp); // if login is successful
           } 
           else 
           {
               return ResponseEntity.status(401).body("Invalid Username or Password"); // if login is fail
           }
       } 
       catch (Exception e) 
       {
           return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
       }
   }

   @PostMapping("/registration")
   public ResponseEntity<String> registration(@RequestBody ServiceProvider serviceProvider)
   {
       try
       {
           String output = serviceProviderService.registration(serviceProvider);
           return ResponseEntity.ok(output);
       }
       catch(Exception e)
       {
           return ResponseEntity.status(500).body("Service Provider Registration Failed ...");
       }
   }

   @PostMapping("/addservice")
   public ResponseEntity<String> addService(@RequestBody ServiceDTO dto) 
   {
       try 
       {
           ServiceProvider serviceProvider = serviceProviderService.getServiceProviderById(dto.serviceProvider_id);

           Service service = new Service();
           service.setCategory(dto.category);
           service.setServiceName(dto.serviceName);
           service.setDescription(dto.description);
           service.setServiceDuration(dto.serviceDuration);
           service.setServicePrice(dto.servicePrice);
           service.setServiceStatus("PENDING");
           service.setServiceProvider(serviceProvider);

           String output = serviceProviderService.addService(service);
           return ResponseEntity.ok(output); // 200 - success
       } 
       catch (Exception e) 
       { 
    	   return ResponseEntity.status(500).body("Failed to Add Service: " + e.getMessage());
       }
   }
   
   @GetMapping("/viewservicesbyprovider/{id}")
   public ResponseEntity<List<Service>> viewServicesByProvider(@PathVariable int id) 
   {
       List<Service> services = serviceProviderService.viewServicesByProvider(id);
       return ResponseEntity.ok(services);
   }


   @GetMapping("/viewbookingsbyprovider/{serviceProviderId}")
   public ResponseEntity<List<ServiceBooking>> viewBookingsByProvider(@PathVariable int serviceProviderId) 
   { 
       List<ServiceBooking> bookings = serviceProviderService.getBookingsByProvider(serviceProviderId);
       return ResponseEntity.ok(bookings);
   }

   @GetMapping("/updatebookingstatus")
   public ResponseEntity<String> updateBookingStatus(@RequestParam int id,@RequestParam String status) 
   { 
       try
       {
    	   String output = serviceProviderService.updateBookingStatus(id, status);
    	   return ResponseEntity.ok(output);
       }
       catch (Exception e) 
       {
    	   System.out.println(e.getMessage());
    	   return ResponseEntity.status(500).body("Error:" + e.getMessage());
	   }
   }


   
}
