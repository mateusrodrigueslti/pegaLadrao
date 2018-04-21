import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../classes/person';

@Injectable()
export class CriminalsService {

    save(person: Person) {
        return this.http.post('http://localhost:8080/person', person);
    }
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get('http://localhost:8080/person');
    }

}
