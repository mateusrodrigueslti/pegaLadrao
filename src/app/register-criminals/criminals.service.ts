import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../classes/person';

@Injectable()
export class CriminalsService {

    constructor(private http: HttpClient) { }

    save(person: Person) {
        return this.http.post('http://localhost:8080/person', person);
    }

    getAll() {
        return this.http.get('http://localhost:8080/person');
    }

}
