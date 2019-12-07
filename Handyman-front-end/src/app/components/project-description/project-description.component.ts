import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { ProjectService } from '../../services/project.service';
import { Project } from 'src/app/models/project';
@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private projectService: ProjectService) { }

  project;

  ngOnInit() {

  }

  onSubmit(form) {
    this.project = new Project(form.value.start_date, form.value.deadline, form.value.address, form.value.description, form.value.title);
    console.log(this.project)
    this.projectService.addProject(this.project).subscribe();

  }

}
