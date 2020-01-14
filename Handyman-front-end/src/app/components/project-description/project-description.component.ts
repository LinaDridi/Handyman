import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { ProjectService } from '../../services/project.service';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {
  id_artisan;
  project;
  client_username = 'Lina CLIENT';

  //still upload img
  constructor(private tokenStorage: TokenStorageService, private projectService: ProjectService,
              private data: DataService, private router: Router) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(id_artisan => this.id_artisan = id_artisan)
    console.log("the id artisan=", this.id_artisan)
    this.client_username = this.tokenStorage.getUsername();
    console.log(this.client_username)
  }

  onSubmit(form) {

    this.project = new Project(form.value.start_date, form.value.deadline, form.value.address,
      form.value.description, form.value.title, this.id_artisan, this.client_username);
    console.log(this.project)
    this.projectService.addProject(this.project).subscribe((next) => this.router.navigate(['/home']));

  }

}
