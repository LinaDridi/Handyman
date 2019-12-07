import { TestBed } from '@angular/core/testing';

import { ArtisanService } from './artisan.service';

describe('ArtisanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtisanService = TestBed.get(ArtisanService);
    expect(service).toBeTruthy();
  });
});
