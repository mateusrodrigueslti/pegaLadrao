import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GenerateRecommendationService {

  constructor(private http: HttpClient) { }

  generate(doc1, doc2){
    return this.http.post('http://www.scurtu.it/apis/documentSimilarity?doc1=' + doc1 + '&doc2=' + doc2, '');
  }

}
