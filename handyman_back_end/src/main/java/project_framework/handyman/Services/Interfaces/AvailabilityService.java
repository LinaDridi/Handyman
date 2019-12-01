package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Availability;

import java.util.List;

public interface AvailabilityService {
    /**
     * Get all the Availability.
     *
     * @return the list of entities
     */
    public List<Availability> findAll();

    /**
     * Get Availability by id.
     *
     * @return entitie
     */
    public Availability findById(int theId);

    /**
     * Save Availability.
     *
     */
    public void save(Availability availability);

    /**
     * delete Availability by id.
     *
     */
    public void deleteById(int theId);
}
