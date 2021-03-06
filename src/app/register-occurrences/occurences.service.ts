import { Injectable } from '@angular/core';
import { Occurrence } from '../../classes/occurrence';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../classes/app.settings';

@Injectable()
export class OccurencesService {

    constructor(private http: HttpClient) { }

    save(occurrence: Occurrence) {
        return this.http.post(AppSettings.API_ENDPOINT + '/ocorrencia', occurrence);
    }

    getSimilaridade(occurrence: string, ocorrenciaID:number) {
        return this.http.get<any[]>(AppSettings.API_ENDPOINT + '/recomendacao?padraoCriminal='+ occurrence+'&ocorrenciaID='+ ocorrenciaID);
    }

    getAll() {
        return this.http.get<any[]>(AppSettings.API_ENDPOINT + '/ocorrencia');
    }

    deletar(ocorrenciaId) {
        return this.http.delete(AppSettings.API_ENDPOINT + '/ocorrencia?id=' + ocorrenciaId);
    }

    associarCrime(req) {
        return this.http.post(AppSettings.API_ENDPOINT + '/recomendacao', req);
    }
}
