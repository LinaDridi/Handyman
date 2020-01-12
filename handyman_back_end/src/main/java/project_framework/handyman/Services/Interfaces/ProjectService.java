package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Devis;
import project_framework.handyman.models.Project;

import java.util.List;
import java.util.Set;

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
    public Project save(Project project);
    //public void save(Project project);

    /**
     * delete Project by id.
     *
     */
    public void deleteById(int theId);
    public List<Artisan> suggestCraftsman(Project project);
    public Set<Project> getProposedProjects(Long id);
    public Set<Project> findByClientUsername(String clientUsername);
    public Devis findDevisById(Long devis_id);
    public void deleteDevis(Long devis_id);
}
