import { TestBed } from '@angular/core/testing';

import { ApiShipService } from './api-ship.service';

describe('ApiShipService', () => {
  let service: ApiShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
