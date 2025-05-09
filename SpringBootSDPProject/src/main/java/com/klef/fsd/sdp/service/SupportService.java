package com.klef.fsd.sdp.service;

import java.util.List;

import com.klef.fsd.sdp.model.SupportMessage;

public interface SupportService {
    SupportMessage sendMessage(SupportMessage message);
    SupportMessage replyToMessage(int messageId, String reply);
    List<SupportMessage> getMessagesBySender(int senderId);
    List<SupportMessage> getAllMessages();
}
