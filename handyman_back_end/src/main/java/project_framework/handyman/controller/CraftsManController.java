package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import project_framework.handyman.Services.Interfaces.*;
import project_framework.handyman.message.ResponseMessage;
import project_framework.handyman.models.*;
import project_framework.handyman.repositories.ArtisanRepository;
import project_framework.handyman.repositories.RoleRepository;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class CraftsManController {
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
    RoleRepository roleRepository;

    @Autowired
    ArtisanRepository artisanRepository;

    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/artisans")
    public List<Artisan> getArtisans(){
        return artisanService.findAll();
    }

    @GetMapping("/artisan")
    public Artisan getArtisan(@RequestParam Long id){
        return artisanService.findById(id);
    }

    @PostMapping("/auth/signupartisan")
    public ResponseEntity<?> registerUser(@RequestBody ArtisanSignUpForm signUpRequest)
    {
        if (artisanRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
        if (artisanRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
        Artisan artisan=new Artisan(signUpRequest.getFirstname(),signUpRequest.getLastname(), signUpRequest.getUsername(), signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),signUpRequest.getBirth(),signUpRequest.getAddress(),signUpRequest.getJob(),
                signUpRequest.getPhone(),signUpRequest.getRate(),signUpRequest.getType(),signUpRequest.getDescription(),signUpRequest.getImg());
        //getServices
        if(signUpRequest.getServices() != null ) {
            Set<String> services = signUpRequest.getServices();
            Set<Service> ser = new HashSet<Service>();
            services.forEach(service -> {
                Service s = serviceService.findByName(service).orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Service not find."));
                ser.add(s);
            });
            artisan.setServices(ser);
        }
        //getroles
        Set<String> strRoles=signUpRequest.getRoles();
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
        if(signUpRequest.getAvailability() != null) {
            Availability availability = signUpRequest.getAvailability();
            availabilityService.save(availability);
            Availability avai = availabilityService.findAll().get(availabilityService.findAll().size() - 1);
            artisan.setAvailability_id(avai);
        }
        if(signUpRequest.getSchedule() != null) {
            Schedule schedule = signUpRequest.getSchedule();
            scheduleService.save(schedule);
            Schedule sch = scheduleService.findAll().get(scheduleService.findAll().size() - 1);
            artisan.setSchedule_id(sch);
        }
        artisanService.save(artisan);
        return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
    }

    @GetMapping("/deleteartisan")
    public void deleteArtisan(@RequestParam long id){
        artisanService.deleteById(id); }

    @PostMapping("/editartisan")
    public void editArtisan(@RequestBody ArtisanSignUpForm signUpRequest){
        Artisan artisan=artisanService.findById(signUpRequest.getId());
        if(signUpRequest.getSchedule()!=null){
        Schedule schedule=signUpRequest.getSchedule();
        scheduleService.save(schedule);
        Schedule sch=scheduleService.findAll().get(scheduleService.findAll().size()-1);
        artisan.setSchedule_id(sch);}
        if(signUpRequest.getAvailability()!=null){
        Availability availability=signUpRequest.getAvailability();
        availabilityService.save(availability);
        Availability avai=availabilityService.findAll().get(availabilityService.findAll().size()-1);
        artisan.setAvailability_id(avai);}
        if(signUpRequest.getServices()!=null&&!signUpRequest.getServices().isEmpty()){
        Set<String> services = signUpRequest.getServices();
        Set<Service> ser = new HashSet<Service>();
        services.forEach(service ->{
            Service s = serviceService.findByName(service).orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Service not find."));
            ser.add(s);});
        artisan.setServices(ser);}
        if(signUpRequest.getAddress()!=null)
        artisan.setAddress(signUpRequest.getAddress());
        if(signUpRequest.getBirth()!=null)
        artisan.setBirth(signUpRequest.getBirth());
        if(signUpRequest.getFirstname()!=null)
        artisan.setFirstname(signUpRequest.getFirstname());
        if(signUpRequest.getDescription()!=null)
        artisan.setDescription(signUpRequest.getDescription());
        if(signUpRequest.getImg()!=null)
        artisan.setImg(signUpRequest.getImg());
        if(signUpRequest.getJob()!=null)
        artisan.setJob(signUpRequest.getJob());
        if(signUpRequest.getPhone()!=null)
        artisan.setPhone(signUpRequest.getPhone());
        if(signUpRequest.getEmail()!=null)
        artisan.setEmail(signUpRequest.getEmail());
        if(signUpRequest.getUsername()!=null)
        artisan.setUsername(signUpRequest.getUsername());
        if(signUpRequest.getLastname()!=null)
        artisan.setLastname(signUpRequest.getLastname());
        Set<Project> pr=signUpRequest.getProjects();
        if(pr!=null&&!pr.isEmpty()){
        Set<Project> projects=new HashSet<Project>();
        pr.forEach(project -> {
            projectService.save(project);
            Project p=projectService.findAll().get(projectService.findAll().size()-1);
            projects.add(p);
        });
        artisan.setProjects(projects);}
        artisanService.save(artisan);
    }
}
