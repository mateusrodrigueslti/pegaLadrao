import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../classes/person';
import { AppSettings } from '../../classes/app.settings';

@Injectable()
export class CriminalsService {

    constructor(private http: HttpClient) { }

    save(person: Person) {
        return this.http.post(AppSettings.API_ENDPOINT + '/criminoso', person);
    }

    getAll() {
        return this.http.get<any[]>(AppSettings.API_ENDPOINT + '/criminoso');
    }

    deletar(criminosoId) {
        return this.http.delete(AppSettings.API_ENDPOINT + '/criminoso?id=' + criminosoId);
    }

    buscarCrimes(criminosoID){
        return this.http.get<any[]>(AppSettings.API_ENDPOINT + '/recomendacao/crimes?criminosoID=' + criminosoID);
    }

}
