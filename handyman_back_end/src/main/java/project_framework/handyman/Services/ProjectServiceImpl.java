package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.ArtisanService;
import project_framework.handyman.Services.Interfaces.ProjectService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Project;
import project_framework.handyman.repositories.ProjectRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    public ProjectRepository projectRepository;
    @Autowired
    public ArtisanService artisanService;
    @Override
    public List<Project> findAll(){
        return projectRepository.findAll();
    }
    @Override
    public Project findById(int theId){
        Optional<Project> result = projectRepository.findById(theId);

        Project theProject = null;

        if (result.isPresent()) {

            theProject = result.get();

        }
        else {
            // we didn't find the Project
            throw new RuntimeException("Did not find Project id - " + theId);
        }

        return theProject;
    }
    @Override
    public Project save(Project project){
        return projectRepository.save(project);
    }
    @Override
    public void deleteById(int theId){
        projectRepository.deleteById(theId);
    }
    @Override
    public List<Artisan> suggestCraftsman(Project project){
    return artisanService.findArtiasnBy(project.getService(),project.getStart_date());}
    @Override
    public Set<Project> getProposedProjects(Long id){
    return this.projectRepository.getProposedProjects(id);
    }
}
