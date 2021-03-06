package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
}
