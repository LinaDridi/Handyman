import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanComponent } from './artisan.component';

describe('ArtisanComponent', () => {
  let component: ArtisanComponent;
  let fixture: ComponentFixture<ArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
