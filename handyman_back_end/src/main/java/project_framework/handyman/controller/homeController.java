package project_framework.handyman.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="*")
@RestController
public class homeController {
    @RequestMapping(value = "/home", method = RequestMethod.POST)
    @PreAuthorize("hasRole('USER') or hasRole('ARTISAN')")
    public ResponseEntity<?> hello(@RequestBody String data) {
        try {

            System.out.println(data);
            return ResponseEntity.ok().build();
        }
        catch (Exception e){
            System.out.println(e);}
        return  ResponseEntity.badRequest().build();
    }

}
