package com.klef.fsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.sdp.model.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Integer> {

}
