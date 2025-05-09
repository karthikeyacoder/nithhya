package com.klef.fsd.sdp.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "billing_table")
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "billing_id")
    private int id;

    @OneToOne
    @JoinColumn(name = "service_booking_id", unique = true)
    private ServiceBooking serviceBooking;

    @Column(nullable = false)
    private double amount;

    @Column(length = 20, nullable = false)
    private String status; // e.g. "Pending", "Paid", "Cancelled"

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ServiceBooking getServiceBooking() {
        return serviceBooking;
    }

    public void setServiceBooking(ServiceBooking serviceBooking) {
        this.serviceBooking = serviceBooking;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
