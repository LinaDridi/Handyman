import { TestBed, async, inject } from '@angular/core/testing';

import { LogoutGGuard } from './logout-g.guard';

describe('LogoutGGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutGGuard]
    });
  });

  it('should ...', inject([LogoutGGuard], (guard: LogoutGGuard) => {
    expect(guard).toBeTruthy();
  }));
});
