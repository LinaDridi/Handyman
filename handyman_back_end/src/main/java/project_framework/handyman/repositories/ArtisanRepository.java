package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Artisan;

@Repository
public interface ArtisanRepository extends JpaRepository<Artisan, Integer> {
}
