package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import project_framework.handyman.models.Contract;
import project_framework.handyman.models.Devis;

public interface ContractRepository extends JpaRepository<Contract,Integer> {
    @Query("Select  d.id_contract from Contract d where d.project_id.project_id=:project_id")
    int findByProject_id(@Param("project_id")int project_id);
}
