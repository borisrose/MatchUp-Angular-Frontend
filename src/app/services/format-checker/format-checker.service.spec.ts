import { TestBed } from '@angular/core/testing';

import { FormatCheckerService } from './format-checker.service';

describe('FormatCheckerService', () => {
  let service: FormatCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
