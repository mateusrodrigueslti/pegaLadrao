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
        return this.http.get(AppSettings.API_ENDPOINT + '/criminoso');
    }

}
