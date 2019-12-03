package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import project_framework.handyman.Services.Interfaces.ProjectService;
import project_framework.handyman.models.Project;

import java.net.URI;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class projectController {
    private ProjectService projectService;
    @Autowired
    public projectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping("/addProject")
    public void createProject(@RequestBody Project project) {
        projectService.save(project);

    }

    @GetMapping("/project")
    public Project getProject(@RequestParam int id){
        return projectService.findById(id);
    }

}
