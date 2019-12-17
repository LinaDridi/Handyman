package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project_framework.handyman.Services.Interfaces.ArtisanService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Project;
import project_framework.handyman.repositories.ArtisanRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Transactional
@Service
public class ArtisanServiceImpl implements ArtisanService {
    @Autowired
    private ArtisanRepository artisanRepo;

    @Override
    public List<Artisan> findAll() {
        return artisanRepo.findAll();
    }

    @Override
    public Artisan findById(Long theId) {
        Optional<Artisan> result = artisanRepo.findById(theId);

        Artisan theArtisan = null;

        if (result.isPresent()) {
            theArtisan = result.get();
        } else {
            // we didn't find the artisan
            throw new RuntimeException("Did not find artisan id - " + theId);
        }

        return theArtisan;
    }

    @Override
    public void save(Artisan artisan) {
        artisanRepo.save(artisan);
    }

    @Override
    public void deleteById(long theId) {
        artisanRepo.deleteById(theId);
    }

    @Override
    public Optional<Artisan> findByUsername(String username) {
        return artisanRepo.findByUsername(username);
    }

    @Override
    public Boolean existsByUsername(String username) {
        return artisanRepo.existsByUsername(username);
    }

    public Boolean existsByEmail(String email) {
        return artisanRepo.existsByEmail(email);
    }

    @Override
    public List<Artisan> filterByService(String keyword) {
        return artisanRepo.filterByService(keyword);
    }

    @Override
    public List<Artisan> filter(String name, String serv,String address){
        return artisanRepo.filter(name,serv,address);
    }
    @Override
    public List<String> autocompleteNames (String keyword){
        return artisanRepo.autocompleteNames(keyword);
    }
    @Override
    public List<String> autocompleteAddress (String keyword){
        return artisanRepo.autocompleteAddress(keyword);
    }


    public Set<Project> getArtisanProjects(Long theId){

        Artisan artisan = this.findById(theId);
        return artisan.getProjects();
    }

    public List<Artisan> findArtiasnBy(String service, String start_date){
        return artisanRepo.findArtiasnBy(service, start_date);
    }
}
