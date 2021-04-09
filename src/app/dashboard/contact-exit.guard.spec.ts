import { TestBed } from '@angular/core/testing';

import { ContactExitGuard } from './contact-exit.guard';

describe('ContactExitGuard', () => {
  let guard: ContactExitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContactExitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
