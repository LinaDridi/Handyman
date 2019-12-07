package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project_framework.handyman.models.Contract;

public interface ContractRepository extends JpaRepository<Contract,Integer> {

}
