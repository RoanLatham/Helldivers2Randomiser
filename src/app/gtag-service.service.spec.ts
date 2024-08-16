import { TestBed } from '@angular/core/testing';

import { GtagServiceService } from './gtag-service.service';

describe('GtagServiceService', () => {
  let service: GtagServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtagServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
