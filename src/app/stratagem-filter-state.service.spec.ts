import { TestBed } from '@angular/core/testing';

import { StratagemFilterStateService } from './stratagem-filter-state.service';

describe('StratagemFilterStateService', () => {
  let service: StratagemFilterStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StratagemFilterStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
