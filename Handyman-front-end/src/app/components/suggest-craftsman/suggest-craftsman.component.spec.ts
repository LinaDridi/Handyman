import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestCraftsmanComponent } from './suggest-craftsman.component';

describe('SuggestCraftsmanComponent', () => {
  let component: SuggestCraftsmanComponent;
  let fixture: ComponentFixture<SuggestCraftsmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestCraftsmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestCraftsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
