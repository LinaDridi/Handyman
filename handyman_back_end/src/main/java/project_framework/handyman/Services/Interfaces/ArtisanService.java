package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Project;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface ArtisanService {
    /**
     * Get all the artisans.
     *
     * @return the list of entities
     */
    public List<Artisan> findAll();

    /**
     * Get artisan by id.
     *
     * @return entitie
     */
    public Artisan findById(Long theId);

    /**
     * Save artisan.
     *
     */
    public void save(Artisan artisan);

    /**
     * delete artisan by id.
     *
     */
    public void deleteById(long theId);
    public Optional<Artisan> findByUsername(String username);
    public Boolean existsByUsername(String username);
    public Boolean existsByEmail(String email);
    List<Artisan> filterByService(String keyword);
    List<Artisan> filter(String name ,String serv,String address);
    public List<String> autocompleteNames (String keyword);
    public List<String> autocompleteAddress (String keyword);
    public Set<Project> getArtisanProjects(Long theId);
}
