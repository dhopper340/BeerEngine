import { TestBed } from '@angular/core/testing';

import { BreweryService } from './brewery.service';

describe('BreweryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreweryService = TestBed.get(BreweryService);
    expect(service).toBeTruthy();
  });
});
