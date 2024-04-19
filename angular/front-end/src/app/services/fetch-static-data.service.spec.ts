import { TestBed } from '@angular/core/testing';

import { FetchStaticDataService } from './fetch-static-data.service';

describe('FetchStaticDataService', () => {
  let service: FetchStaticDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStaticDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
