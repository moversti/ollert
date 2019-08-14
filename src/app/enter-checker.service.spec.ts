import { TestBed } from '@angular/core/testing';

import { EnterCheckerService } from './enter-checker.service';

describe('EnterCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterCheckerService = TestBed.get(EnterCheckerService);
    expect(service).toBeTruthy();
  });
});
