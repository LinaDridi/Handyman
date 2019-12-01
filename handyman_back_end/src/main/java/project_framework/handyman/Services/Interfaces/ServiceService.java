package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Service;

import java.util.List;

public interface ServiceService {
    /**
     * Get all the services.
     *
     * @return the list of entities
     */
    public List<Service> findAll();

    /**
     * Get service by id.
     *
     * @return entitie
     */
    public Service findById(int theId);

    /**
     * Save service.
     *
     */
    public void save(Service service);

    /**
     * delete service by id.
     *
     */
    public void deleteById(int theId);
}
