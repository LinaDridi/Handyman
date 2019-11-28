import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationArtisanComponent } from './registration-artisan.component';

describe('RegistrationArtisanComponent', () => {
  let component: RegistrationArtisanComponent;
  let fixture: ComponentFixture<RegistrationArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
