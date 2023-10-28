import { TestBed } from '@angular/core/testing';

import { OrderidsService } from './orderids.service';

describe('OrderidsService', () => {
  let service: OrderidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
