package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Service;

import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Service,Integer> {
    Optional<Service> findByName(String name);
}
