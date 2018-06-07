import { Component, OnInit } from '@angular/core'
import { GenerateRecommendationService } from './generate-recommendation.service';

@Component({
  selector: 'app-generate-recommendation',
  templateUrl: './generate-recommendation.component.html',
  styleUrls: ['./generate-recommendation.component.css']
})
export class RecommendationGenerateComponent implements OnInit {

  constructor(private recommendationService: GenerateRecommendationService) { }

  ngOnInit() {
  }

  gerarRecomendacao() {
    this.recommendationService.generate('oi eu sou o goku', 'o goku sou eu')
      .subscribe(
        data => {
          console.log(data)
        },
        err => console.error(err)
      );
  }

}
