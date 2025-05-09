package com.klef.fsd.sdp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.sdp.model.HomeService;
import com.klef.fsd.sdp.model.ServiceProvider;

@Repository
public interface HomeServiceRepository extends JpaRepository<HomeService, Integer> 
{
	public List<HomeService> findByServiceProvider(ServiceProvider serviceProvider);
	
	// Add other query methods if needed
}
