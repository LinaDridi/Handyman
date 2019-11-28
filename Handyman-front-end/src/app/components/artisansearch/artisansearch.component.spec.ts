import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisansearchComponent } from './artisansearch.component';

describe('ArtisansearchComponent', () => {
  let component: ArtisansearchComponent;
  let fixture: ComponentFixture<ArtisansearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisansearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisansearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
