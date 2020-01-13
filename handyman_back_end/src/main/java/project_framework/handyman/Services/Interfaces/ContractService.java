package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Contract;

public interface ContractService {

    public Contract findById(int theId);
    public int findByProject_id(int theId);

    /**
     * Save Project.
     *
     */
    public void save(Contract contract);

    /**
     * delete Project by id.
     *
     */
}
