import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtisanComponent } from './edit-artisan.component';

describe('EditArtisanComponent', () => {
  let component: EditArtisanComponent;
  let fixture: ComponentFixture<EditArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
