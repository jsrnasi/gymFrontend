import { TestBed } from '@angular/core/testing';

import { GymDetialsService } from './gym-detials.service';

describe('GymDetialsService', () => {
  let service: GymDetialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymDetialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
