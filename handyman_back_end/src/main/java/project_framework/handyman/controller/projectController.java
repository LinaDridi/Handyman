package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import project_framework.handyman.Services.Interfaces.ProjectService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Devis;
import project_framework.handyman.models.Project;

import java.net.URI;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
        Project saved_project =projectService.save(project);

        Devis devis = new Devis(null,null,saved_project.getProject_id(),saved_project.getArtisan_id());
        Set<Devis> new_devis =project.getDevis();
        new_devis.add(devis);
        project.setDevis(new_devis);
        projectService.save(project);



    }

    @GetMapping("/project")
    public Project getProject(@RequestParam int id){
        return projectService.findById(id);
    }

    @PostMapping("/suggestProject")
    public void suggestProject(@RequestBody Project project) {
        List<Artisan> artisans = projectService.suggestCraftsman(project);
        Devis devis1= new Devis();
        devis1.setId_artisan(artisans.get(0).getId());
        Devis devis2= new Devis();
        devis2.setId_artisan(artisans.get(1).getId());
        Devis devis3= new Devis();
        devis3.setId_artisan(artisans.get(2).getId());
        Set<Devis> devis = new HashSet<>();
        devis.add(devis1);
        devis.add(devis2);
        devis.add(devis3);
        project.setDevis(devis);
        projectService.save(project);
    }

    @GetMapping("/proposedprojects")
    public Set<Project> proposedProjects(@RequestParam Long id) {
       return this.projectService.getProposedProjects(id);
    }
}
