import { TestBed } from '@angular/core/testing';

import { MycartServiceService } from './mycart-service.service';

describe('MycartServiceService', () => {
  let service: MycartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
