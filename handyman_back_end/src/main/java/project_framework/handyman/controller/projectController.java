package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import project_framework.handyman.Services.Interfaces.ContractService;
import project_framework.handyman.Services.Interfaces.ProjectService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Contract;
import project_framework.handyman.models.Devis;
import project_framework.handyman.models.Project;

import javax.mail.MessagingException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class projectController {
    private ProjectService projectService;
    private ContractService contractService;

    @Autowired
    private  ContractController contractController;
    @Autowired
    public projectController(ProjectService projectService ,ContractService contractService,ContractController contractController) {
        this.projectService = projectService;
        this.contractService= contractService;
        this.contractController=contractController;

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

    @GetMapping("/client/getProjects")
    public Set<Project> findByClientUsername(@RequestParam String clientUsername){return this.projectService.findByClientUsername(clientUsername);}
/*@GetMapping("/client/devis")
public Devis getDevis(@RequestParam Long devis_id){
        return this.projectService.findDevisById(devis_id);
}*/
    @GetMapping("/client/project/acceptDevis")
    public HttpEntity<byte[]> acceptDevis(@RequestParam int project_id, @RequestParam Long devis_id) throws IOException {
        Project project=projectService.findById(project_id);
        Devis devis =projectService.findDevisById(devis_id);
        Set<Devis> new_devis = new HashSet<>();
        new_devis.add(devis);
        System.out.println(devis.getId_artisan());
        project.setArtisan_id(devis.getId_artisan());
        project.setAccepted_by_client(true);
        project.setState("started");
        project.setDevis(new_devis);
        projectService.save(project);
        //create contract
        Calendar cal = Calendar.getInstance();
        Date date=cal.getTime();
        DateFormat dateFormat = new SimpleDateFormat("dd/mm/YYYY");
        String formattedDate=dateFormat.format(date);
        Contract contract =new Contract();
        contract.setCreation_date(formattedDate);
        contract.setProject_id(project);
        contractService.save(contract);
        contract.setUrl_pdf_contract("contract#"+contract.getId_contract()+".pdf");
    contractService.save(contract);
    //generate pdf contract
        return contractController.createPdf(contract.getId_contract());
    //in angular front end we need to call after accept offer, the api that sends emails to both craftsman and client(see mailController sendwithattachement )
    }
    @GetMapping("/client/project/declineDevis")
    public void declineDevis(@RequestParam int project_id, @RequestParam Long devis_id) throws IOException {
        Project project=projectService.findById(project_id);
        Devis devis =projectService.findDevisById(devis_id);
        deleteDevis(devis_id);
        projectService.save(project);
    }
    @DeleteMapping("/client/project/deleteDevis")
    public void deleteDevis(@RequestParam Long devis_id){
         projectService.deleteDevis(devis_id);
    }

    }

