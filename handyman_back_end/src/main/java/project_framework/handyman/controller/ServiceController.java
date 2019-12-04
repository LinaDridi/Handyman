package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project_framework.handyman.Services.Interfaces.ServiceService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="*")
@RestController
public class ServiceController {
    @Autowired
    ServiceService serviceService;
    @RequestMapping (value = "/api/autocomplete/service/{keyword}" , method = RequestMethod.GET)
    public ResponseEntity<List<String>> search (@PathVariable("keyword") String keyword){
        try {
            return  new ResponseEntity<List<String>>(serviceService.autocompleteServices(keyword) ,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<List<String>>(HttpStatus.BAD_REQUEST);
        }

    }

}
