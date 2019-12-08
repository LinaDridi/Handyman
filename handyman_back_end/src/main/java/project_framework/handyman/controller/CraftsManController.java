package project_framework.handyman.controller;

import com.itextpdf.text.Document;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.parameters.P;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import project_framework.handyman.Services.Interfaces.ArtisanService;
import project_framework.handyman.Services.Interfaces.ProjectService;
import project_framework.handyman.Services.Interfaces.ServiceService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Project;
import project_framework.handyman.models.Role;
import project_framework.handyman.models.Service;
import project_framework.handyman.Services.Interfaces.*;
import project_framework.handyman.message.ResponseMessage;
import project_framework.handyman.models.*;
import project_framework.handyman.repositories.ArtisanRepository;
import project_framework.handyman.repositories.RateRepository;
import project_framework.handyman.repositories.RoleRepository;

import javax.validation.constraints.Null;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class CraftsManController {
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    RateRepository rateRepository;
    @Autowired
    ArtisanRepository artisanRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private ArtisanService artisanService;
    @Autowired
    private ServiceService serviceService;

    @Autowired
    private AvailabilityService availabilityService;
    @Autowired
    private ScheduleService scheduleService;
    @Autowired
    private ProjectService projectService;
    @Autowired
    public CraftsManController(ArtisanService theartisanservice, ServiceService theserviceservice, ProjectService theprojectService){
        artisanService=theartisanservice;
        serviceService=theserviceservice;
        projectService=theprojectService;
    }

    @GetMapping("/artisans")
    public List<Artisan> getArtisans() {
        return artisanService.findAll();
    }

    @GetMapping("/artisan")
    public Artisan getArtisan(@RequestParam Long id) {
        return artisanService.findById(id);
    }

    @PostMapping("/auth/signupartisan")
    public ResponseEntity<?> registerUser(@RequestBody ArtisanSignUpForm signUpRequest) {
        if (artisanRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
        if (artisanRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
        Artisan artisan = new Artisan(signUpRequest.getFirstname(), signUpRequest.getLastname(), signUpRequest.getUsername(), signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()), signUpRequest.getBirth(), signUpRequest.getAddress(), signUpRequest.getJob(),
                signUpRequest.getPhone(), signUpRequest.getRate(), signUpRequest.getType(), signUpRequest.getDescription(), signUpRequest.getImg());
        //getServices
        if (signUpRequest.getServices() != null) {
            Set<String> services = signUpRequest.getServices();
            Set<Service> ser = new HashSet<Service>();
            services.forEach(service -> {
                Service s = serviceService.findByName(service).orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Service not find."));
                ser.add(s);
            });
            artisan.setServices(ser);
        }
        //getroles
        Set<String> strRoles = signUpRequest.getRoles();
        System.out.println(strRoles);
        Set<Role> roles = new HashSet<>();

        strRoles.forEach(role -> {
            switch (role) {
                case "artisan":
                    Role adminRole = roleRepository.findByName(RoleName.ROLE_ARTISAN)
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                    roles.add(adminRole);

                    break;
                case "pm":
                    Role pmRole = roleRepository.findByName(RoleName.ROLE_PM)
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                    roles.add(pmRole);

                    break;
                default:
                    Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                    roles.add(userRole);
            }
        });

        artisan.setRoles(roles);
        //getdispo
        if (signUpRequest.getAvailability() != null) {
            Availability availability = signUpRequest.getAvailability();
            availabilityService.save(availability);
            Availability avai = availabilityService.findAll().get(availabilityService.findAll().size() - 1);
            artisan.setAvailability_id(avai);
        }
        if (signUpRequest.getSchedule() != null) {
            Schedule schedule = signUpRequest.getSchedule();
            scheduleService.save(schedule);
            Schedule sch = scheduleService.findAll().get(scheduleService.findAll().size() - 1);
            artisan.setSchedule_id(sch);
        }
        artisanService.save(artisan);
        return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
    }

    @GetMapping("/deleteartisan")
    @CrossOrigin(origins = "*")
    @GetMapping("/artisan/projects")
    public List<Project> getArtisanProjects(@RequestParam int id){
        return artisanService.getArtisanProjects(id);
    }
@PostMapping("/artisan/project/offer")
    public void postOffer(@RequestParam int idProject,@RequestParam int cost , @RequestParam String currency)
    {
        Project project=projectService.findById(idProject);

        project.setAccepted_by_artisan(true);
        project.setCost(cost);
        project.setCurrency(currency);
        projectService.save(project);

    }

    @PostMapping("/artisan/project/decline")
    public void declineProject(@RequestParam int idProject)
    {
        Project project=projectService.findById(idProject);

        project.setAccepted_by_artisan(false);
        project.setCost(-1);
        project.setCurrency(null);
        projectService.save(project);

    }
    public void deleteArtisan(@RequestParam long id) {
        artisanService.deleteById(id);
    }

    @PostMapping("/editartisan")
    public void editArtisan(@RequestBody ArtisanSignUpForm signUpRequest) {
        Artisan artisan = artisanService.findById(signUpRequest.getId());
        if (signUpRequest.getSchedule() != null) {
            Schedule schedule = signUpRequest.getSchedule();
            scheduleService.save(schedule);
            Schedule sch = scheduleService.findAll().get(scheduleService.findAll().size() - 1);
            artisan.setSchedule_id(sch);
        }
        if (signUpRequest.getAvailability() != null) {
            Availability availability = signUpRequest.getAvailability();
            availabilityService.save(availability);
            Availability avai = availabilityService.findAll().get(availabilityService.findAll().size() - 1);
            artisan.setAvailability_id(avai);
        }
        if (signUpRequest.getServices() != null && !signUpRequest.getServices().isEmpty()) {
            Set<String> services = signUpRequest.getServices();
            Set<Service> ser = new HashSet<Service>();
            services.forEach(service -> {
                Service s = serviceService.findByName(service).orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Service not find."));
                ser.add(s);
            });
            artisan.setServices(ser);
        }
        if (signUpRequest.getAddress() != null)
            artisan.setAddress(signUpRequest.getAddress());
        if (signUpRequest.getBirth() != null)
            artisan.setBirth(signUpRequest.getBirth());
        if (signUpRequest.getFirstname() != null)
            artisan.setFirstname(signUpRequest.getFirstname());
        if (signUpRequest.getDescription() != null)
            artisan.setDescription(signUpRequest.getDescription());
        if (signUpRequest.getImg() != null)
            artisan.setImg(signUpRequest.getImg());
        if (signUpRequest.getJob() != null)
            artisan.setJob(signUpRequest.getJob());
        if (signUpRequest.getPhone() != null)
            artisan.setPhone(signUpRequest.getPhone());
        if (signUpRequest.getEmail() != null)
            artisan.setEmail(signUpRequest.getEmail());
        if (signUpRequest.getUsername() != null)
            artisan.setUsername(signUpRequest.getUsername());
        if (signUpRequest.getLastname() != null)
            artisan.setLastname(signUpRequest.getLastname());
        Set<Project> pr = signUpRequest.getProjects();
        if (pr != null && !pr.isEmpty()) {
            Set<Project> projects = new HashSet<Project>();
            pr.forEach(project -> {
                projectService.save(project);
                Project p = projectService.findAll().get(projectService.findAll().size() - 1);
                projects.add(p);
            });
            artisan.setProjects(projects);
        }
        artisanService.save(artisan);
    }

    @RequestMapping(value = "/filter/service/{keyword}", method = RequestMethod.GET)
    public ResponseEntity<List<Artisan>> filterByService(@PathVariable("keyword") String keyword) {
        try {
            return new ResponseEntity<List<Artisan>>(artisanService.filterByService(keyword), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<List<Artisan>>(HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/filter/all", method = RequestMethod.GET)
    public ResponseEntity<List<Artisan>> filterByService(@RequestParam(required = false) String name, @RequestParam(required = false) String serv, @RequestParam(required = false) String address) {
        try {
            return new ResponseEntity<List<Artisan>>(artisanService.filter(name, serv, address), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<List<Artisan>>(HttpStatus.BAD_REQUEST);
        }
    }


    @RequestMapping(value = "/autocomplete/name/{keyword}", method = RequestMethod.GET)
    public ResponseEntity<List<String>> autocompleteNames(@PathVariable("keyword") String keyword) {
        try {
            return new ResponseEntity<List<String>>(artisanService.autocompleteNames(keyword), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<List<String>>(HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/autocomplete/address/{keyword}", method = RequestMethod.GET)
    public ResponseEntity<List<String>> autocompleteAddress(@PathVariable("keyword") String keyword) {
        try {
            return new ResponseEntity<List<String>>(artisanService.autocompleteAddress(keyword), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<List<String>>(HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/rate", method = RequestMethod.POST)
    public ResponseEntity<?> rate( @RequestBody Rate req) {
        try {
            Artisan artisan = artisanService.findById(req.getId_artisan());
           int r= artisan.getRate()+1;
            artisan.setRate(r);
            Rate rate = new Rate(req.getId_artisan(),req.getUsername_client());
            rateRepository.save(rate);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return  ResponseEntity.badRequest().build();

        }



        }
    @RequestMapping(value = "/israted", method = RequestMethod.GET)
    public ResponseEntity<Integer> israted (@RequestParam Long artisan, @RequestParam String client){
        try {
            System.out.println("1");
            int val = (rateRepository.getRate(artisan, client));
            System.out.println("2");

            return new ResponseEntity<Integer>(val,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
        }


    }

}
