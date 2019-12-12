package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import project_framework.handyman.Services.Interfaces.ServiceService;
import project_framework.handyman.models.Service;
import project_framework.handyman.repositories.ServiceRepository;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class ServiceServiceImpl implements ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;
    @Override
    public List<Service> findAll(){
        return serviceRepository.findAll();
    }
    @Override
    public Service findById(int theId){
        Optional<Service> result = serviceRepository.findById(theId);

        Service theService = null;

        if (result.isPresent()) {
            theService = result.get();
        }
        else {
            // we didn't find the service
            throw new RuntimeException("Did not find service id - " + theId);
        }

        return theService;
    }
    @Override
    public void save(Service artisan){
        serviceRepository.save(artisan);
    }
    @Override
    public void deleteById(int theId){
        serviceRepository.deleteById(theId);
    }
    @Override
    public Optional<Service> findByName(String name){ return  serviceRepository.findByName(name);}
    @Override
    public List<String> autocompleteServices (String keyword){
        return serviceRepository.autocompleteServices(keyword);
    }
    @Override
    public List<String> getNames (){return serviceRepository.getNames();}

}
