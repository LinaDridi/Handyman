package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project,Integer> {
}
