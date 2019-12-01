package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.ArtisanService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.repositories.ArtisanRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ArtisanServiceImpl implements ArtisanService {
    private ArtisanRepository artisanRepo;
    @Autowired
    public ArtisanServiceImpl(ArtisanRepository theartisanrepo){
        artisanRepo=theartisanrepo;
    }
    @Override
   public List<Artisan> findAll(){
       return artisanRepo.findAll();
    }
    @Override
    public Artisan findById(int theId){
        Optional<Artisan> result = artisanRepo.findById(theId);

        Artisan theArtisan = null;

        if (result.isPresent()) {
            theArtisan = result.get();
        }
        else {
            // we didn't find the artisan
            throw new RuntimeException("Did not find artisan id - " + theId);
        }

        return theArtisan;
    }
    @Override
    public void save(Artisan artisan){
    artisanRepo.save(artisan);
    }
    @Override
    public void deleteById(int theId){
        artisanRepo.deleteById(theId);
    }
}
