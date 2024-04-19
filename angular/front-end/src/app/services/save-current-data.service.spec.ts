import { TestBed } from '@angular/core/testing';

import { SaveCurrentDataService } from './save-current-data.service';

describe('SaveCurrentDataService', () => {
  let service: SaveCurrentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCurrentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
