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
import org.springframework.web.bind.annotation.*;
import project_framework.handyman.Services.Interfaces.ArtisanService;
import project_framework.handyman.Services.Interfaces.ProjectService;
import project_framework.handyman.Services.Interfaces.ServiceService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Project;
import project_framework.handyman.models.Role;
import project_framework.handyman.models.Service;

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
    private ArtisanService artisanService;
    private ServiceService serviceService;
    private ProjectService projectService;

    @Autowired
    public CraftsManController(ArtisanService theartisanservice, ServiceService theserviceservice, ProjectService theprojectService){
        artisanService=theartisanservice;
        serviceService=theserviceservice;
        projectService=theprojectService;
    }

    @GetMapping("/artisans")
    public List<Artisan> getArtisans(){
        return artisanService.findAll();
    }

    @GetMapping("/artisan")
    public Artisan getArtisan(@RequestParam int id){
        return artisanService.findById(id);
    }

    @GetMapping("/saveartisan")
    public void setartisan()
    {
        Artisan artisan=new Artisan("walim","krichen","walim","krichenwalim@gmail.com","58856530","27/01/1998","sfax","plumber","58856530","5/5","individuel","hi i am walim","img.png");
        Set<Service> services = new HashSet<>();
        Service s = serviceService.findById(1);
        services.add(s);
        artisan.setServices(services);
        artisanService.save(artisan);
    }

    @GetMapping("/deleteartisan")
    public void deleteArtisan(@RequestParam int id){ artisanService.deleteById(id); }
    @CrossOrigin(origins = "*")
    @GetMapping("/artisan/projects")
    public List<Project> getArtisanProjects(@RequestParam int id){
        return artisanService.getArtisanProjects(id);
    }

    /*public void acceptProject(int idProject)
    {
        Project project=projectService.findById(idProject);
        project.setAccepted_by_artisan(true);
    }*/
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




}
