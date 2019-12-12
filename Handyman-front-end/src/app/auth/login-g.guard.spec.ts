import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGGuard } from './login-g.guard';

describe('LoginGGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGGuard]
    });
  });

  it('should ...', inject([LoginGGuard], (guard: LoginGGuard) => {
    expect(guard).toBeTruthy();
  }));
});
