import { TestBed, inject } from '@angular/core/testing';

import { CriminalsService } from './criminals.service';

describe('CriminalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriminalsService]
    });
  });

  it('should be created', inject([CriminalsService], (service: CriminalsService) => {
    expect(service).toBeTruthy();
  }));
});
