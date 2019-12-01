package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Project;

import java.util.List;

public interface ProjectService {
    /**
     * Get all the Projects.
     *
     * @return the list of entities
     */
    public List<Project> findAll();

    /**
     * Get Project by id.
     *
     * @return entitie
     */
    public Project findById(int theId);

    /**
     * Save Project.
     *
     */
    public void save(Project project);

    /**
     * delete Project by id.
     *
     */
    public void deleteById(int theId);
}
