package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_framework.handyman.Services.Interfaces.ArtisanService;
import project_framework.handyman.Services.Interfaces.ServiceService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.ArtisanSignUpForm;
import project_framework.handyman.models.Service;
import project_framework.handyman.models.SignUpForm;
import project_framework.handyman.repositories.ServiceRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins="*")
@RestController
public class ServiceController {
    @Autowired
    private ArtisanService artisanService;
    @Autowired
    ServiceService serviceService;
    @Autowired
    private ServiceRepository serviceRepository;
    @RequestMapping (value = "/api/services" , method = RequestMethod.GET)
    public ResponseEntity<List<String>> getServices (){
        try {
            return  new ResponseEntity<List<String>>(serviceService.getNames() ,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<List<String>>(HttpStatus.BAD_REQUEST);
        }

    }


    @RequestMapping (value = "/api/autocomplete/service/{keyword}" , method = RequestMethod.GET)
    public ResponseEntity<List<String>> search (@PathVariable("keyword") String keyword){
        try {
            return  new ResponseEntity<List<String>>(serviceService.autocompleteServices(keyword) ,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<List<String>>(HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/api/addservice", method = RequestMethod.POST)
    public ResponseEntity<?> addService(@RequestBody ArtisanSignUpForm req) {
        try {
            Artisan artisan = artisanService.findById(req.getId());

            if (req.getServices() != null && !req.getServices().isEmpty()) {
                Set<String> services = req.getServices();
                Set<Service> ser = new HashSet<Service>();
                services.forEach(service -> {
                  Service s = serviceRepository.getByName(service);
                  System.out.println(s);
                    if (s == null ) {
                         Service serv = new Service(service);
                        serviceService.save(serv);
                        ser.add(serv);

                    }

                    else {ser.add(s);}

                });
                artisan.setServices(ser);

                artisanService.save(artisan);

            }
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return  ResponseEntity.badRequest().build();

        }

    }


}
