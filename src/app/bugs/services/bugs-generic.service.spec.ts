import { TestBed } from '@angular/core/testing';

import { BugsGenericService } from './bugs-generic.service';

describe('BugsGenericService', () => {
  let service: BugsGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugsGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
