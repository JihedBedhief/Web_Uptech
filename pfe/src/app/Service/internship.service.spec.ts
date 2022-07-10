import { TestBed } from '@angular/core/testing';

import { internshipService } from './internship.service';

describe('InternshipService', () => {
  let service: internshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(internshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
