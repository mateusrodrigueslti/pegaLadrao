import { TestBed, inject } from '@angular/core/testing';

import { GenerateRecommendationService } from './generate-recommendation.service';

describe('GenerateRecommendationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateRecommendationService]
    });
  });

  it('should be created', inject([GenerateRecommendationService], (service: GenerateRecommendationService) => {
    expect(service).toBeTruthy();
  }));
});
