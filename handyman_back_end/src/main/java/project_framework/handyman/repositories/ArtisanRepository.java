package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Artisan;

import java.util.Optional;

@Repository
public interface ArtisanRepository extends JpaRepository<Artisan, Integer> {
    Optional<Artisan> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    public void deleteById(long theId);

    public Optional<Artisan> findById(Long theId);
}
