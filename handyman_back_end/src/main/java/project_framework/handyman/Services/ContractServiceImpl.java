package project_framework.handyman.Services;

//import com.sun.tools.sjavac.comp.dependencies.PublicApiCollector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.ContractService;
import project_framework.handyman.models.Contract;
import project_framework.handyman.repositories.ContractRepository;

import java.util.Optional;

@Service
public class ContractServiceImpl implements ContractService {
    public ContractRepository contractRepository;
    @Autowired
    public ContractServiceImpl(ContractRepository contractRepo)
    {
        contractRepository=contractRepo;
    }
    @Override
    public Contract findById(int theId){
        Optional<Contract> result = contractRepository.findById(theId);

        Contract theContract = null;

        if (result.isPresent()) {

            theContract = result.get();

        }
        else {
            // we didn't find the Project
            throw new RuntimeException("Did not find contract id - " + theId);
        }

        return theContract;
    }
    @Override
    public int findByProject_id(int projectId){
        return contractRepository.findByProject_id(projectId);
    }
    @Override
    public void save(Contract contract){
        contractRepository.save(contract);
    }
}
