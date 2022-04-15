import { TestBed } from '@angular/core/testing';

import { GifsDataService } from './gifs-data.service';

describe('GifsDataService', () => {
  let service: GifsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
