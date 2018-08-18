import { TestBed, inject } from '@angular/core/testing';

import { OccurencesService } from './occurences.service';

describe('OccurencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OccurencesService]
    });
  });

  it('should be created', inject([OccurencesService], (service: OccurencesService) => {
    expect(service).toBeTruthy();
  }));
});
