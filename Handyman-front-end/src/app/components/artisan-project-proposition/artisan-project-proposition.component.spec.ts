import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanProjectPropositionComponent } from './artisan-project-proposition.component';

describe('ArtisanProjectPropositionComponent', () => {
  let component: ArtisanProjectPropositionComponent;
  let fixture: ComponentFixture<ArtisanProjectPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanProjectPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanProjectPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
