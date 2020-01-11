import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDevisComponent } from './project-devis.component';

describe('ProjectDevisComponent', () => {
  let component: ProjectDevisComponent;
  let fixture: ComponentFixture<ProjectDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
