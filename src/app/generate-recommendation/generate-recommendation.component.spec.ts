import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationGenerateComponent } from './generate-recommendation.component';

describe('GenerateRecommendationComponent', () => {
  let component: RecommendationGenerateComponent;
  let fixture: ComponentFixture<RecommendationGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
