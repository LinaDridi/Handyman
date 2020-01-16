package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import project_framework.handyman.Services.Interfaces.ArtisanService;
import project_framework.handyman.Services.Interfaces.ContractService;
import project_framework.handyman.Services.Interfaces.InvoiceService;
import project_framework.handyman.Services.Interfaces.ProjectService;
import project_framework.handyman.Services.MailService;
import project_framework.handyman.models.*;

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
    private InvoiceService invoiceService;
    @Autowired
    private ArtisanService artisanService;

    @Autowired
    private ContractController contractController;
    @Autowired
    private InvoiceController invoiceController;
    @Autowired
    private MailService mailService;

    @Autowired
    private CraftsManController craftsManController;

    @Autowired
    public projectController(ProjectService projectService, ContractService contractService, ContractController contractController,InvoiceService invoiceService,InvoiceController invoiceController) {
        this.projectService = projectService;
        this.contractService = contractService;
        this.invoiceService= invoiceService;
        this.contractController = contractController;
        this.invoiceController= invoiceController;

    }

    @PostMapping("/addProject")
    public void createProject(@RequestBody Project project) {
        Project saved_project = projectService.save(project);

        Devis devis = new Devis(null, null, saved_project.getProject_id(), saved_project.getArtisan_id());
        Set<Devis> new_devis = project.getDevis();
        new_devis.add(devis);
        project.setDevis(new_devis);
        projectService.save(project);


    }

    @GetMapping("/project")
    public Project getProject(@RequestParam int id) {
        return projectService.findById(id);
    }

    @PostMapping("/suggestProject")
    public void suggestProject(@RequestBody Project project) {
        List<Artisan> artisans = projectService.suggestCraftsman(project);
        if (artisans != null) {
            Set<Devis> devis = new HashSet<>();
            Devis devis1 = new Devis();
            devis1.setId_artisan(artisans.get(0).getId());
            devis.add(devis1);
            if (artisans.get(1) != null) {
                Devis devis2 = new Devis();
                devis2.setId_artisan(artisans.get(1).getId());
                devis.add(devis2);
                if (artisans.get(2) != null) {
                    Devis devis3 = new Devis();
                    devis3.setId_artisan(artisans.get(2).getId());
                    devis.add(devis3);
                }
            }
            project.setDevis(devis);
            projectService.save(project);
        }
    }

    @GetMapping("/proposedprojects")
    public Set<Project> proposedProjects(@RequestParam Long id) {
        return this.projectService.getProposedProjects(id);
    }

    @GetMapping("/client/getProjects")
    public Set<Project> findByClientUsername(@RequestParam String clientUsername) {
        return this.projectService.findByClientUsername(clientUsername);
    }

    /*@GetMapping("/client/devis")
    public Devis getDevis(@RequestParam Long devis_id){
            return this.projectService.findDevisById(devis_id);
    }*/
    @GetMapping("/client/project/acceptDevis")
    public HttpEntity<byte[]> acceptDevis(@RequestParam int project_id, @RequestParam Long devis_id) throws IOException, MessagingException {
        Project project = projectService.findById(project_id);
        Devis devis = projectService.findDevisById(devis_id);
        Set<Devis> new_devis = new HashSet<>();
        new_devis.add(devis);
        System.out.println(devis.getId_artisan());
        project.setArtisan_id(devis.getId_artisan());
        //project.setAccepted_by_client(true);
        project.setState("started");
        project.setDevis(new_devis);
        projectService.save(project);
        Artisan artisan = artisanService.findById(project.getArtisan_id());
        User user = craftsManController.findByname(project.getClient_username());
        Set<Project> new_project = new HashSet<>();
        new_project.add(project);
        artisan.setProjects(new_project);
        artisanService.save(artisan);
        //create contract
        Calendar cal = Calendar.getInstance();
        Date date = cal.getTime();
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/YYYY");
        String formattedDate = dateFormat.format(date);
        Contract contract = new Contract();
        contract.setCreation_date(formattedDate);
        contract.setProject_id(project);
        contractService.save(contract);
        contract.setUrl_pdf_contract("contract#" + contract.getId_contract() + ".pdf");
        contractService.save(contract);
        //generate pdf contract
        byte[] ba = contractController.createPdf(contract.getId_contract());
        mailService.sendMailFileBytes(user, artisan, ba,contract);
        return new HttpEntity(ba);
        //in angular front end we need to call after accept offer, the api that sends emails to both craftsman and client(see mailController sendwithattachement )
    }

    @GetMapping("/client/project/pay")
    public HttpEntity<byte[]> payprocess(@RequestParam int project_id) throws IOException, MessagingException {
        Project project = projectService.findById(project_id);
        Devis devis = project.getDevis().iterator().next();
        System.out.println(devis);
        project.setState("payed");
        projectService.save(project);
        Artisan artisan = artisanService.findById(project.getArtisan_id());
        User user = craftsManController.findByname(project.getClient_username());
        //create invoice
        Calendar cal = Calendar.getInstance();
        Date date = cal.getTime();
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/YYYY");
        String formattedDate = dateFormat.format(date);
        Invoice invoice = new Invoice();
        invoice.setCreation_date(formattedDate);
        invoice.setProject_id(project);
        invoiceService.save(invoice);
        invoice.setUrl_pdf_invoice("invoice#" + invoice.getId_invoice() + ".pdf");
        invoiceService.save(invoice);
        //generate pdf contract
        byte[] ba = invoiceController.createPdf(invoice.getId_invoice());
        mailService.sendMailInvoiceBytes(user, artisan, ba,invoice);
        return new HttpEntity(ba);
        //in angular front end we need to call after accept offer, the api that sends emails to both craftsman and client(see mailController sendwithattachement )
    }

    @GetMapping("/client/project/declineDevis")
    public void declineDevis(@RequestParam int project_id, @RequestParam Long devis_id) throws IOException {
        Project project = projectService.findById(project_id);
        Devis devis = projectService.findDevisById(devis_id);
        project.getDevis().remove(devis);
        projectService.save(project);
    }

    @DeleteMapping("/client/project/deleteDevis")
    public void deleteDevis(@RequestParam Long devis_id) {
        projectService.deleteDevis(devis_id);
    }

}

