package com.klef.fsd.sdp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.sdp.dto.ServiceDTO;
import com.klef.fsd.sdp.dto.ServiceRequest;
import com.klef.fsd.sdp.model.Service;
import com.klef.fsd.sdp.service.ServiceService;

@RestController
@RequestMapping("/service")
public class ServiceController 
{
    @Autowired
    private ServiceService serviceService;

    @PostMapping("/addservice")
    public ResponseEntity<String> addService(@RequestBody ServiceRequest serviceRequest) {
        try {
            Service s = new Service();
            s.setCategory(serviceRequest.getCategory());
            s.setServiceName(serviceRequest.getServiceName());
            s.setDescription(serviceRequest.getDescription());
            s.setServiceDuration(serviceRequest.getServiceDuration());
            s.setServicePrice(serviceRequest.getServicePrice());
            s.setServiceStatus(serviceRequest.getServiceStatus());
            // Assuming serviceProvider is fetched by id, need to implement fetching ServiceProvider entity
            // For now, set null or implement later
            s.setServiceProvider(null);

            String output = serviceService.addService(s);
            return ResponseEntity.ok(output);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/viewallservices")
    public ResponseEntity<List<ServiceDTO>> viewAllServices() 
    {
        List<Service> serviceList = serviceService.viewAllServices();
        List<ServiceDTO> serviceDTOList = new ArrayList<>();

        for (Service s : serviceList) {
            ServiceDTO dto = new ServiceDTO();
            dto.setCategory(s.getCategory());
            dto.setServiceName(s.getServiceName());
            dto.setDescription(s.getDescription());
            dto.setServiceDuration(s.getServiceDuration());
            dto.setServicePrice(s.getServicePrice());
            dto.setServiceProvider_id(s.getServiceProvider() != null ? s.getServiceProvider().getId() : 0);
            serviceDTOList.add(dto);
        }

        return ResponseEntity.ok(serviceDTOList);
    }

    @GetMapping("/displayserviceimage")
    public ResponseEntity<byte[]> displayServiceImage(@RequestParam int id) throws Exception
    {
        Service service = serviceService.viewServiceById(id);
        byte[] imageBytes = null;
        // Assuming Service model has getImage method returning Blob or similar
        // If not, this needs to be adjusted accordingly
        // imageBytes = service.getImage().getBytes(1, (int) service.getImage().length());
        // For now, return empty byte array or implement image handling later
        imageBytes = new byte[0];

        return ResponseEntity.ok().contentType(org.springframework.http.MediaType.IMAGE_JPEG).body(imageBytes);
    }

    @PostMapping("/displayservicebyid")
    public ResponseEntity<ServiceDTO> displayServiceById(@RequestParam int sid)
    {
        Service s = serviceService.viewServiceById(sid);

        ServiceDTO dto = new ServiceDTO();

        dto.setCategory(s.getCategory());
        dto.setServiceName(s.getServiceName());
        dto.setDescription(s.getDescription());
        dto.setServiceDuration(s.getServiceDuration());
        dto.setServicePrice(s.getServicePrice());
        dto.setServiceProvider_id(s.getServiceProvider() != null ? s.getServiceProvider().getId() : 0);

        return ResponseEntity.ok(dto);
    }
}
