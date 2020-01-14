package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.MessageService;
import project_framework.handyman.models.Message;
import project_framework.handyman.repositories.MessageRepository;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    MessageRepository messageRepository;
    @Override
    public void save(Message message) {
        messageRepository.save(message);
    }
}
