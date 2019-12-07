package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.ContractSerivce;
import project_framework.handyman.models.Contract;
import project_framework.handyman.repositories.ContractRepository;

import java.util.Optional;

@Service
public class ContractServiceImpl implements ContractSerivce {
    public ContractRepository contractRepository;
    @Autowired
    public ContractServiceImpl(ContractRepository contractRepo)
    {
        contractRepository=contractRepo;
    }
    @Override
    public Contract findById(int theId){
        Optional<Contract> result = contractRepository.findById(theId);

        Contract theProject = null;

        if (result.isPresent()) {

            theProject = result.get();

        }
        else {
            // we didn't find the Project
            throw new RuntimeException("Did not find Project id - " + theId);
        }

        return theProject;
    }
    @Override
    public void save(Contract contract){
        contractRepository.save(contract);
    }
}
