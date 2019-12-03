package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.AvailabilityService;
import project_framework.handyman.models.Availability;
import project_framework.handyman.repositories.AvailabilityRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AvailabilityServiceImpl implements AvailabilityService {
    @Autowired
    public AvailabilityRepository availabilityRepository;
    @Override
    public List<Availability> findAll(){
        return availabilityRepository.findAll();
    }
    @Override
    public Availability findById(int theId){
        Optional<Availability> result = availabilityRepository.findById(theId);

        Availability theAvailability = null;

        if (result.isPresent()) {
            theAvailability = result.get();
        }
        else {
            // we didn't find the artisan
            throw new RuntimeException("Did not find Availability id - " + theId);
        }

        return theAvailability;
    }
    @Override
    public void save(Availability availability){
        availabilityRepository.save(availability);
    }
    @Override
    public void deleteById(int theId){
        availabilityRepository.deleteById(theId);
    }
}
