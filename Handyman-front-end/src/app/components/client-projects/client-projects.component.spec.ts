import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProjectsComponent } from './client-projects.component';

describe('ClientProjectsComponent', () => {
  let component: ClientProjectsComponent;
  let fixture: ComponentFixture<ClientProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
