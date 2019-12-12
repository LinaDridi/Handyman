import { TestBed, async, inject } from '@angular/core/testing';

import { RoleGGuard } from './role-g.guard';

describe('RoleGGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGGuard]
    });
  });

  it('should ...', inject([RoleGGuard], (guard: RoleGGuard) => {
    expect(guard).toBeTruthy();
  }));
});
