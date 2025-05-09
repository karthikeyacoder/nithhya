package com.klef.fsd.sdp.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "support_message_table")
public class SupportMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private Customer sender;

    @Column(length = 1000, nullable = false)
    private String message;

    @Column(length = 1000)
    private String reply;

    @Column(nullable = false)
    private LocalDateTime sentAt;

    @Column
    private LocalDateTime repliedAt;

    @PrePersist
    protected void onCreate() {
        sentAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        repliedAt = LocalDateTime.now();
    }

    // Getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Customer getSender() {
        return sender;
    }

    public void setSender(Customer sender) {
        this.sender = sender;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }

    public LocalDateTime getSentAt() {
        return sentAt;
    }

    public LocalDateTime getRepliedAt() {
        return repliedAt;
    }
}
