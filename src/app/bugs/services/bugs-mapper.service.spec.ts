import { TestBed } from '@angular/core/testing';

import { BugsMapperService } from './bugs-mapper.service';

describe('BugsMapperService', () => {
  let service: BugsMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugsMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
