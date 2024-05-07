import { TestBed } from '@angular/core/testing';

import { WarbondFilterStateService } from './warbond-filter-state.service';

describe('WarbondFilterStateService', () => {
  let service: WarbondFilterStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarbondFilterStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
