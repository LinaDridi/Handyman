package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Service;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Service,Integer> {
    Optional<Service> findByName(String name);
    @Query("Select c.name from Service c where c.name like %:keyword%")
    List<String> autocompleteServices(@Param("keyword") String keyword);
}
