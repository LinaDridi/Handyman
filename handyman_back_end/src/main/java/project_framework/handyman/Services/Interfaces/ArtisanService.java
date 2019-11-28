package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Artisan;

import java.util.List;

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
    public Artisan findById(int theId);

    /**
     * Save artisan.
     *
     */
    public void save(Artisan artisan);

    /**
     * delete artisan by id.
     *
     */
    public void deleteById(int theId);
}
