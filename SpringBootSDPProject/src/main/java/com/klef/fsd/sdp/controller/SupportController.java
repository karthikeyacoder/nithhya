package com.klef.fsd.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsd.sdp.model.SupportMessage;
import com.klef.fsd.sdp.service.SupportService;

@RestController
@RequestMapping("/support")
@CrossOrigin("*")
public class SupportController {

    @Autowired
    private SupportService supportService;

    @PostMapping("/send")
    public ResponseEntity<SupportMessage> sendMessage(@RequestBody SupportMessage message) {
        SupportMessage savedMessage = supportService.sendMessage(message);
        return ResponseEntity.ok(savedMessage);
    }

    @PostMapping("/reply/{messageId}")
    public ResponseEntity<SupportMessage> replyToMessage(@PathVariable int messageId, @RequestBody String reply) {
        SupportMessage updatedMessage = supportService.replyToMessage(messageId, reply);
        if (updatedMessage != null) {
            return ResponseEntity.ok(updatedMessage);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/bymember/{senderId}")
    public ResponseEntity<List<SupportMessage>> getMessagesBySender(@PathVariable int senderId) {
        List<SupportMessage> messages = supportService.getMessagesBySender(senderId);
        return ResponseEntity.ok(messages);
    }

    @GetMapping("/all")
    public ResponseEntity<List<SupportMessage>> getAllMessages() {
        List<SupportMessage> messages = supportService.getAllMessages();
        return ResponseEntity.ok(messages);
    }
}
