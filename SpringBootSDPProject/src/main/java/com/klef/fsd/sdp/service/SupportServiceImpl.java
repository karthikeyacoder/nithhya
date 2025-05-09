package com.klef.fsd.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.SupportMessage;
import com.klef.fsd.sdp.repository.SupportMessageRepository;

@Service
public class SupportServiceImpl implements SupportService {

    @Autowired
    private SupportMessageRepository supportMessageRepository;

    @Override
    public SupportMessage sendMessage(SupportMessage message) {
        return supportMessageRepository.save(message);
    }

    @Override
    public SupportMessage replyToMessage(int messageId, String reply) {
        SupportMessage message = supportMessageRepository.findById(messageId).orElse(null);
        if (message != null) {
            message.setReply(reply);
            return supportMessageRepository.save(message);
        }
        return null;
    }

    @Override
    public List<SupportMessage> getMessagesBySender(int senderId) {
        return supportMessageRepository.findBySenderId(senderId);
    }

    @Override
    public List<SupportMessage> getAllMessages() {
        return supportMessageRepository.findAll();
    }
}
